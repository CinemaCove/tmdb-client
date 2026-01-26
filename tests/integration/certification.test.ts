import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Certification (real API)', () => {
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

    it('fetches a list of movie certification for all available countries', async () => {
        const res = await tmdb.certification.getMovieCertifications();

        // Spot-check a few well-known ones (stable data)
        expect(res.certifications.PT).toBeDefined();
        expect(res.certifications.PT.length).toBeGreaterThan(1);

        console.log(`Fetched ${Object.keys(res.certifications).length} certification lists`);
    }, 10000);

    it('fetches a list of tv certification for all available countries', async () => {
        const res = await tmdb.certification.getTvCertifications();

        // Spot-check a few well-known ones (stable data)
        expect(res.certifications.PT).toBeDefined();
        expect(res.certifications.PT.length).toBeGreaterThan(1);

        console.log(`Fetched ${Object.keys(res.certifications).length} certification lists`);
    }, 10000);
});
