import { PaginatedResult } from '../../shared';
import { TvShowListItem } from '../tv-show-list/tv-show-list.types';

import { HttpClient } from '#core';

export class TvShowListEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get a list of TV shows airing today.
     */
    public async getAiringToday(
        options: Readonly<{
            language: string;
            page: number;
            timezone: string;
        }>
    ): Promise<PaginatedResult<TvShowListItem>> {
        return await this.client.get(`/tv/airing_today`, options);
    }

    /**
     * Get a list of TV shows that air in the next 7 days.
     */
    public async getTvShowsOnTheAir(
        options: Readonly<{
            language: string;
            page: number;
            timezone: string;
        }>
    ): Promise<PaginatedResult<TvShowListItem>> {
        return await this.client.get(`/tv/on_the_air`, options);
    }

    /**
     * Get a list of TV shows ordered by popularity.
     */
    public async getPopularTvShows(
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowListItem>> {
        return await this.client.get(`/tv/popular`, options);
    }

    /**
     * Get a list of TV shows ordered by rating.
     */
    public async getTopRatedTvShows(
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowListItem>> {
        return await this.client.get(`/tv/top_rated`, options);
    }
}
