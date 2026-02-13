import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { AxiosHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

// Review IDs are alphanumeric strings from TMDB
const REVIEWS = {
    // A known review for Fight Club
    FIGHT_CLUB_REVIEW: {
        ID: '5488c29bc3a3686f4a00004a',
    },
};

describe('TmdbClient - Review (real API)', () => {
    let tmdb: TmdbClient;
    let validReviewId: string | null = null;

    beforeAll(async () => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new AxiosHttpClient(apiKey));

        // Get a valid review ID from Fight Club's reviews
        try {
            const movieReviews = await tmdb.movie.getReviews(550);
            if (movieReviews.results.length > 0) {
                validReviewId = movieReviews.results[0].id;
            }
        } catch {
            // Fall back to known review ID
            validReviewId = REVIEWS.FIGHT_CLUB_REVIEW.ID;
        }
    });

    it('fetches review details', async () => {
        if (!validReviewId) {
            console.log('Skipping: No valid review ID available');
            return;
        }

        const res = await tmdb.review.getDetails(validReviewId);

        expect(res.id).toBe(validReviewId);
        expect(res.author).toBeDefined();
        expect(res.content).toBeDefined();
        expect(res.mediaType).toBeDefined();

        console.log(`Review ID: ${res.id}`);
        console.log(`Author: ${res.author}`);
        console.log(`Media Type: ${res.mediaType}`);
        console.log(`Media Title: ${res.mediaTitle}`);
    }, 10000);

    it('fetches review with author details', async () => {
        if (!validReviewId) {
            console.log('Skipping: No valid review ID available');
            return;
        }

        const res = await tmdb.review.getDetails(validReviewId);

        expect(res.authorDetails).toBeDefined();
        expect(res.authorDetails.username).toBeDefined();

        console.log(`Author username: ${res.authorDetails.username}`);
        console.log(`Author rating: ${res.authorDetails.rating}`);
    }, 10000);

    it('verifies review response structure', async () => {
        if (!validReviewId) {
            console.log('Skipping: No valid review ID available');
            return;
        }

        const res = await tmdb.review.getDetails(validReviewId);

        // Verify all expected fields are present
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('author');
        expect(res).toHaveProperty('authorDetails');
        expect(res).toHaveProperty('content');
        expect(res).toHaveProperty('createdAt');
        expect(res).toHaveProperty('mediaId');
        expect(res).toHaveProperty('mediaTitle');
        expect(res).toHaveProperty('mediaType');
        expect(res).toHaveProperty('updatedAt');
        expect(res).toHaveProperty('url');

        // Verify author details structure
        expect(res.authorDetails).toHaveProperty('name');
        expect(res.authorDetails).toHaveProperty('username');
        expect(res.authorDetails).toHaveProperty('avatarPath');
        expect(res.authorDetails).toHaveProperty('rating');

        // Verify types
        expect(typeof res.id).toBe('string');
        expect(typeof res.author).toBe('string');
        expect(typeof res.content).toBe('string');
        expect(typeof res.mediaId).toBe('number');

        console.log('Review response structure validated');
    }, 10000);

    it('verifies review contains valid media information', async () => {
        if (!validReviewId) {
            console.log('Skipping: No valid review ID available');
            return;
        }

        const res = await tmdb.review.getDetails(validReviewId);

        expect(res.mediaId).toBeGreaterThan(0);
        expect(res.mediaTitle).toBeDefined();
        expect(res.mediaTitle.length).toBeGreaterThan(0);
        expect(['movie', 'tv']).toContain(res.mediaType);

        console.log(`Media ID: ${res.mediaId}`);
        console.log(`Media Title: ${res.mediaTitle}`);
        console.log(`Media Type: ${res.mediaType}`);
    }, 10000);

    it('verifies review URL is valid', async () => {
        if (!validReviewId) {
            console.log('Skipping: No valid review ID available');
            return;
        }

        const res = await tmdb.review.getDetails(validReviewId);

        expect(res.url).toBeDefined();
        expect(res.url).toContain('themoviedb.org');

        console.log(`Review URL: ${res.url}`);
    }, 10000);
});
