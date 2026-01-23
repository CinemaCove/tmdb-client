import { TmdbClient } from '../../tmdb-client';
import {
    AuthenticationGuestSessionResult,
    AuthenticationValidationResult,
} from './authentication.types';
import { buildBody } from '../../utils/build-body';

type AuthenticationRequestTokenResult = {
    readonly success: boolean;
    readonly expires_at: string;
    readonly request_token: string;
};

type AuthenticationCreateSessionResult = {
    readonly success: boolean;
    readonly session_id: string;
};

type AuthenticationValidateSesssionWithLoginResult = {
    readonly success: boolean;
    readonly expires_at: string;
    readonly request_token: string;
};
type AuthenticationDeleteSessionResult = {
    readonly success: boolean;
};

export class AuthenticationEndpoint {
    public constructor(private client: TmdbClient) {}

    public async getGuestSession(): Promise<AuthenticationGuestSessionResult> {
        const res = await this.client.getHttp().get(`/authentication/guest_session/new`);
        return res.data;
    }

    public async getRequestToken(): Promise<AuthenticationRequestTokenResult> {
        const res = await this.client.getHttp().get(`/authentication/token/new`);
        return res.data;
    }

    public async createSession(body: {
        readonly request_token: string;
    }): Promise<AuthenticationCreateSessionResult> {
        const genBody = buildBody(body);

        const res = await this.client.getHttp().post(`/authentication/session/new`, genBody);
        return res.data;
    }

    public async createSessionV4(body: {
        readonly access_token: string;
    }): Promise<AuthenticationCreateSessionResult> {
        const genBody = buildBody(body);

        const res = await this.client.getHttp().post(`/authentication/session/convert/v4`, genBody);
        return res.data;
    }

    public async validateSessionWithLogin(body: {
        readonly username: string;
        readonly password: string;
        readonly requestToken: string;
    }): Promise<AuthenticationValidateSesssionWithLoginResult> {
        const genBody = buildBody(body);

        const res = await this.client
            .getHttp()
            .post(`/authentication/session/validate_with_login`, genBody);
        return res.data;
    }

    public async deleteSession(body: {
        readonly sessionId: string;
    }): Promise<AuthenticationDeleteSessionResult> {
        const genBody = buildBody(body);
        const res = await this.client.getHttp().delete(`/authentication/session`, genBody);
        return res.data;
    }

    // Test your API Key to see if it's valid.
    public async validateApiKey(): Promise<AuthenticationValidationResult> {
        const res = await this.client.getHttp().get(`/authentication`);
        return res.data;
    }
}
