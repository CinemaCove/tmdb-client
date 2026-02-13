import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { AxiosHttpClient, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Search (real API)', () => {
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

    describe('movies', () => {
        it('searches for movies by title', async () => {
            const res = await tmdb.search.movies({ query: 'Fight Club' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            const fightClub = res.results.find((m) => m.id === 550);
            expect(fightClub).toBeDefined();
            expect(fightClub?.title).toBe('Fight Club');

            console.log(`Found ${res.totalResults} results for "Fight Club"`);
            console.log(`First result: ${res.results[0].title}`);
        }, 10000);

        it('searches movies with year filter', async () => {
            const res = await tmdb.search.movies({ query: 'Batman', year: '2022' });

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            // Results should be Batman-related from 2022
            const hasBatman = res.results.some((m) => m.title.toLowerCase().includes('batman'));
            expect(hasBatman).toBe(true);

            console.log(`Found ${res.totalResults} Batman results for 2022`);
        }, 10000);

        it('searches movies with pagination', async () => {
            const page1 = await tmdb.search.movies({ query: 'Star Wars', page: 1 });
            const page2 = await tmdb.search.movies({ query: 'Star Wars', page: 2 });

            expect(page1.page).toBe(1);
            expect(page2.page).toBe(2);
            expect(page1.results[0].id).not.toBe(page2.results[0].id);

            console.log(`Page 1 first result: ${page1.results[0].title}`);
            console.log(`Page 2 first result: ${page2.results[0].title}`);
        }, 10000);

        it('verifies movie search response structure', async () => {
            const res = await tmdb.search.movies({ query: 'Inception' });

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
                expect(movie).toHaveProperty('voteAverage');
                expect(movie).toHaveProperty('genreIds');
            }

            console.log('Movie search response structure validated');
        }, 10000);
    });

    describe('tvShows', () => {
        it('searches for TV shows by name', async () => {
            const res = await tmdb.search.tvShows({ query: 'Breaking Bad' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            const breakingBad = res.results.find((s) => s.name === 'Breaking Bad');
            expect(breakingBad).toBeDefined();

            console.log(`Found ${res.totalResults} results for "Breaking Bad"`);
            console.log(`First result: ${res.results[0].name}`);
        }, 10000);

        it('searches TV shows with year filter', async () => {
            const res = await tmdb.search.tvShows({ query: 'The Office', firstAirDateYear: 2005 });

            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} results for "The Office" (2005)`);
        }, 10000);

        it('verifies TV show search response structure', async () => {
            const res = await tmdb.search.tvShows({ query: 'Game of Thrones' });

            if (res.results.length > 0) {
                const show = res.results[0];
                expect(show).toHaveProperty('id');
                expect(show).toHaveProperty('name');
                expect(show).toHaveProperty('originalName');
                expect(show).toHaveProperty('overview');
                expect(show).toHaveProperty('firstAirDate');
                expect(show).toHaveProperty('voteAverage');
                expect(show).toHaveProperty('originCountry');
            }

            console.log('TV show search response structure validated');
        }, 10000);
    });

    describe('people', () => {
        it('searches for people by name', async () => {
            const res = await tmdb.search.people({ query: 'Brad Pitt' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            const bradPitt = res.results.find((p) => p.name === 'Brad Pitt');
            expect(bradPitt).toBeDefined();

            console.log(`Found ${res.totalResults} results for "Brad Pitt"`);
            console.log(`First result: ${res.results[0].name}`);
        }, 10000);

        it('verifies people search response structure', async () => {
            const res = await tmdb.search.people({ query: 'Tom Hanks' });

            if (res.results.length > 0) {
                const person = res.results[0];
                expect(person).toHaveProperty('id');
                expect(person).toHaveProperty('name');
                expect(person).toHaveProperty('knownForDepartment');
                expect(person).toHaveProperty('popularity');
                expect(person).toHaveProperty('knownFor');
            }

            console.log('People search response structure validated');
        }, 10000);
    });

    describe('multi', () => {
        it('searches across movies, TV shows, and people', async () => {
            const res = await tmdb.search.multi({ query: 'Matrix' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} multi-search results for "Matrix"`);
            console.log(`First result type: ${res.results[0].mediaType}`);
        }, 10000);

        it('returns results with mediaType field', async () => {
            const res = await tmdb.search.multi({ query: 'Stranger Things' });

            expect(res.results.length).toBeGreaterThan(0);

            // Each result should have a mediaType
            res.results.forEach((result) => {
                expect(result.mediaType).toBeDefined();
                expect(['movie', 'tv', 'person']).toContain(result.mediaType);
            });

            console.log('Multi search mediaType validation passed');
        }, 10000);
    });

    describe('collections', () => {
        it('searches for collections', async () => {
            const res = await tmdb.search.collections({ query: 'Star Wars' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            console.log(`Found ${res.totalResults} collection results for "Star Wars"`);
            console.log(`First collection: ${res.results[0].name}`);
        }, 10000);

        it('verifies collection search response structure', async () => {
            const res = await tmdb.search.collections({ query: 'Marvel' });

            if (res.results.length > 0) {
                const collection = res.results[0];
                expect(collection).toHaveProperty('id');
                expect(collection).toHaveProperty('name');
                expect(collection).toHaveProperty('overview');
                expect(collection).toHaveProperty('posterPath');
                expect(collection).toHaveProperty('backdropPath');
            }

            console.log('Collection search response structure validated');
        }, 10000);
    });

    describe('companies', () => {
        it('searches for companies', async () => {
            const res = await tmdb.search.companies({ query: 'Warner' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            const warner = res.results.find((c) => c.name.includes('Warner'));
            expect(warner).toBeDefined();

            console.log(`Found ${res.totalResults} company results for "Warner"`);
            console.log(`First company: ${res.results[0].name}`);
        }, 10000);

        it('verifies company search response structure', async () => {
            const res = await tmdb.search.companies({ query: 'Disney' });

            if (res.results.length > 0) {
                const company = res.results[0];
                expect(company).toHaveProperty('id');
                expect(company).toHaveProperty('name');
                expect(company).toHaveProperty('logoPath');
                expect(company).toHaveProperty('originCountry');
            }

            console.log('Company search response structure validated');
        }, 10000);
    });

    describe('keywords', () => {
        it('searches for keywords', async () => {
            const res = await tmdb.search.keywords({ query: 'superhero' });

            expect(res.page).toBe(1);
            expect(res.results).toBeDefined();
            expect(res.results.length).toBeGreaterThan(0);

            const superhero = res.results.find((k) => k.name === 'superhero');
            expect(superhero).toBeDefined();

            console.log(`Found ${res.totalResults} keyword results for "superhero"`);
            console.log(`First keyword: ${res.results[0].name}`);
        }, 10000);

        it('verifies keyword search response structure', async () => {
            const res = await tmdb.search.keywords({ query: 'robot' });

            if (res.results.length > 0) {
                const keyword = res.results[0];
                expect(keyword).toHaveProperty('id');
                expect(keyword).toHaveProperty('name');
                expect(typeof keyword.id).toBe('number');
                expect(typeof keyword.name).toBe('string');
            }

            console.log('Keyword search response structure validated');
        }, 10000);
    });
});
