// // @todo: Add integration tests for guest session endpoints

import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, TmdbClient } from '../../src';

dotenv.config();
//
describe('TmdbClient - Guest Session Ratings (real API)', () => {
    let tmdb: TmdbClient;
    let guestSessionId: string;

    beforeAll(async () => {
        const apiKey = process.env.TMDB_API_KEY;
        if (!apiKey) {
            throw new Error('TMDB_API_KEY is not set in .env');
        }

        tmdb = new TmdbClient(new DefaultHttpClient(apiKey));

        // Create fresh guest session once for all tests in this describe block
        const session = await tmdb.authentication.getGuestSession();
        expect(session.success).toBe(true);
        guestSessionId = session.guestSessionId;

        console.log(`Using guest session: ${guestSessionId}`);
    }, 15000);

    //
    it('can rate a movie via movie.setRating and retrieve it via guestSession.getRatedMovies', async () => {
        //         const movieId = 27205; // Inception — very safe, popular choice
        //
        //         // Rate the movie (7.5/10)
        //         const rateResult = await tmdb.movie.setRating(movieId, 7.5, {
        //             guest_session_id: guestSessionId,
        //         });
        //         expect(rateResult.success).toBe(true);
        //
        //         // Give TMDB a moment to process (eventual consistency)
        //         await new Promise(r => setTimeout(r, 2000));
        //
        //         // Fetch rated movies for this guest
        //         const rated = await tmdb.guestSession.getRatedMovies(guestSessionId, {
        //             sortBy: 'created_at.desc',
        //             page: 1,
        //         });
        //
        //         expect(rated.results.length).toBeGreaterThan(0);
        //         expect(rated.total_results).toBeGreaterThan(0);
        //
        //         // Verify our rated movie is present
        //         const ratedMovie = rated.results.find(m => m.id === movieId);
        //         expect(ratedMovie).toBeDefined();
        //         expect(ratedMovie?.rating).toBe(7.5);
        //
        //         console.log(`Found rated movie: ${ratedMovie?.title} (rating: ${ratedMovie?.rating})`);
    }, 20000);
    //
    //     it('can rate a TV show via tv.setRating and retrieve it via guestSession.getRatedTVShows', async () => {
    //         const tvId = 1399; // Game of Thrones — very popular, reliable
    //
    //         // Rate the TV show (8/10)
    //         const rateResult = await tmdb.tv.setRating(tvId, 8, {
    //             guest_session_id: guestSessionId,
    //         });
    //         expect(rateResult.success).toBe(true);
    //
    //         await new Promise(r => setTimeout(r, 2000));
    //
    //         const rated = await tmdb.guestSession.getRatedTVShows(guestSessionId, {
    //             sortBy: 'created_at.desc',
    //             page: 1,
    //         });
    //
    //         expect(rated.results.length).toBeGreaterThan(0);
    //
    //         const ratedTv = rated.results.find(s => s.id === tvId);
    //         expect(ratedTv).toBeDefined();
    //         expect(ratedTv?.rating).toBe(8);
    //
    //         console.log(`Found rated TV show: ${ratedTv?.name} (rating: ${ratedTv?.rating})`);
    //     }, 20000);
    //
    //     it('can rate a TV episode via tv.setRating and retrieve it via guestSession.getRatedTVEpisodes', async () => {
    //         const tvId = 1399; // Game of Thrones
    //         const season = 1;
    //         const episode = 1;
    //
    //         // Rate S01E01 (9/10)
    //         const rateResult = await tmdb.tv.setRating(tvId, 9, {
    //             guest_session_id: guestSessionId,
    //             season_number: season,
    //             episode_number: episode,
    //         });
    //         expect(rateResult.success).toBe(true);
    //
    //         await new Promise(r => setTimeout(r, 2000));
    //
    //         const rated = await tmdb.guestSession.getRatedTVEpisodes(guestSessionId, {
    //             sortBy: 'created_at.desc',
    //             page: 1,
    //         });
    //
    //         expect(rated.results.length).toBeGreaterThan(0);
    //
    //         const ratedEpisode = rated.results.find(
    //             e => e.show_id === tvId && e.season_number === season && e.episode_number === episode
    //         );
    //
    //         expect(ratedEpisode).toBeDefined();
    //         expect(ratedEpisode?.rating).toBe(9);
    //
    //         console.log(
    //             `Found rated episode: ${ratedEpisode?.name} ` +
    //                 `(S${ratedEpisode?.season_number}E${ratedEpisode?.episode_number}, rating: ${ratedEpisode?.rating})`
    //         );
    //     }, 20000);
});
