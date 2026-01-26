import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import {
    CreditMediaMovie,
    CreditMediaTVShow,
    DefaultHttpClient,
    GenderType,
    TmdbClient,
} from '../../src';
import { MOVIES, TV_SHOWS } from './consts/consts';

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

    it('fetches credit details for a specific credit ID (Brad Pitt in Fight Club)', async () => {
        const creditId = MOVIES.FIGHT_CLUB.CREDITS.BRAD_PITT_ID;
        const res = await tmdb.credit.getDetails(creditId);
        const media = res.media as CreditMediaMovie; // Cast to movie

        expect(res.creditType).toBeDefined();
        expect(res.id).toBe(creditId);
        expect(res.person).toBeDefined();
        expect(res.person.name).toBe('Brad Pitt');
        expect(res.media).toBeDefined();
        expect(media.id).toBe(550); // Fight Club movie ID
        expect(media.title).toBe('Fight Club'); // ✅ title for movies
        expect(res.mediaType).toBe('movie');

        console.log(`Credit type: ${res.creditType}`);
        console.log(`Person: ${res.person.name}`);
        console.log(`Media: ${media.title}`); // ✅ title
    }, 10000);

    it('fetches credit details with language option', async () => {
        const creditId = MOVIES.FIGHT_CLUB.CREDITS.BRAD_PITT_ID;
        const res = await tmdb.credit.getDetails(creditId, { language: 'pt-PT' });
        const media = res.media as CreditMediaMovie; // Cast to movie

        expect(res.creditType).toBeDefined();
        expect(res.id).toBe(creditId);
        expect(res.person).toBeDefined();
        expect(res.media).toBeDefined();

        console.log(`Media title (Portuguese): ${media.title}`); // ✅ title
    }, 10000);

    it('fetches credit details for a TV show credit (example credit)', async () => {
        const creditId = TV_SHOWS.BREAKING_BAD.CREDITS.BRYAN_CRANSTON_ID;
        const res = await tmdb.credit.getDetails(creditId);
        const media = res.media as CreditMediaTVShow; // Cast to TV

        expect(res.creditType).toBeDefined();
        expect(res.id).toBe(creditId);
        expect(res.person).toBeDefined();
        expect(res.person.name).toBe('Bryan Cranston');
        expect(res.media).toBeDefined();
        expect(res.mediaType).toBe('tv');

        console.log(`Credit type: ${res.creditType}`);
        console.log(`Person: ${res.person.name}`);
        console.log(`TV Show: ${media.name}`); // ✅ name for TV
        console.log(`Media type: ${res.mediaType}`);
    }, 10000);

    it('fetches crew credit details (example: director credit)', async () => {
        // David Fincher directing Fight Club
        const creditId = MOVIES.FIGHT_CLUB.CREDITS.DAVID_FINCHER_ID;
        const res = await tmdb.credit.getDetails(creditId);

        expect(res.creditType).toBeDefined();
        expect(res.id).toBe(creditId);
        expect(res.person).toBeDefined();
        expect(res.person.name).toBe('David Fincher');
        expect(res.media).toBeDefined();
        expect(res.media.id).toBe(550); // Fight Club
        expect(res.department).toBeDefined();
        expect(res.job).toBeDefined();

        console.log(`Person: ${res.person.name}`);
        console.log(`Job: ${res.job}`);
        console.log(`Department: ${res.department}`);
    }, 10000);

    it('verifies credit response structure', async () => {
        const creditId = MOVIES.FIGHT_CLUB.CREDITS.DAVID_FINCHER_ID;
        const res = await tmdb.credit.getDetails(creditId);

        // Verify all expected fields are present
        expect(res).toHaveProperty('creditType');
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('person');
        expect(res).toHaveProperty('media');
        expect(res).toHaveProperty('mediaType');

        // Verify person object structure
        expect(res.person).toHaveProperty('name');
        expect(res.person).toHaveProperty('id');

        // Verify media object structure
        expect(res.media).toHaveProperty('id');
        expect(res.media).toHaveProperty('title');

        console.log('Credit response structure validated');
    }, 10000);
});
