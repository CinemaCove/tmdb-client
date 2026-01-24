import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Changes (real API)', () => {
    let tmdb: TmdbClient;
    let startDate: string;
    let endDate: string;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new DefaultHttpClient(apiKey));
        const dtNow = new Date();
        startDate = new Date(dtNow.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        endDate = dtNow.toISOString().split('T')[0];
    });

    it('fetches all movie change ids from the last 24 hours', async () => {
        const res = await tmdb.changes.getMovieChanges({
            start_date: startDate,
            end_date: endDate,
        });

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches all tv show change ids from the last 24 hours', async () => {
        const res = await tmdb.changes.getTVChanges({
            start_date: startDate,
            end_date: endDate,
        });
        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches all people change ids from the last 24 hours', async () => {
        const res = await tmdb.changes.getPeopleChanges({
            start_date: startDate,
            end_date: endDate,
        });
        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
});
