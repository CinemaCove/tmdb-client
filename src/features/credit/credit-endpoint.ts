import { HttpClient } from '../../http-client.interface';
import { CreditDetailsResult } from './credit.types';

export class CreditEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // Get a movie or TV credit details by ID
    public async getDetails(
        creditId: string,
        options?: { readonly language?: string }
    ): Promise<CreditDetailsResult> {
        return await this.client.get(`/credit/${creditId}`, options);
    }
}