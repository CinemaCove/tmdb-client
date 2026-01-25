import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Movie (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new DefaultHttpClient(apiKey));
    });

    it('fetches all the movies currently in theatres', async () => {
        const res = await tmdb.movie.getNowPlayingList();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches popular movies', async () => {
        const res = await tmdb.movie.getPopularList();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches top rated movies', async () => {
        const res = await tmdb.movie.getTopRatedList();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches upcoming movies', async () => {
        const res = await tmdb.movie.getUpcomingList();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches fight club details with all additional responses', async () => {
        const res = await tmdb.movie.getDetails(550, {
            appendToResponse: [
                'credits',
                'images',
                'videos',
                'recommendations',
                'similar',
                'reviews',
                'keywords',
                'release_dates',
                'alternative_titles',
                'translations',
                'external_ids',
                'watch/providers',
            ],
        });

        // Make sure the structure is correct
        expect(res.credits).toBeDefined();
        expect(res.images).toBeDefined();
        expect(res.videos).toBeDefined();
        expect(res.recommendations).toBeDefined();
        expect(res.similar).toBeDefined();
        expect(res.reviews).toBeDefined();
        expect(res.keywords).toBeDefined();
        expect(res.releaseDates).toBeDefined();
        expect(res.alternativeTitles).toBeDefined();
        expect(res.translations).toBeDefined();
        expect(res.externalIds).toBeDefined();
        expect(res['watch/providers']).toBeDefined();

        // Spot-check a few well-known ones (stable data)
        expect(res.externalIds!.imdbId).toBe('tt0137523');
    }, 10000);
});
