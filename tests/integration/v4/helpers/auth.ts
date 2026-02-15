/**
 * V4 API test auth helper.
 * V4 uses Bearer access token (no session/username flow).
 *
 * Required .env:
 * - TMDB_V4_ACCESS_TOKEN: Your v4 Read Access Token from TMDB developer dashboard
 * - TMDB_V4_ACCOUNT_ID: Your account object ID (obtained from createAccessToken
 *   during OAuth flow, or from TMDB profile/settings)
 */
export function getV4AccessToken(): string {
    const token = process.env.TMDB_V4_ACCESS_TOKEN;
    if (!token) {
        throw new Error(
            'TMDB_V4_ACCESS_TOKEN is not set in .env — cannot run v4 API tests. Add your v4 Read Access Token and try again.'
        );
    }
    return token;
}

export function getV4AccountId(): number {
    const id = process.env.TMDB_V4_ACCOUNT_ID;
    if (!id) {
        throw new Error(
            'TMDB_V4_ACCOUNT_ID is not set in .env — cannot run v4 account tests. Add your account object ID (from createAccessToken or TMDB settings) and try again.'
        );
    }
    const parsed = parseInt(id, 10);
    if (Number.isNaN(parsed)) {
        throw new Error('TMDB_V4_ACCOUNT_ID must be a numeric value.');
    }
    return parsed;
}
