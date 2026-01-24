import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Collections (real API)', () => {
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

    it('fetches the collection of Harry Potter movies', async () => {
        const res = await tmdb.collections.getCollectionDetails(1241);

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.original_name).toBe('Harry Potter Collection');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches the images for the collection of Harry Potter movies', async () => {
        const res = await tmdb.collections.getCollectionImages(1241);

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.backdrops.length).toBeGreaterThan(1);

        console.log(`Fetched ${res.backdrops.length} backdrops`);
    }, 10000);

    it('fetches the translations for the collection of Harry Potter movies', async () => {
        const res = await tmdb.collections.getCollectionTranslations(1241);

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.translations.length).toBeGreaterThan(1);

        console.log(`Fetched ${res.translations.length} translations`);
    }, 10000);
});
