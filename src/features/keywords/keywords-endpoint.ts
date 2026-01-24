import { HttpClient } from '../../http-client.interface';
import { KeywordsDetailsResult } from './keywords.types';

export class KeywordsEndpoint {
    public constructor(private readonly client: HttpClient) {}

    public async getDetails(keywordId: string): Promise<KeywordsDetailsResult> {
        return this.client.get(`/keyword/${keywordId}`);
    }
}
