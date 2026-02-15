import { PaginatedResult } from '../../shared';

import { MovieListNowPlayingPaginatedResult, MovieListItem } from './movie-list.types';

import { HttpClient } from '#core';

export class MovieListEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get a list of movies that are currently in theatres
     */
    public async getNowPlaying(
        options?: Readonly<{
            language?: string;
            page?: number;
            region?: string;
        }>
    ): Promise<MovieListNowPlayingPaginatedResult> {
        return this.client.get('/movie/now_playing', options);
    }

    /**
     * Get a list of movies ordered by popularity
     */
    public async getPopular(
        options?: Readonly<{
            language?: string;
            page?: number;
            region?: string;
        }>
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/popular', options);
    }

    /**
     * Get a list of movies ordered by rating
     */
    public async getTopRated(
        options?: Readonly<{
            language?: string;
            page?: number;
            region?: string;
        }>
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/top_rated', options);
    }

    /**
     * Get a list of movies that are being released soon
     */
    public async getUpcoming(
        options?: Readonly<{
            language?: string;
            page?: number;
            region?: string;
        }>
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/upcoming', options);
    }
}
