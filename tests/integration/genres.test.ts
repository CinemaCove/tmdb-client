import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Genres (real API)', () => {
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

    it('fetches all movie genres', async () => {
        const res = await tmdb.genres.getMovieGenres();

        // Spot-check a few well-known ones (stable data)
        expect(res.genres.find(g => g.name === 'Horror')).toBeDefined();

        console.log(`Fetched ${res.genres.length} genres`);
    }, 10000);

    it('fetches all TV show genres', async () => {
        const res = await tmdb.genres.getTVShowGenres();

        // Spot-check a few well-known ones (stable data)
        expect(res.genres.find(g => g.name === 'Drama')).toBeDefined();

        console.log(`Fetched ${res.genres.length} genres`);
    }, 10000);
});