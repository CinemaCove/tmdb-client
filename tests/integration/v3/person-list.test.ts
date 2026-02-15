import { beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';

import { TmdbClient } from '../../../src/v3';

dotenv.config(); // loads .env

describe('TmdbClient - People (real API)', () => {
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

    it('fetches popular people', async () => {
        const res = await tmdb.personList.getPopular();

        expect(res.totalResults).toBeGreaterThan(0);
        expect(res.results).toBeDefined();
        expect(res.results.length).toBeGreaterThan(0);

        // Check structure of first result
        const firstPerson = res.results[0];
        expect(firstPerson.id).toBeDefined();
        expect(firstPerson.name).toBeDefined();

        console.log(`Fetched ${res.totalResults} popular people`);
    }, 10000);

    it('fetches popular people with pagination', async () => {
        const res = await tmdb.personList.getPopular({ page: 2 });

        expect(res.page).toBe(2);
        expect(res.results).toBeDefined();
        expect(res.results.length).toBeGreaterThan(0);

        console.log(`Fetched page 2 with ${res.results.length} people`);
    }, 10000);
});
