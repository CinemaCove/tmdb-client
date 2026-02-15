import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';

dotenv.config(); // loads .env
 
describe('TmdbClient - TvShowList (real API)', () => {
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

    it('fetches TV shows airing today', async () => {
        const res = await tmdb.tvShowList.getAiringToday({
            language: 'en-US',
            page: 1,
            timezone: 'America/New_York',
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        if (res.results.length > 0) {
            const first = res.results[0];
            expect(first.id).toBeDefined();
            expect(first.name).toBeDefined();
            expect(first.firstAirDate).toBeDefined();
        }

        console.log(`Fetched ${res.results.length} TV shows airing today`);
    }, 10000);

    it('fetches TV shows on the air', async () => {
        const res = await tmdb.tvShowList.getTvShowsOnTheAir({
            language: 'en-US',
            page: 1,
            timezone: 'America/New_York',
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.results.length} TV shows on the air`);
    }, 10000);

    it('fetches popular TV shows', async () => {
        const res = await tmdb.tvShowList.getPopularTvShows({
            language: 'en-US',
            page: 1,
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.results.length} popular TV shows`);
    }, 10000);

    it('fetches top rated TV shows', async () => {
        const res = await tmdb.tvShowList.getTopRatedTvShows({
            language: 'en-US',
            page: 1,
        });

        expect(res.page).toBe(1);
        expect(res.results).toBeDefined();
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.results.length} top rated TV shows`);
    }, 10000);
});
