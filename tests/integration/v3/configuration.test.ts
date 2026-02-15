import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';

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

        tmdb = new TmdbClient(apiKey);
    });

    it('fetches configuration details from /configuration', async () => {
        const res = await tmdb.configuration.getDetails();

        // Spot-check a few well-known ones (stable data)
        expect(res.images).toBeDefined();
        expect(res.images.baseUrl).toBe('http://image.tmdb.org/t/p/');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('fetches real list of countries from /configuration/countries', async () => {
        const countries = await tmdb.configuration.getCountries();

        // Spot-check a few well-known ones (stable data)
        const us = countries.find(c => c.iso3166_1 === 'US');
        expect(us).toBeDefined();
        expect(us?.englishName).toBe('United States of America');
        expect(us?.nativeName).toBe('United States');

        const pt = countries.find(c => c.iso3166_1 === 'PT');
        expect(pt).toBeDefined();
        expect(pt?.englishName).toBe('Portugal');

        console.log(`Fetched ${countries.length} countries`);
    }, 10000);

    it('fetches configuration jobs from /configuration/jobs', async () => {
        const res = await tmdb.configuration.getJobs();

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.department === 'Production');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} jobs`);
    }, 10000);

    it('fetches configuration languages from /configuration/languages', async () => {
        const res = await tmdb.configuration.getLanguages();

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.iso639_1 === 'pt');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} languages`);
    }, 10000);

    it('fetches primary translations from /configuration/primary_translations', async () => {
        const res = await tmdb.configuration.getPrimaryTranslations();

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r === 'af-ZA');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} primary translations`);
    }, 10000);

    it('fetches timezones from /configuration/timezones', async () => {
        const res = await tmdb.configuration.getTimezones();

        // Spot-check a few well-known ones (stable data)
        const entry = res.find(r => r.iso3166_1 === 'AD');
        expect(entry).toBeDefined();

        console.log(`Fetched ${res.length} timezones`);
    }, 10000);
});
