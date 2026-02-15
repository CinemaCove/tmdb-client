import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';
import { createTestSession, TestSession } from '../helpers/auth';
import { TV_SHOWS } from '../consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - TvSeason (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(apiKey);
    });

    it('fetches TV season details', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getDetails(seriesId, seasonNumber, {
            appendToResponse: [],
            language: 'en-US',
        });

        expect(res.id).toBeDefined();
        expect(res.name).toBeDefined();
        expect(res.seasonNumber).toBe(seasonNumber);
        expect(res.episodes).toBeDefined();
        expect(Array.isArray(res.episodes)).toBe(true);

        console.log(`Fetched season: ${res.name} with ${res.episodes.length} episodes`);
    }, 10000);

    it('fetches TV season details with appendToResponse', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getDetails(seriesId, seasonNumber, {
            appendToResponse: ['credits', 'images', 'videos', 'translations', 'external_ids'],
            language: 'en-US',
        });

        expect(res.credits).toBeDefined();
        expect(res.images).toBeDefined();
        expect(res.videos).toBeDefined();
        expect(res.translations).toBeDefined();
        expect(res.externalIds).toBeDefined();

        if (res.credits) {
            expect(res.credits.cast).toBeDefined();
            expect(res.credits.crew).toBeDefined();
        }

        console.log(`Fetched season with credits, images, videos, translations, external_ids`);
    }, 10000);

    it('fetches TV season aggregate credits', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getAggregateCredits(seriesId, seasonNumber, {
            language: 'en-US',
        });

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();
        expect(Array.isArray(res.cast)).toBe(true);

        console.log(`Fetched ${res.cast.length} cast members, ${res.crew.length} crew members`);
    }, 10000);

    it('fetches TV season credits', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getCredits(seriesId, seasonNumber, {
            language: 'en-US',
        });

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();

        console.log(`Fetched credits for season ${seasonNumber}`);
    }, 10000);

    it('fetches TV season external IDs', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getExternalIds(seriesId, seasonNumber);

        expect(res.id).toBeDefined();

        console.log(`Fetched external IDs: ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches TV season images', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getImages(seriesId, seasonNumber, {
            language: 'en-US',
            includeImageLanguage: ['en'],
        });

        expect(res.id).toBeDefined();
        expect(res.posters).toBeDefined();
        expect(Array.isArray(res.posters)).toBe(true);

        console.log(`Fetched ${res.posters.length} poster images`);
    }, 10000);

    it('fetches TV season translations', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getTranslations(seriesId, seasonNumber);

        expect(res.translations).toBeDefined();
        expect(res.translations.length).toBeGreaterThan(0);

        console.log(`Fetched ${res.translations.length} translations`);
    }, 10000);

    it('fetches TV season videos', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getVideos(seriesId, seasonNumber, {
            language: 'en-US',
            includeVideoLanguage: ['en'],
        });

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} videos`);
    }, 10000);

    it('fetches TV season watch providers', async () => {
        const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
        const seasonNumber = 1;

        const res = await tmdb.tvSeason.getWatchProviders(seriesId, seasonNumber, {
            language: 'en-US',
        });

        expect(res.results).toBeDefined();

        console.log(`Fetched watch providers for ${Object.keys(res.results).length} countries`);
    }, 10000);
});

describe('TmdbClient - TvSeason (authenticated)', () => {
    let tmdb: TmdbClient;
    let testSession: TestSession;

    const seriesId = TV_SHOWS.THE_IT_CROWD.ID;
    const seasonNumber = 1;

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

    it('fetches TV season account states', async () => {
        const res = await tmdb.tvSeason.getAccountStates(
            seriesId,
            seasonNumber,
            {
                sessionId: testSession.sessionId || '',
                guestSessionId: '',
            }
        );

        expect(res.id).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched account states for ${res.results.length} episodes`);
    }, 10000);
});
