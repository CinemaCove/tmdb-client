import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';
import { KEYWORDS } from '../consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - Keyword (real API)', () => {
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

    it('fetches keyword details for superhero keyword', async () => {
        const keywordId = KEYWORDS.SUPERHERO.ID;
        const res = await tmdb.keyword.getDetails(keywordId);

        expect(res.id).toBe(keywordId);
        expect(res.name).toBe(KEYWORDS.SUPERHERO.NAME);

        console.log(`Keyword ID: ${res.id}`);
        console.log(`Keyword Name: ${res.name}`);
    }, 10000);

    it('fetches keyword details for based on novel keyword', async () => {
        const keywordId = KEYWORDS.BASED_ON_NOVEL.ID;
        const res = await tmdb.keyword.getDetails(keywordId);

        expect(res.id).toBe(keywordId);
        expect(res.name).toBe(KEYWORDS.BASED_ON_NOVEL.NAME);

        console.log(`Keyword ID: ${res.id}`);
        console.log(`Keyword Name: ${res.name}`);
    }, 10000);

    it('verifies keyword response structure', async () => {
        const keywordId = KEYWORDS.SUPERHERO.ID;
        const res = await tmdb.keyword.getDetails(keywordId);

        // Verify all expected fields are present
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('name');

        // Verify types
        expect(typeof res.id).toBe('number');
        expect(typeof res.name).toBe('string');

        console.log('Keyword response structure validated');
    }, 10000);
});
