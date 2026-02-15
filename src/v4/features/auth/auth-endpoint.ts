import {
    AuthCreateAccessTokenResult,
    AuthCreateRequestTokenResult,
    AuthLogoutResult,
} from './auth.types';

import { HttpClient } from '#core';

export class AuthEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Create access token
     */
    public async createAccessToken(
        body: Readonly<{
            accessToken: string;
        }>
    ): Promise<AuthCreateAccessTokenResult> {
        return await this.client.post(`/auth/access_token`, body);
    }

    /**
     * Log out of a session
     */
    public async logout(
        body: Readonly<{
            accessToken: string;
        }>
    ): Promise<AuthLogoutResult> {
        return await this.client.delete(`/auth/access_token`, body);
    }

    /**
     * Create request token
     */
    public async createRequestToken(
        body: Readonly<{
            redirectTo: string;
        }>
    ): Promise<AuthCreateRequestTokenResult> {
        return await this.client.post(`/auth/request_token`, body);
    }
}
