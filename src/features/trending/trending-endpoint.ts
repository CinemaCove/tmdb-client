import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    TrendingAllItem,
    TrendingMoviesResult,
    TrendingPeopleResult,
    TrendingTimeWindow,
    TrendingTvShowsResult,
} from './trending.types';

export class TrendingEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get trending movies, TV shows, and people in a single request
     */
    public async getAll(
        timeWindow: TrendingTimeWindow,
        options?: Readonly<{
            language?: string;
        }>
    ): Promise<PaginatedResult<TrendingAllItem>> {
        return await this.client.get(`/trending/all/${timeWindow}`, options);
    }

    /**
     * Get trending movies
     */
    public async getMovies(
        timeWindow: TrendingTimeWindow,
        options?: Readonly<{
            language?: string;
        }>
    ): Promise<PaginatedResult<TrendingMoviesResult>> {
        return await this.client.get(`/trending/movie/${timeWindow}`, options);
    }

    /**
     * Get trending TV shows
     */
    public async getTvShows(
        timeWindow: TrendingTimeWindow,
        options?: Readonly<{
            language?: string;
        }>
    ): Promise<PaginatedResult<TrendingTvShowsResult>> {
        return await this.client.get(`/trending/tv/${timeWindow}`, options);
    }

    /**
     * Get trending people
     */
    public async getPeople(
        timeWindow: TrendingTimeWindow,
        options?: Readonly<{
            language?: string;
        }>
    ): Promise<PaginatedResult<TrendingPeopleResult>> {
        return await this.client.get(`/trending/person/${timeWindow}`, options);
    }
}
