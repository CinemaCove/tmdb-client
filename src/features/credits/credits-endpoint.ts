import { HttpClient } from '../../http-client.interface';
import { CreditsDetailsResult } from './credits.types';

export class CreditsEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // Get a movie or TV credit details by ID
    public async getDetails(
        creditId: string,
        options?: { readonly language?: string }
    ): Promise<CreditsDetailsResult> {
        return await this.client.get(`/credit/${creditId}`, options);
    }
}