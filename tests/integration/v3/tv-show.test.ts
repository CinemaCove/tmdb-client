import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';
import { createTestSession, TestSession } from '../helpers/auth';
import { TV_SHOWS } from '../consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - TvShow (real API)', () => {
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

    const seriesId = TV_SHOWS.THE_IT_CROWD.ID;

    it('fetches TV show details', async () => {
        const res = await tmdb.tvShow.getDetails(seriesId, {
            appendToResponse: [],
            language: 'en-US',
        });

        expect(res.id).toBe(seriesId);
        expect(res.name).toBeDefined();
        expect(res.overview).toBeDefined();
        expect(res.seasons).toBeDefined();
        expect(Array.isArray(res.seasons)).toBe(true);

        console.log(`Fetched TV show: ${res.name}`);
    }, 10000);

    it('fetches TV show details with appendToResponse', async () => {
        const res = await tmdb.tvShow.getDetails(seriesId, {
            appendToResponse: [
                'credits',
                'images',
                'videos',
                'external_ids',
                'keywords',
                'translations',
            ],
            language: 'en-US',
        });

        expect(res.credits).toBeDefined();
        expect(res.images).toBeDefined();
        expect(res.videos).toBeDefined();
        expect(res.externalIds).toBeDefined();
        expect(res.keywords).toBeDefined();
        expect(res.translations).toBeDefined();
        expect(res.externalIds!.imdbId).toBe(TV_SHOWS.THE_IT_CROWD.IMDB_ID);

        console.log(`Fetched TV show with extended data`);
    }, 10000);

    it('fetches TV show aggregate credits', async () => {
        const res = await tmdb.tvShow.getAggregateCredits(seriesId, { language: 'en-US' });

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();
        expect(Array.isArray(res.cast)).toBe(true);

        console.log(`Fetched ${res.cast.length} cast members`);
    }, 10000);

    it('fetches TV show alternative titles', async () => {
        const res = await tmdb.tvShow.getAlternativeTitles(seriesId);

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} alternative titles`);
    }, 10000);

    it('fetches TV show content ratings', async () => {
        const res = await tmdb.tvShow.getContentRatings(seriesId);

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} content ratings`);
    }, 10000);

    it('fetches TV show credits', async () => {
        const res = await tmdb.tvShow.getCredits(seriesId, { language: 'en-US' });

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();

        console.log(`Fetched credits for TV show`);
    }, 10000);

    it('fetches TV show episode groups', async () => {
        const res = await tmdb.tvShow.getEpisodeGroups(seriesId);

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} episode groups`);
    }, 10000);

    it('fetches TV show external IDs', async () => {
        const res = await tmdb.tvShow.getExternalIds(seriesId);

        expect(res.imdbId).toBe(TV_SHOWS.THE_IT_CROWD.IMDB_ID);

        console.log(`Fetched external IDs`);
    }, 10000);

    it('fetches TV show images', async () => {
        const res = await tmdb.tvShow.getImages(seriesId, {
            language: 'en-US',
            includeImageLanguage: ['en'],
        });

        expect(res.backdrops).toBeDefined();
        expect(res.posters).toBeDefined();
        expect(Array.isArray(res.posters)).toBe(true);

        console.log(`Fetched ${res.posters.length} posters`);
    }, 10000);

    it('fetches TV show keywords', async () => {
        const res = await tmdb.tvShow.getKeywords(seriesId);

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} keywords`);
    }, 10000);

    it('fetches latest TV show', async () => {
        const res = await tmdb.tvShow.getLatest();

        expect(res.id).toBeDefined();
        expect(res.name).toBeDefined();

        console.log(`Fetched latest TV show: ${res.name}`);
    }, 10000);

    it('fetches TV show lists', async () => {
        const res = await tmdb.tvShow.getLists(seriesId, { language: 'en-US', page: 1 });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} lists`);
    }, 10000);

    it('fetches TV show recommendations', async () => {
        const res = await tmdb.tvShow.getRecommendations(seriesId, {
            language: 'en-US',
            page: 1,
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();

        console.log(`Fetched ${res.results.length} recommendations`);
    }, 10000);

    it('fetches TV show reviews', async () => {
        const res = await tmdb.tvShow.getReviews(seriesId, { language: 'en-US', page: 1 });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} reviews`);
    }, 10000);

    it('fetches TV show screened theatrically', async () => {
        const res = await tmdb.tvShow.getScreenedTheatrically(seriesId);

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched screened theatrically data`);
    }, 10000);

    it('fetches similar TV shows', async () => {
        const res = await tmdb.tvShow.getSimilar(String(seriesId), {
            language: 'en-US',
            page: 1,
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();

        console.log(`Fetched ${res.results.length} similar TV shows`);
    }, 10000);

    it('fetches TV show translations', async () => {
        const res = await tmdb.tvShow.getTranslations(seriesId);

        expect(res.translations).toBeDefined();
        expect(res.translations.length).toBeGreaterThan(0);

        console.log(`Fetched ${res.translations.length} translations`);
    }, 10000);

    it('fetches TV show videos', async () => {
        const res = await tmdb.tvShow.getVideos(seriesId, {
            language: 'en-US',
            includeVideoLanguage: ['en'],
        });

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} videos`);
    }, 10000);

    it('fetches TV show watch providers', async () => {
        const res = await tmdb.tvShow.getWatchProviders(seriesId);

        expect(res.results).toBeDefined();

        console.log(`Fetched watch providers`);
    }, 10000);
});

describe('TmdbClient - TvShow (authenticated)', () => {
    let tmdb: TmdbClient;
    let testSession: TestSession;

    const seriesId = TV_SHOWS.THE_IT_CROWD.ID;

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

    it('fetches TV show account states', async () => {
        const res = await tmdb.tvShow.getAccountStates(seriesId, {
            sessionId: testSession.sessionId || '',
            guestSessionId: '',
        });

        expect(res.id).toBe(seriesId);
        expect(res).toHaveProperty('favorite');
        expect(res).toHaveProperty('rated');
        expect(res).toHaveProperty('watchlist');

        console.log(`Fetched account states for TV show`);
    }, 10000);

    it('adds and removes a TV show rating', async () => {
        const session = testSession.sessionId || '';

        const addRes = await tmdb.tvShow.addRating(
            seriesId,
            { value: 8 },
            { sessionId: session, guestSessionId: '' }
        );

        expect(addRes.statusCode).toBeDefined();
        expect(addRes.statusMessage).toBeDefined();

        const deleteRes = await tmdb.tvShow.deleteRating(seriesId, {
            sessionId: session,
            guestSessionId: '',
        });

        expect(deleteRes.statusCode).toBeDefined();
        expect(deleteRes.statusMessage).toBeDefined();

        console.log(`Added and removed rating for TV show`);
    }, 15000);
});
