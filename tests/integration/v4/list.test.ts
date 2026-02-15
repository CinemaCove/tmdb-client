import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';
import { MediaType, TmdbClient } from '../../../src/v4';
import { getV4AccessToken } from './helpers/auth';
import { MOVIES } from '../consts/consts';

dotenv.config();

describe('TmdbClient v4 - List (real API)', () => {
    let tmdb: TmdbClient;
    let createdListId: number | null = null;

    beforeAll(() => {
        const token = getV4AccessToken();
        tmdb = new TmdbClient(token);
    });

    it('fetches list details for a public list', async () => {
        const res = await tmdb.list.details(1, { page: 1 });

        expect(res.id).toBeDefined();
        expect(res.name).toBeDefined();
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`Fetched public list: ${res.name}`);
    }, 10000);

    afterAll(async () => {
        if (createdListId) {
            try {
                await tmdb.list.delete(createdListId);
            } catch {
                // Ignore cleanup errors
            }
        }
    });

    it('creates a new list', async () => {
        const res = await tmdb.list.create({
            name: 'V4 Test List - Integration Test',
            description: 'A test list created by v4 integration tests',
            iso3166_1: 'US',
            iso639_1: 'en',
            public: false,
        });

        expect(res.success).toBe(true);
        expect(res.id).toBeDefined();
        expect(res.id).toBeGreaterThan(0);

        createdListId = res.id;

        console.log(`Created list with ID: ${res.id}`);
    }, 15000);

    it('gets list details', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.details(createdListId);

        expect(res.id).toBe(createdListId);
        expect(res.name).toBe('V4 Test List - Integration Test');
        expect(res.description).toBe('A test list created by v4 integration tests');
        expect(res.results).toBeDefined();
        expect(Array.isArray(res.results)).toBe(true);

        console.log(`List name: ${res.name}, item count: ${res.itemCount}`);
    }, 10000);

    it('adds items to the list', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.addItems(createdListId, {
            items: [
                { mediaType: MediaType.Movie, mediaId: MOVIES.FIGHT_CLUB.ID },
            ],
        });

        expect(res.success).toBe(true);
        expect(res.results).toBeDefined();
        expect(res.results.length).toBeGreaterThan(0);
        expect(res.results[0].success).toBe(true);

        console.log(`Added ${res.results.length} item(s) to list`);
    }, 10000);

    it('checks item status in the list', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.checkItemStatus(createdListId, {
            movieId: MOVIES.FIGHT_CLUB.ID,
            mediaType: MediaType.Movie,
        });

        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('success');
        expect(res).toHaveProperty('mediaId');

        console.log(`Item status: success=${res.success}`);
    }, 10000);

    it('updates list details', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.update(createdListId, {
            description: 'Updated description for v4 integration test',
        });

        expect(res.success).toBe(true);

        const details = await tmdb.list.details(createdListId);
        expect(details.description).toBe('Updated description for v4 integration test');

        console.log('List updated');
    }, 10000);

    it('removes items from the list', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.removeItems(createdListId, {
            items: [{ mediaType: MediaType.Movie, mediaId: MOVIES.FIGHT_CLUB.ID }],
        });

        expect(res.success).toBe(true);

        const details = await tmdb.list.details(createdListId);
        expect(details.itemCount).toBe(0);

        console.log('Items removed from list');
    }, 10000);

    it('deletes the list', async () => {
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.delete(createdListId);

        expect(res.success).toBe(true);

        createdListId = null;
        console.log('List deleted');
    }, 10000);
});
