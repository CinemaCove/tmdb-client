import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Discover (real API)', () => {
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

    it('find all comedy horror movies released in 1986 sorted by name', async () => {
        const res = await tmdb.discover.searchMovies({
            'releaseDate.gte': '1986-01-01',
            'releaseDate.lte': '1986-12-31',
            withGenres: '35,27',
            sortBy: 'original_title.asc',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.results.find(r => r.originalTitle === 'Basket Case')).toBeDefined();
    }, 10000);

    it('find all movies released in 1986 by John Carpenter sorted by release date descending', async () => {
        const res = await tmdb.discover.searchMovies({
            'releaseDate.gte': '1986-01-01',
            'releaseDate.lte': '1986-12-31',
            sortBy: 'primary_release_date.desc',
            withPeople: '11770',
        });

        // Spot-check a few well-known ones (stable data)
        expect(
            res.results.find(r => r.originalTitle === 'Big Trouble in Little China')
        ).toBeDefined();
    }, 10000);

    it('find all tv shows related to survival horror sorted by first aired date descending', async () => {
        const res = await tmdb.discover.searchTvShows({
            sortBy: 'first_air_date.desc',
            withKeywords: '50009',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.results.find(r => r.name === 'Dead Set')).toBeDefined();
    }, 10000);
});
