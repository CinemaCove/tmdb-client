import { PaginatedResult } from '../../shared';

import { PersonListPopularResultItem } from './person.types';

import { HttpClient } from '#core';

export class PersonListEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get a list of people ordered by popularity
     */
    public async getPopular(
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<PaginatedResult<PersonListPopularResultItem>> {
        return await this.client.get('/person/popular', options);
    }
}
