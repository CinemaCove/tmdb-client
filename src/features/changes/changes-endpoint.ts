import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import { ChangesResultItem } from './changes.types';

export class ChangesEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get a list of all of the movie ids that have been changed in the given interval.
     */
    public async getMovieChanges(
        options?: Readonly<{
            page?: number;
            startDate?: string;
            endDate?: string;
        }>
    ): Promise<PaginatedResult<ChangesResultItem>> {
        return this.client.get('/movie/changes', options);
    }

    /**
     * Get a list of all of the people ids that have been changed in the given interval.
     */
    public async getPeopleChanges(
        options?: Readonly<{
            page?: number;
            startDate?: string;
            endDate?: string;
        }>
    ): Promise<PaginatedResult<ChangesResultItem>> {
        return this.client.get('/person/changes', options);
    }

    /**
     * Get a list of all of the TV show ids that have been changed in the given interval.
     */
    public async getTvChanges(
        options?: Readonly<{
            page?: number;
            startDate?: string;
            endDate?: string;
        }>
    ): Promise<PaginatedResult<ChangesResultItem>> {
        return this.client.get('/tv/changes', options);
    }
}
