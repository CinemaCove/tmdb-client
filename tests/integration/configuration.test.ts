import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Configuration (real API)', () => {
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

    it('fetches configuration details from /configuration', async () => {
        const res = await tmdb.configuration.getDetails();

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.images).toBeDefined();
        expect(res.images.base_url).toBe('http://image.tmdb.org/t/p/');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches real list of countries from /configuration/countries', async () => {
        const countries = await tmdb.configuration.getCountries();

        // Basic shape & content assertions (real data should have ~200+ entries)
        expect(Array.isArray(countries)).toBe(true);
        expect(countries.length).toBeGreaterThan(150); // TMDB has ~240+ countries/regions

        // Spot-check a few well-known ones (stable data)
        const us = countries.find(c => c.iso_3166_1 === 'US');
        expect(us).toBeDefined();
        expect(us?.english_name).toBe('United States of America');
        expect(us?.native_name).toBe('United States');

        const pt = countries.find(c => c.iso_3166_1 === 'PT');
        expect(pt).toBeDefined();
        expect(pt?.english_name).toBe('Portugal');

        // Optional: log count for visibility during dev
        console.log(`Fetched ${countries.length} countries`);
    }, 10000);

    it('fetches configuration jobs from /configuration/jobs', async () => {
        const res = await tmdb.configuration.getJobs();

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(1);

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.department === 'Production');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} jobs`);
    }, 10000);

    it('fetches configuration languages from /configuration/languages', async () => {
        const res = await tmdb.configuration.getLanguages();

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(1);

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.iso_639_1 === 'pt');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} languages`);
    }, 10000);

    it('fetches primary translations from /configuration/primary_translations', async () => {
        const res = await tmdb.configuration.getPrimaryTranslations();

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(1);

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r === 'af-ZA');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} primary translations`);
    }, 10000);

    it('fetches timezones from /configuration/timezones', async () => {
        const res = await tmdb.configuration.getTimezones();

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(1);

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.iso_3166_1 === 'AD');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} timezones`);
    }, 10000);
});
