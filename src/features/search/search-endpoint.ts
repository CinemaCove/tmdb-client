import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';
import { SearchCollectionResult } from './search.types';

export class SearchEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Search for collections by their original, translated and alternative names
     */
    public async collection(options: {
        query: string;
        includeAdult?: boolean;
        language?: string;
        page?: number;
        region?: string;
    }): Promise<PaginatedResult<SearchCollectionResult>> {
        return await this.client.get<PaginatedResult<SearchCollectionResult>>(
            '/search/collection',
            options
        );
    }
}