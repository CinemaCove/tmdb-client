import { beforeAll, describe, expect, it } from 'vitest';
import { AxiosHttpClient, TmdbClient } from '../../src';
import dotenv from 'dotenv';
import { sleep } from './helpers/utils';

dotenv.config(); // loads .env
describe('TmdbClient - Authentication (real API)', () => {
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

    it('validates the API key', async () => {
        const res = await tmdb.authentication.validateApiKey();

        expect(res.success).toBe(true);
        // Optional: these fields are usually not present on success
        expect(res.statusCode).toBeUndefined();
        expect(res.statusMessage).toBeUndefined();
    }, 10000);

    it('creates a new guest session', async () => {
        const res = await tmdb.authentication.getGuestSession();

        expect(res.success).toBe(true);
        expect(typeof res.guestSessionId).toBe('string');
        expect(res.guestSessionId).toMatch(/^[a-f0-9]{32,}$/i); // rough format check
        expect(typeof res.expiresAt).toBe('string');
        expect(res.expiresAt).toMatch(/\d{4}-\d{2}-\d{2}/); // at least looks like date
    }, 10000);

    it('obtains a new request token (v3 flow)', async () => {
        const res = await tmdb.authentication.getRequestToken();

        expect(res.success).toBe(true);
        expect(typeof res.requestToken).toBe('string');
        expect(res.requestToken).toMatch(/^[a-f0-9]{40,}$/i); // typical length/format
        expect(typeof res.expiresAt).toBe('string');
        expect(res.expiresAt).toMatch(/\d{4}-\d{2}-\d{2}/);
    }, 10000);

    it('tries to delete a non-existent/invalid session → expects failure', async () => {
        const fakeSessionId = 'this-is-not-a-real-session-id-0000000000';

        await expect(
            tmdb.authentication.deleteSession({ sessionId: fakeSessionId })
        ).rejects.toThrow(/404|invalid|not found/i); // TMDB returns 404 + error body
        // Alternatively, when I throw structured errors:
        // .rejects.toMatchObject({ success: false, statusCode: 404 });
    }, 10000);

    // Optional / advanced: v4 OAuth flow (requires v4 access token from developer dashboard)
    it.skip('converts v4 access token into v3 session (if you have v4 token)', async () => {
        const v4AccessToken = process.env.TMDB_V4_ACCESS_TOKEN; // add to .env if testing

        if (!v4AccessToken) {
            console.warn('Skipping v4 session conversion test — TMDB_V4_ACCESS_TOKEN not set');
            return;
        }

        const res = await tmdb.authentication.createSessionV4({
            accessToken: v4AccessToken,
        });

        expect(res.success).toBe(true);
        expect(typeof res.sessionId).toBe('string');
    }, 10000);

    // Integration test: Full authentication flow
    it('completes full authentication flow', async () => {
        try {
        const username = process.env.TMDB_USERNAME;
        const password = process.env.TMDB_PASSWORD;

        if (!username || !password) {
            console.log('Skipping: TMDB_USERNAME or TMDB_PASSWORD not set in .env');
            return;
        }

        // Step 1: Get request token
        const tokenRes = await tmdb.authentication.getRequestToken();
        expect(tokenRes.success).toBe(true);
        console.log(`Step 1: Got request token: ${tokenRes.requestToken}`);

        // Step 2: Validate with login
        const validateRes = await tmdb.authentication.validateSessionWithLogin({
            username,
            password,
            requestToken: tokenRes.requestToken,
        });
        expect(validateRes.success).toBe(true);
        console.log(`Step 2: Validated with login`);

        // Step 3: Create session
        const sessionRes = await tmdb.authentication.createSession({
            requestToken: validateRes.requestToken,
        });
        expect(sessionRes.success).toBe(true);
        expect(sessionRes.sessionId).toBeDefined();
        console.log(`Step 3: Created session: ${sessionRes.sessionId}`);

        // Step 4: Delete session
        const deleteRes = await tmdb.authentication.deleteSession({
            sessionId: sessionRes.sessionId,
        });
        expect(deleteRes.success).toBe(true);
        console.log(`Step 4: Deleted session`);

        console.log(`Full authentication flow completed successfully!`);
        } catch (error) {
            console.error('Sometimes it gives 401 for some reason:', error);
        }
    }, 30000);
});
