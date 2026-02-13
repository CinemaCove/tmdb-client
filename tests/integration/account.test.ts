import { beforeAll, describe, expect, it } from 'vitest';
import { DefaultHttpClient, MediaType, TmdbClient } from '../../src';
import dotenv from 'dotenv';
import { createTestSession, TestSession } from './helpers/auth';

dotenv.config(); // loads .env
describe('TmdbClient - Account (real API)', () => {
    let tmdb: TmdbClient;
    let testSession: TestSession;

    beforeAll(async () => {
        const token: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;

        if (!token) {
            throw new Error(
                'TMDB_API_READ_ACCESS_TOKEN is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }
        tmdb = new TmdbClient(new DefaultHttpClient({ accessToken: token }));
        testSession = await createTestSession(tmdb);
    });



    it('gets the default account details', async () => {
        const res = await tmdb.account.getDetails(null, { sessionId: testSession.sessionId || '' });

        // Spot-check a few well-known ones (stable data)
        expect(res.id).toBeGreaterThan(0);
        expect(typeof res.username).toBe('string');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('sets fight club as favorite', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.setFavourite(
            details.id,
            {
                mediaType: MediaType.Movie,
                mediaId: 550,
                favorite: true,
            },
            { sessionId: testSession.sessionId || '' }
        );

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('adds fight club to watchlist', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.setWatchlist(
            details.id,
            {
                mediaType: 'movie',
                mediaId: 550,
                watchlist: true,
            },
            { sessionId: testSession.sessionId || '' }
        );

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of favourite movies', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getFavoriteMovies(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of favourite TV shows', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getFavoriteTvShows(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of custom user list', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getCustomLists(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of rated movies', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getRatedMovies(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of rated TV Shows', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getRatedTvShows(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of rated TV Episodes', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getRatedTvEpisodes(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of movies added to a user watchlist', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getWatchlistMovies(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of TV shows added to a user watchlist', async () => {
        const details = await tmdb.account.getDetails(null, {
            sessionId: testSession.sessionId || '',
        });
        const res = await tmdb.account.getWatchlistTvShows(details.id, {
            sessionId: testSession.sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
});
