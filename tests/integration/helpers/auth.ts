import { TmdbClient } from '../../../src/v3';

export class TestSession {
    constructor(
        private tmdb: TmdbClient,
        public sessionId: string | null,
        public requestToken: string | null
    ) {}


    public async close(): Promise<void> {
        await this.tmdb.authentication.deleteSession({
            sessionId: this.sessionId!,
        });

        this.sessionId = null;
        this.requestToken = null;
    }

    async [Symbol.asyncDispose]() {
        if (this.sessionId !== null) {
            await this.close();
        }
    }
}

/**
 * Creates an authenticated session for testing purposes
 * Requires TMDB_USERNAME and TMDB_PASSWORD in .env
 */
export async function createTestSession(tmdb: TmdbClient): Promise<TestSession> {
    const username = process.env.TMDB_USERNAME;
    const password = process.env.TMDB_PASSWORD;

    if (!username || !password) {
        throw new Error(
            'TMDB_USERNAME and TMDB_PASSWORD must be set in .env for authenticated tests'
        );
    }

    // Step 1: Get a request token
    const tokenRes = await tmdb.authentication.getRequestToken();

    // Step 2: Validate with login
    const validateRes = await tmdb.authentication.validateSessionWithLogin({
        username,
        password,
        requestToken: tokenRes.requestToken,
    });

    // Step 3: Create session
    const sessionRes = await tmdb.authentication.createSession({
        requestToken: validateRes.requestToken,
    });

    return new TestSession(tmdb, sessionRes.sessionId, validateRes.requestToken);
}
