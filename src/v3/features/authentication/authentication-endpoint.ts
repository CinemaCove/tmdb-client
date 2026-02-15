import {
    AuthenticationCreateSessionResult,
    AuthenticationDeleteSessionResult,
    AuthenticationGuestSessionResult,
    AuthenticationRequestTokenResult,
    AuthenticationValidateSessionWithLoginResult,
    AuthenticationValidationResult,
} from './authentication.types';

import { HttpClient } from '#core';

export class AuthenticationEndpoint {
    public constructor(private readonly client: HttpClient) {}

    public async getGuestSession(): Promise<AuthenticationGuestSessionResult> {
        return await this.client.get(`/authentication/guest_session/new`);
    }

    public async getRequestToken(): Promise<AuthenticationRequestTokenResult> {
        return await this.client.get(`/authentication/token/new`);
    }

    public async createSession(
        body: Readonly<{
            requestToken: string;
        }>
    ): Promise<AuthenticationCreateSessionResult> {
        return await this.client.post(`/authentication/session/new`, body);
    }

    public async createSessionV4(
        body: Readonly<{
            accessToken: string;
        }>
    ): Promise<AuthenticationCreateSessionResult> {
        return await this.client.post(`/authentication/session/convert/v4`, body);
    }

    public async validateSessionWithLogin(
        body: Readonly<{
            username: string;
            password: string;
            requestToken: string;
        }>
    ): Promise<AuthenticationValidateSessionWithLoginResult> {
        return await this.client.post(`/authentication/token/validate_with_login`, body);
    }

    public async deleteSession(
        body: Readonly<{
            sessionId: string;
        }>
    ): Promise<AuthenticationDeleteSessionResult> {
        return await this.client.delete(`/authentication/session`, body);
    }

    /**
     *  Test your API Key to see if it's valid.
     */
    public async validateApiKey(): Promise<AuthenticationValidationResult> {
        return await this.client.get(`/authentication`);
    }
}
