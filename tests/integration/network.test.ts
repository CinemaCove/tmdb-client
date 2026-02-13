import { beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';
import { AxiosHttpClient, TmdbClient } from '../../src';
import { NETWORKS } from './consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - Network (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new AxiosHttpClient(apiKey));
    });

    it('fetches network details for HBO', async () => {
        const res = await tmdb.network.getDetails(NETWORKS.HBO.ID);

        expect(res.id).toBe(NETWORKS.HBO.ID);
        expect(res.name).toBe(NETWORKS.HBO.NAME);
        expect(res.originCountry).toBeDefined();

        console.log(`Network: ${res.name}`);
        console.log(`Headquarters: ${res.headquarters}`);
        console.log(`Origin Country: ${res.originCountry}`);
    }, 10000);

    it('fetches network details for Netflix', async () => {
        const res = await tmdb.network.getDetails(NETWORKS.NETFLIX.ID);

        expect(res.id).toBe(NETWORKS.NETFLIX.ID);
        expect(res.name).toBe(NETWORKS.NETFLIX.NAME);
        expect(res.homepage).toBeDefined();

        console.log(`Network: ${res.name}`);
        console.log(`Homepage: ${res.homepage}`);
    }, 10000);

    it('fetches alternative names for NBC', async () => {
        const res = await tmdb.network.getAlternativeNames(NETWORKS.NBC.ID);

        expect(res.id).toBe(NETWORKS.NBC.ID);
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Network ID: ${res.id}`);
        console.log(`Alternative names count: ${res.results.length}`);
        if (res.results.length > 0) {
            console.log(`First alternative: ${res.results[0].name}`);
        }
    }, 10000);

    it('fetches images/logos for HBO', async () => {
        const res = await tmdb.network.getImages(NETWORKS.HBO.ID);

        expect(res.id).toBe(NETWORKS.HBO.ID);
        expect(res.logos).toBeDefined();
        expect(Array.isArray(res.logos)).toBe(true);

        console.log(`Network ID: ${res.id}`);
        console.log(`Logos count: ${res.logos.length}`);
        if (res.logos.length > 0) {
            console.log(`First logo path: ${res.logos[0].filePath}`);
        }
    }, 10000);

    it('verifies network details response structure', async () => {
        const res = await tmdb.network.getDetails(NETWORKS.HBO.ID);

        // Verify all expected fields are present
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('headquarters');
        expect(res).toHaveProperty('homepage');
        expect(res).toHaveProperty('logoPath');
        expect(res).toHaveProperty('originCountry');

        // Verify types
        expect(typeof res.id).toBe('number');
        expect(typeof res.name).toBe('string');

        console.log('Network details response structure validated');
    }, 10000);

    it('verifies alternative names response structure', async () => {
        const res = await tmdb.network.getAlternativeNames(NETWORKS.HBO.ID);

        // Verify all expected fields are present
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('results');

        // Verify types
        expect(typeof res.id).toBe('number');
        expect(Array.isArray(res.results)).toBe(true);

        // If there are results, verify their structure
        if (res.results.length > 0) {
            expect(res.results[0]).toHaveProperty('name');
            expect(res.results[0]).toHaveProperty('type');
        }

        console.log('Alternative names response structure validated');
    }, 10000);

    it('verifies images response structure', async () => {
        const res = await tmdb.network.getImages(NETWORKS.HBO.ID);

        // Verify all expected fields are present
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('logos');

        // Verify types
        expect(typeof res.id).toBe('number');
        expect(Array.isArray(res.logos)).toBe(true);

        // If there are logos, verify their structure
        if (res.logos.length > 0) {
            const logo = res.logos[0];
            expect(logo).toHaveProperty('aspectRatio');
            expect(logo).toHaveProperty('filePath');
            expect(logo).toHaveProperty('height');
            expect(logo).toHaveProperty('width');
            expect(logo).toHaveProperty('voteAverage');
            expect(logo).toHaveProperty('voteCount');
        }

        console.log('Images response structure validated');
    }, 10000);
});
