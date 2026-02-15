import { beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v4';
import { getV4AccessToken } from './helpers/auth';

dotenv.config();

describe('TmdbClient v4 - Auth (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const token = getV4AccessToken();
        tmdb = new TmdbClient(token);
    });

    it('creates a request token', async () => {
        const res = await tmdb.authentication.createRequestToken({
            redirectTo: 'http://localhost/callback',
        });

        expect(res.success).toBe(true);
        expect(res.requestToken).toBeDefined();
        expect(typeof res.requestToken).toBe('string');
        expect(res.requestToken.length).toBeGreaterThan(0);

        console.log('Request token created (OAuth flow would redirect user to approve)');
    }, 10000);

    it.skip('logs out (invalidates access token — run manually when needed)', async () => {
        const token = getV4AccessToken();
        const res = await tmdb.authentication.logout({ accessToken: token });

        expect(res.success).toBe(true);
        expect(res.statusCode).toBeDefined();

        console.log('Logged out — access token invalidated.');
    }, 10000);
});
