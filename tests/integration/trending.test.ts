import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { AxiosHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Trending (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new AxiosHttpClient(apiKey));
    });

    describe('getAll', () => {
        it('fetches daily trending content (movies, TV, people)', async () => {
            const res = await tmdb.trending.getAll('day');

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);
            expect(res.totalResults).toBeGreaterThan(0);

            // Each result should have a mediaType
            res.results.forEach((item) => {
                expect(item.mediaType).toBeDefined();
                expect(['movie', 'tv', 'person']).toContain(item.mediaType);
            });

            console.log(`Found ${res.totalResults} daily trending items`);
            console.log(`First item type: ${res.results[0].mediaType}`);
        }, 10000);

        it('fetches weekly trending content', async () => {
            const res = await tmdb.trending.getAll('week');

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} weekly trending items`);
        }, 10000);

        it('fetches trending content with language option', async () => {
            const res = await tmdb.trending.getAll('day', { language: 'pt-PT' });

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} trending items (Portuguese)`);
        }, 10000);
    });

    describe('getMovies', () => {
        it('fetches daily trending movies', async () => {
            const res = await tmdb.trending.getMovies('day');

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            // Verify movie-specific fields
            const movie = res.results[0];
            expect(movie.id).toBeDefined();
            expect(movie.title).toBeDefined();
            expect(movie.originalTitle).toBeDefined();

            console.log(`Found ${res.totalResults} daily trending movies`);
            console.log(`Top movie: ${movie.title}`);
        }, 10000);

        it('fetches weekly trending movies', async () => {
            const res = await tmdb.trending.getMovies('week');

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} weekly trending movies`);
        }, 10000);

        it('verifies trending movie response structure', async () => {
            const res = await tmdb.trending.getMovies('day');

            expect(res).toHaveProperty('page');
            expect(res).toHaveProperty('results');
            expect(res).toHaveProperty('totalPages');
            expect(res).toHaveProperty('totalResults');

            if (res.results.length > 0) {
                const movie = res.results[0];
                expect(movie).toHaveProperty('id');
                expect(movie).toHaveProperty('title');
                expect(movie).toHaveProperty('originalTitle');
                expect(movie).toHaveProperty('overview');
                expect(movie).toHaveProperty('releaseDate');
                expect(movie).toHaveProperty('popularity');
                expect(movie).toHaveProperty('voteAverage');
                expect(movie).toHaveProperty('voteCount');
                expect(movie).toHaveProperty('genreIds');
            }

            console.log('Trending movies response structure validated');
        }, 10000);
    });

    describe('getTvShows', () => {
        it('fetches daily trending TV shows', async () => {
            const res = await tmdb.trending.getTvShows('day');

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            // Verify TV-specific fields
            const show = res.results[0];
            expect(show.id).toBeDefined();
            expect(show.name).toBeDefined();
            expect(show.originalName).toBeDefined();

            console.log(`Found ${res.totalResults} daily trending TV shows`);
            console.log(`Top show: ${show.name}`);
        }, 10000);

        it('fetches weekly trending TV shows', async () => {
            const res = await tmdb.trending.getTvShows('week');

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} weekly trending TV shows`);
        }, 10000);

        it('verifies trending TV show response structure', async () => {
            const res = await tmdb.trending.getTvShows('day');

            if (res.results.length > 0) {
                const show = res.results[0];
                expect(show).toHaveProperty('id');
                expect(show).toHaveProperty('name');
                expect(show).toHaveProperty('originalName');
                expect(show).toHaveProperty('overview');
                expect(show).toHaveProperty('firstAirDate');
                expect(show).toHaveProperty('popularity');
                expect(show).toHaveProperty('voteAverage');
                expect(show).toHaveProperty('voteCount');
                expect(show).toHaveProperty('originCountry');
            }

            console.log('Trending TV shows response structure validated');
        }, 10000);
    });

    describe('getPeople', () => {
        it('fetches daily trending people', async () => {
            const res = await tmdb.trending.getPeople('day');

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            // Verify person-specific fields
            const person = res.results[0];
            expect(person.id).toBeDefined();
            expect(person.name).toBeDefined();

            console.log(`Found ${res.totalResults} daily trending people`);
            console.log(`Top person: ${person.name}`);
        }, 10000);

        it('fetches weekly trending people', async () => {
            const res = await tmdb.trending.getPeople('week');

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} weekly trending people`);
        }, 10000);

        it('verifies trending people response structure', async () => {
            const res = await tmdb.trending.getPeople('day');

            if (res.results.length > 0) {
                const person = res.results[0];
                expect(person).toHaveProperty('id');
                expect(person).toHaveProperty('name');
                expect(person).toHaveProperty('popularity');
                expect(person).toHaveProperty('knownForDepartment');

                // knownFor is optional in trending endpoint
                if (person.knownFor) {
                    expect(Array.isArray(person.knownFor)).toBe(true);
                }
            }

            console.log('Trending people response structure validated');
        }, 10000);

        it('verifies knownFor items have mediaType when present', async () => {
            const res = await tmdb.trending.getPeople('day');

            if (res.results.length > 0) {
                const personWithKnownFor = res.results.find((p) => p.knownFor && p.knownFor.length > 0);
                if (personWithKnownFor && personWithKnownFor.knownFor) {
                    const knownForItem = personWithKnownFor.knownFor[0];
                    expect(knownForItem.mediaType).toBeDefined();
                    expect(['movie', 'tv']).toContain(knownForItem.mediaType);
                    console.log('Found person with knownFor, mediaType validated');
                } else {
                    console.log('No person with knownFor found in results, skipping validation');
                }
            }

            console.log('Trending people knownFor structure validated');
        }, 10000);
    });
});
