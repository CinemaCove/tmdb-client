import { beforeAll, describe, expect, it } from 'vitest';
import { DefaultHttpClient, TmdbClient } from '../../src';
import dotenv from 'dotenv';

dotenv.config(); // loads .env
describe('TmdbClient - Account (real API)', () => {
    let tmdb: TmdbClient;
    let sessionId: string | undefined;

    beforeAll(async () => {
        const token: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;

        if (!token) {
            throw new Error(
                'TMDB_API_READ_ACCESS_TOKEN is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        // Not possible to fully automate these tests given the nature of session-based authentication
        // To test, you need to manually obtain a valid session ID from TMDB and set it in the .env file
        // Use the TMDB Try It function in their API documentation for running these tests
        // Steps:
        // 1 - Create request token at https://api.themoviedb.org/3/authentication/token/new
        // 2 - Open in browser: https://www.themoviedb.org/authenticate/{request_token}
        // 3 - Copy the token and POST it at https://api.themoviedb.org/3/authentication/session/new with body {"request_token": "<request_token>"}
        // 4 - Copy the session_id and set it in the .env file as TMDB_SESSION_ID
        sessionId = process.env.TMDB_SESSION_ID;
        tmdb = new TmdbClient(new DefaultHttpClient({ accessToken: token }));
    });

    it('gets the default account details', async () => {
        const res = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });

        // Spot-check a few well-known ones (stable data)
        expect(res.id).toBeGreaterThan(0);
        expect(typeof res.username).toBe('string');

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('sets fight club as favorite', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.setFavourite(
            details.id,
            {
                mediaType: 'movie',
                mediaId: 550,
                favorite: true,
            },
            { sessionId: sessionId || '' }
        );

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('adds fight club to watchlist', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.setWatchlist(
            details.id,
            {
                mediaType: 'movie',
                mediaId: 550,
                watchlist: true,
            },
            { sessionId: sessionId || '' }
        );

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of favourite movies', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getFavoriteMovies(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of favourite TV shows', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getFavoriteTVShows(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of custom user lists', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getCustomLists(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of rated movies', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getRatedMovies(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of rated TV Shows', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getRatedTVShows(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of movies added to a user watchlist', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getWatchlistMovies(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('gets a list of TV shows added to a user watchlist', async () => {
        const details = await tmdb.account.getDetails(null, { sessionId: sessionId || '' });
        const res = await tmdb.account.getWatchlistTVShows(details.id, {
            sessionId: sessionId || '',
        });

        // Spot-check a few well-known ones (stable data)
        expect(res.page).toBe(1);

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
});
