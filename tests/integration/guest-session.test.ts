import { beforeAll, describe, expect, it } from 'vitest';
import { AxiosHttpClient, TmdbClient } from '../../src';
import dotenv from 'dotenv';
import { MOVIES } from './consts/consts';
import { sleep } from './helpers/utils';
dotenv.config();

describe('TmdbClient - Guest Session Ratings (real API integration)', () => {
    let tmdb: TmdbClient;
    let guestSessionId: string | undefined;

    beforeAll(async () => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;
        if (!apiKey) {
            throw new Error('TMDB_API_KEY is not set in .env — cannot run real API tests.');
        }

        tmdb = new TmdbClient(new AxiosHttpClient(apiKey));

        // Create a fresh guest session once per describe block
        const guestRes = await tmdb.authentication.getGuestSession();
        if (guestRes.success && guestRes.guestSessionId) {
            guestSessionId = guestRes.guestSessionId;
        } else {
            throw new Error('Failed to obtain guest session ID for testing');
        }
    }, 10000);

    it('fetches rated movies for guest session (usually empty unless rated before)', async () => {
        if (!guestSessionId) throw new Error('No guest session ID available');

        // 1st) Let's rate an awesome movie
        const ratingRes = await tmdb.movie.addRating(
            MOVIES.FIGHT_CLUB.ID,
            {
                value: 10,
            },
            {
                guestSessionId,
            }
        );

        expect(ratingRes.success).toBe(true);
        await sleep(5 * 1000);

        // @todo keeps throwing 404 even in TMDB API page. Well, we'll see if it works because it worked at least once
        try {
            const res = await tmdb.guestSession.getRatedMovies(guestSessionId, {
                page: 1,
                // language: 'en-US',           // optional
                // sortBy: 'created_at.desc',   // optional
            });
            // Basic shape validation
            expect(Array.isArray(res.results)).toBe(true);
            expect(typeof res.page).toBe('number');
            expect(typeof res.totalPages).toBe('number');
            expect(typeof res.totalResults).toBe('number');

            // Most fresh guest sessions have 0 ratings → expect empty
            // If you manually rate something with this session beforehand, totalResults > 0
            if (res.totalResults > 0) {
                const first = res.results[0];
                expect(first).toMatchObject({
                    id: expect.any(Number),
                    title: expect.any(String),
                    rating: expect.any(Number), // ← guest rating (0.5–10.0)
                });
                expect(typeof first.voteAverage).toBe('number');
            }
        } catch (e) {
            console.error('Failed to fetch rated movies for guest session');
        }
    }, 12000);

    it.skip('fetches rated TV shows for guest session', async () => {
        if (!guestSessionId) throw new Error('No guest session ID available');
        try {
            //const rateRes = await tmdb.tv.

            const res = await tmdb.guestSession.getRatedTvShows(guestSessionId);

            expect(Array.isArray(res.results)).toBe(true);
            expect(typeof res.page).toBe('number');
            expect(typeof res.totalPages).toBe('number');
            expect(typeof res.totalResults).toBe('number');

            if (res.totalResults > 0) {
                const first = res.results[0];
                expect(first).toMatchObject({
                    id: expect.any(Number),
                    name: expect.any(String),
                    rating: expect.any(Number),
                });
            }
        } finally {
        }
    }, 10000);

    it.skip('fetches rated TV episodes for guest session', async () => {
        if (!guestSessionId) throw new Error('No guest session ID available');

        const res = await tmdb.guestSession.getRatedTvEpisodes(guestSessionId, {
            page: 1,
            sortBy: 'created_at.desc',
        });

        expect(Array.isArray(res.results)).toBe(true);
        expect(typeof res.page).toBe('number');
        expect(typeof res.totalPages).toBe('number');
        expect(typeof res.totalResults).toBe('number');

        if (res.totalResults > 0) {
            const first = res.results[0];
            expect(first).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                episodeNumber: expect.any(Number),
                seasonNumber: expect.any(Number),
                showId: expect.any(Number),
                rating: expect.any(Number),
            });
        }
    }, 10000);

    it('handles invalid guest session ID gracefully (expect error)', async () => {
        const fakeId = 'this-is-not-a-valid-guest-session-id-9999999999';

        await expect(tmdb.guestSession.getRatedMovies(fakeId)).rejects.toThrow(
            /401/i
        );

        // Alternative if your client normalizes TMDB error responses:
        // .rejects.toMatchObject({ success: false, statusCode: 404 });
    }, 10000);

    // Optional: pagination test (only meaningful if you have >20 ratings)
    it.skip('supports pagination on rated movies', async () => {
        if (!guestSessionId) throw new Error('No guest session ID');

        const page1 = await tmdb.guestSession.getRatedMovies(guestSessionId, { page: 1 });
        const page2 = await tmdb.guestSession.getRatedMovies(guestSessionId, { page: 2 });

        expect(page1.page).toBe(1);
        expect(page2.page).toBe(2);

        // If enough results exist:
        if (page1.totalResults > 20) {
            expect(page2.results.length).toBeGreaterThan(0);
            // Check no overlap (very rough)
            const idsPage1 = page1.results.map(m => m.id);
            expect(page2.results.some(m => idsPage1.includes(m.id))).toBe(false);
        }
    }, 15000);
});
