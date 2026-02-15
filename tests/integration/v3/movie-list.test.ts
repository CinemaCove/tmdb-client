import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';

dotenv.config(); // loads .env

describe('TmdbClient - Movie List (real API)', () => {
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

    it('fetches all the movies currently in theatres', async () => {
        const res = await tmdb.movieList.getNowPlaying();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches popular movies', async () => {
        const res = await tmdb.movieList.getPopular();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches top rated movies', async () => {
        const res = await tmdb.movieList.getTopRated();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);

    it('fetches upcoming movies', async () => {
        const res = await tmdb.movieList.getUpcoming();

        // Spot-check a few well-known ones (stable data)
        expect(res.totalResults).toBeGreaterThan(0);

        console.log(`Fetched ${res.totalResults} results`);
    }, 10000);
});
