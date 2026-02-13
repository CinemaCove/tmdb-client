import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    TrendingAllResultItem,
    TrendingMoviesResultItem,
    TrendingPeopleResultItem,
    TrendingTimeWindow,
    TrendingTvShowsResultItem,
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
    ): Promise<PaginatedResult<TrendingAllResultItem>> {
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
    ): Promise<PaginatedResult<TrendingMoviesResultItem>> {
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
    ): Promise<PaginatedResult<TrendingTvShowsResultItem>> {
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
    ): Promise<PaginatedResult<TrendingPeopleResultItem>> {
        return await this.client.get(`/trending/person/${timeWindow}`, options);
    }
}
