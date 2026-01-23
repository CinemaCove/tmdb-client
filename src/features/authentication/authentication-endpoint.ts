import { TmdbClient } from '../../tmdb-client';
import {
  AuthenticationGuestSessionResult,
  AuthenticationValidationResult,
} from './authentication.types';

export class AuthenticationEndpoint {
  public constructor(private client: TmdbClient) {}

  // Test your API Key to see if it's valid.
  public async validateApiKey(): Promise<AuthenticationValidationResult> {
    const res = await this.client.getHttp().get(`/authentication`);
    return res.data;
  }

  public async getGuestSession(): Promise<AuthenticationGuestSessionResult> {
    const res = await this.client.getHttp().get(`/authentication/guest_session/new`);
    return res.data;
  }
}
