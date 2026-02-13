import { beforeAll, afterAll, describe, expect, it } from 'vitest';
import { AxiosHttpClient, TmdbClient } from '../../src';
import dotenv from 'dotenv';
import { createTestSession, TestSession } from './helpers/auth';
import { MOVIES } from './consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - List (real API)', () => {
    let tmdb: TmdbClient;
    let testSession: TestSession;
    let createdListId: number | null = null;

    beforeAll(async () => {
        const token: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;

        if (!token) {
            throw new Error(
                'TMDB_API_READ_ACCESS_TOKEN is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }
        tmdb = new TmdbClient(new AxiosHttpClient({ accessToken: token }));
        testSession = await createTestSession(tmdb);
    });

    afterAll(async () => {
        // Clean up: delete the test list if it was created
        if (createdListId && testSession.sessionId) {
            try {
                await tmdb.list.delete(createdListId, {
                    sessionId: testSession.sessionId,
                });
            } catch {
                // Ignore cleanup errors
            }
        }
    });

    it('creates a new list', async () => {
        const res = await tmdb.list.create(
            {
                name: 'Test List - Integration Test',
                description: 'A test list created by integration tests',
                language: 'en',
            },
            { sessionId: testSession.sessionId || '' }
        );

        expect(res.success).toBe(true);
        expect(res.statusCode).toBeDefined();
        expect(res.listId).toBeDefined();
        expect(res.listId).toBeGreaterThan(0);

        createdListId = res.listId;

        console.log(`Created list with ID: ${res.listId}`);
        console.log(`Status: ${res.statusMessage}`);
    }, 15000);

    it('gets list details', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.details(createdListId);

        expect(res.id).toBeDefined();
        expect(res.name).toBe('Test List - Integration Test');
        expect(res.description).toBe('A test list created by integration tests');
        expect(res.items).toBeDefined();
        expect(Array.isArray(res.items)).toBe(true);

        console.log(`List name: ${res.name}`);
        console.log(`List description: ${res.description}`);
        console.log(`Item count: ${res.itemCount}`);
    }, 10000);

    it('adds a movie to the list', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.addMovie(
            createdListId,
            { mediaId: MOVIES.FIGHT_CLUB.ID },
            { sessionId: testSession.sessionId || '' }
        );

        expect(res.statusCode).toBeDefined();
        expect(res.statusMessage).toBeDefined();

        console.log(`Add movie status: ${res.statusMessage}`);
    }, 10000);

    it('checks item status in the list', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.checkItemStatus(createdListId, {
            movieId: MOVIES.FIGHT_CLUB.ID,
            language: 'en-US',
        }); 

        // Verify response structure
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('itemPresent');
        expect(typeof res.itemPresent).toBe('boolean');

        console.log(`Item present: ${res.itemPresent}`);
        console.log(`List ID from response: ${res.id}`);
    }, 10000);

    it('verifies list details after adding movie', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.details(createdListId);

        expect(res.itemCount).toBeGreaterThan(0);
        expect(res.items.length).toBeGreaterThan(0);

        const fightClub = res.items.find((item) => item.id === MOVIES.FIGHT_CLUB.ID);
        expect(fightClub).toBeDefined();
        expect(fightClub?.title).toBe('Fight Club');

        console.log(`Item count after adding: ${res.itemCount}`);
        console.log(`First item: ${res.items[0]?.title}`);
    }, 10000);

    it('removes a movie from the list', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.removeMovie(
            createdListId,
            { mediaId: MOVIES.FIGHT_CLUB.ID },
            { sessionId: testSession.sessionId || '' }
        );

        expect(res.statusCode).toBeDefined();
        expect(res.statusMessage).toBeDefined();

        console.log(`Remove movie status: ${res.statusMessage}`);
    }, 10000);

    it('verifies item is no longer in list after removal', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.checkItemStatus(createdListId, {
            movieId: MOVIES.FIGHT_CLUB.ID,
            language: 'en-US',
        });

        expect(res.itemPresent).toBe(false);

        console.log(`Item present after removal: ${res.itemPresent}`);
    }, 10000);

    it('deletes the list', async () => {
        // Skip if list wasn't created
        if (!createdListId) {
            console.log('Skipping: No list was created');
            return;
        }

        const res = await tmdb.list.delete(createdListId, {
            sessionId: testSession.sessionId || '',
        });

        expect(res.statusCode).toBeDefined();
        expect(res.statusMessage).toBeDefined();

        console.log(`Delete list status: ${res.statusMessage}`);

        // Mark as deleted so afterAll doesn't try to clean up
        createdListId = null;
    }, 10000);

    it('verifies list details response structure', async () => {
        // Create a temporary list for structure verification
        const createRes = await tmdb.list.create(
            {
                name: 'Structure Test List',
                description: 'Testing response structure',
                language: 'en',
            },
            { sessionId: testSession.sessionId || '' }
        );

        const listId = createRes.listId;

        try {
            const res = await tmdb.list.details(listId);

            // Verify all expected fields are present
            expect(res).toHaveProperty('id');
            expect(res).toHaveProperty('name');
            expect(res).toHaveProperty('description');
            expect(res).toHaveProperty('items');
            expect(res).toHaveProperty('itemCount');
            expect(res).toHaveProperty('favoriteCount');
            expect(res).toHaveProperty('createdBy');

            console.log('List details response structure validated');
        } finally {
            // Clean up
            await tmdb.list.delete(listId, {
                sessionId: testSession.sessionId || '',
            });
        }
    }, 15000);
});
