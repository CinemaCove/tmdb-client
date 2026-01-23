import {beforeAll, describe, expect, it} from "vitest";
import {TmdbClient} from "../../src";
import dotenv from "dotenv";

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

        tmdb = new TmdbClient(apiKey);
    });

    it('validates the API key at authentication', async () => {
        const res = await tmdb.authentication.validateApiKey();

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true)

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);

    it('obtains a new guest session', async () => {
        const res = await tmdb.authentication.getGuestSession();

        expect(typeof res === 'object').toBe(true);

        // Spot-check a few well-known ones (stable data)
        expect(res.success).toBe(true)

        console.log(`Fetched ${JSON.stringify(res)}`);
    }, 10000);
})