import { beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v4';
import { getV4AccessToken, getV4AccountId } from './helpers/auth';

dotenv.config();

describe('TmdbClient v4 - Account (real API)', () => {
    let tmdb: TmdbClient;
    let accountId: number;

    beforeAll(() => {
        const token = getV4AccessToken();
        accountId = getV4AccountId();
        tmdb = new TmdbClient(token);
    });

    it('gets custom lists', async () => {
        const res = await tmdb.account.getCustomLists(accountId, { page: 1 });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} custom lists`);
    }, 10000);

    it('gets favorite movies', async () => {
        const res = await tmdb.account.getFavoriteMovies(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} favorite movies`);
    }, 10000);

    it('gets favorite TV shows', async () => {
        const res = await tmdb.account.getFavoriteTvShows(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} favorite TV shows`);
    }, 10000);

    it('gets rated movies', async () => {
        const res = await tmdb.account.getRatedMovies(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} rated movies`);
    }, 10000);

    it('gets rated TV shows', async () => {
        const res = await tmdb.account.getRatedTvShows(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} rated TV shows`);
    }, 10000);

    it('gets recommended movies', async () => {
        const res = await tmdb.account.getRecommendedMovies(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} recommended movies`);
    }, 10000);

    it('gets recommended TV shows', async () => {
        const res = await tmdb.account.getRecommendedTvShows(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} recommended TV shows`);
    }, 10000);

    it('gets watchlist movies', async () => {
        const res = await tmdb.account.getWatchlistMovies(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} watchlist movies`);
    }, 10000);

    it('gets watchlist TV shows', async () => {
        const res = await tmdb.account.getWatchlistTvShows(accountId, {
            page: 1,
            language: 'en-US',
        });

        expect(res.page).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched ${res.results.length} watchlist TV shows`);
    }, 10000);
});
