import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';

dotenv.config(); // loads .env

describe('TmdbClient - WatchProvider (real API)', () => {
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

    it('fetches available regions for watch providers', async () => {
        const res = await tmdb.watchProvider.getAvailableRegions({
            language: 'en-US',
        });

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);
        expect(res.results.length).toBeGreaterThan(0);

        const us = res.results.find((r) => r.iso3166_1 === 'US');
        expect(us).toBeDefined();
        expect(us?.englishName).toBeDefined();
        expect(us?.nativeName).toBeDefined();

        console.log(`Fetched ${res.results.length} available regions`);
    }, 10000);

    it('fetches movie watch providers for a region', async () => {
        const res = await tmdb.watchProvider.getMovieList({
            language: 'en-US',
            watchRegion: 'US',
        });

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        if (res.results.length > 0) {
            const provider = res.results[0];
            expect(provider.providerId).toBeDefined();
            expect(provider.providerName).toBeDefined();
            expect(provider.logoPath).toBeDefined();
        }

        console.log(`Fetched ${res.results.length} movie watch providers for US`);
    }, 10000);

    it('fetches TV watch providers for a region', async () => {
        const res = await tmdb.watchProvider.getTvList({
            language: 'en-US',
            watchRegion: 'US',
        });

        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        if (res.results.length > 0) {
            const provider = res.results[0];
            expect(provider.providerId).toBeDefined();
            expect(provider.providerName).toBeDefined();
        }

        console.log(`Fetched ${res.results.length} TV watch providers for US`);
    }, 10000);
});
