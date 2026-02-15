import { KeywordDetailsResult } from './keyword.types';

import { HttpClient } from '#core';

export class KeywordEndpoint {
    public constructor(private readonly client: HttpClient) {}

    public async getDetails(keywordId: number): Promise<KeywordDetailsResult> {
        return this.client.get(`/keyword/${keywordId}`);
    }
}
