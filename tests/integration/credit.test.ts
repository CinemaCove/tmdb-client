import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, GenderType, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Credit (real API)', () => {
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

    it('fetches the details of Pedro Pascal in the last of us', async () => {
        const res = await tmdb.credit.getDetails('6024a814c0ae36003d59cc3c');

        // Spot-check a few well-known ones (stable data)
        expect(res.person.name).toBe('Pedro Pascal');
        expect(res.person.gender).toBe(GenderType.Male);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
});
