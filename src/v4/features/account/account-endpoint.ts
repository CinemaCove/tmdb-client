import { PaginatedResult } from '../../shared';

import {
    AccountCustomListResultItem,
    AccountFavoriteMovieResultItem,
    AccountFavoriteTvShowResultItem,
    AccountRatedMovieResultItem,
    AccountRatedTvShowResultItem,
    AccountRecommendedMovieItem,
    AccountRecommendedTvShowItem,
    AccountWatchlistMovieResultItem,
    AccountWatchlistTvShowResultItem,
} from './account.types';

import { HttpClient } from '#core';

export class AccountEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the custom lists that a user has created.
     */
    public async getCustomLists(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
        }>
    ): Promise<PaginatedResult<AccountCustomListResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/lists`, options);
    }

    /**
     * Get a users list of favourite movies
     */
    public async getFavoriteMovies(
        accountObjectId: number | null,
        options?: Readonly<{
            language?: string;
            page?: number;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountFavoriteMovieResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/movie/favorites`, options);
    }

    /**
     * Get a users list of favourite TV shows
     */
    public async getFavoriteTvShows(
        accountObjectId: number | null,
        options?: Readonly<{
            language?: string;
            page?: number;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountFavoriteTvShowResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/tv/favorites`, options);
    }

    /**
     * Get a users list of rated movies
     */
    public async getRatedMovies(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountRatedMovieResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/movie/rated`, options);
    }

    /**
     * Get a users list of rated TV shows
     */
    public async getRatedTvShows(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountRatedTvShowResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/tv/rated`, options);
    }

    /**
     * Get a users list of recommended movies
     */
    public async getRecommendedMovies(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<PaginatedResult<AccountRecommendedMovieItem>> {
        return await this.client.get(`/account/${accountObjectId}/movie/recommendations`, options);
    }

    /**
     * Get a users list of recommended tv shows
     */
    public async getRecommendedTvShows(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<PaginatedResult<AccountRecommendedTvShowItem>> {
        return await this.client.get(`/account/${accountObjectId}/tv/recommendations`, options);
    }

    /**
     * Get a list of movies added to a users watchlist
     */
    public async getWatchlistMovies(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountWatchlistMovieResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/movie/watchlist`, options);
    }

    /**
     * Get a list of TV shows added to a users watchlist
     */
    public async getWatchlistTvShows(
        accountObjectId: number | null,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountWatchlistTvShowResultItem>> {
        return await this.client.get(`/account/${accountObjectId}/tv/watchlist`, options);
    }
}
