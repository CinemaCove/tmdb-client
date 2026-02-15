import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';
import { createTestSession, TestSession } from '../helpers/auth';
import { TV_SHOWS } from '../consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - TvEpisode (real API)', () => {
    let tmdb: TmdbClient;

    const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
    const seasonNumber = 2;
    const episodeNumber = 4; // S02E04

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(apiKey);
    });

    it('fetches TV episode images', async () => {
        const res = await tmdb.tvEpisode.getImages(seriesId, seasonNumber, episodeNumber, {
            language: 'en-US',
            includeImageLanguage: ['en'],
        });

        expect(res.id).toBe(TV_SHOWS.THE_IT_CROWD.EPISODES.S02_E04.ID);
        expect(res.stills).toBeDefined();
        expect(Array.isArray(res.stills)).toBe(true);

        console.log(`Fetched ${res.stills.length} still images for episode`);
    }, 10000);

    it('fetches TV episode translations', async () => {
        const res = await tmdb.tvEpisode.getTranslations(seriesId, seasonNumber, episodeNumber);

        expect(res.id).toBe(TV_SHOWS.THE_IT_CROWD.EPISODES.S02_E04.ID);
        expect(res.translations).toBeDefined();
        expect(Array.isArray(res.translations)).toBe(true);

        console.log(`Fetched ${res.translations.length} translations for episode`);
    }, 10000);

    it('fetches TV episode videos', async () => {
        const res = await tmdb.tvEpisode.getVideos(seriesId, seasonNumber, episodeNumber, {
            language: 'en-US',
            includeVideoLanguage: ['en'],
        });

        expect(res.id).toBe(TV_SHOWS.THE_IT_CROWD.EPISODES.S02_E04.ID);
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} videos for episode`);
    }, 10000);
});

describe('TmdbClient - TvEpisode (authenticated)', () => {
    let tmdb: TmdbClient;
    let testSession: TestSession;

    const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
    const seasonNumber = 2;
    const episodeNumber = 4;

    beforeAll(async () => {
        const token: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;

        if (!token) {
            throw new Error(
                'TMDB_API_READ_ACCESS_TOKEN is not set in .env — cannot run authenticated tests. Add it and try again.'
            );
        }
        tmdb = new TmdbClient({ accessToken: token });
        testSession = await createTestSession(tmdb);
    });

    it('adds and removes an episode rating', async () => {
        const session = testSession.sessionId || '';

        const addRes = await tmdb.tvEpisode.addRating(
            seriesId,
            seasonNumber,
            episodeNumber,
            { value: 8 },
            { sessionId: session, guestSessionId: '' }
        );

        expect(addRes.statusCode).toBeDefined();
        expect(addRes.statusMessage).toBeDefined();

        const deleteRes = await tmdb.tvEpisode.deleteRating(
            seriesId,
            seasonNumber,
            episodeNumber,
            { sessionId: session, guestSessionId: '' }
        );

        expect(deleteRes.statusCode).toBeDefined();
        expect(deleteRes.statusMessage).toBeDefined();

        console.log(`Added and removed rating for episode`);
    }, 15000);
});
