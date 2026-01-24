import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Company (real API)', () => {
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

    it('fetches the details of Walt Disney', async () => {
        const res = await tmdb.company.getDetails(3166);

        // Spot-check a few well-known ones (stable data)
        expect(res.name).toBe('Walt Disney Productions');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches the alternative names of Walt Disney', async () => {
        const res = await tmdb.company.getAlternativeNames(3166);

        // Spot-check a few well-known ones (stable data)
        expect(res.results.length).toBeGreaterThanOrEqual(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches the logos of Walt Disney', async () => {
        const res = await tmdb.company.getImages(3166);

        // Spot-check a few well-known ones (stable data)
        expect(res.logos.length).toBeGreaterThanOrEqual(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
});
