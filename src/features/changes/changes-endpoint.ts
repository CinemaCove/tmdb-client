import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';
import { ChangesItem } from './changes.types';

export class ChangesEndpoint {
    public constructor(private client: HttpClient) {}

    // Get a list of all of the movie ids that have been changed in the given interval.
    public async getMovieChanges(options?: {
        readonly page?: number;
        readonly start_date?: string;
        readonly end_date?: string;
    }): Promise<PaginatedResult<ChangesItem>> {
        return this.client.get('/movie/changes', options);
    }

    // Get a list of all of the people ids that have been changed in the given interval.
    public async getPeopleChanges(options?: {
        readonly page?: number;
        readonly start_date?: string;
        readonly end_date?: string;
    }): Promise<PaginatedResult<ChangesItem>> {
        return this.client.get('/person/changes', options);
    }

    // Get a list of all of the TV show ids that have been changed in the given interval.
    public async getTVChanges(options?: {
        readonly page?: number;
        readonly start_date?: string;
        readonly end_date?: string;
    }): Promise<PaginatedResult<ChangesItem>> {
        return this.client.get('/tv/changes', options);
    }
}
