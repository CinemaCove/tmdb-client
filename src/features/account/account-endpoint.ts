import { HttpClient } from '../../http-client.interface';
import { MediaType, PaginatedResult } from '../../shared';

import {
    AccountCustomListItem,
    AccountDetailsResult,
    AccountFavoriteMovieItem,
    AccountFavoriteTvShowItem,
    AccountRatedMovieItem,
    AccountRatedTvEpisodeItem,
    AccountRatedTvShowItem,
    AccountResult,
    AccountWatchlistMovieItem,
    AccountWatchlistTvShowItem,
} from './account.types';

export class AccountEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the public details of an account on TMDB
     */
    public async getDetails(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<AccountDetailsResult> {
        return await this.client.get(`/account/${accountId}`, options);
    }

    /**
     * Mark a movie or TV show as a favourite
     */
    public async setFavourite(
        accountId: number | null,
        body: Readonly<{
            mediaType: MediaType;
            mediaId: number;
            favorite: boolean;
        }>,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<AccountResult> {
        return await this.client.post(`/account/${accountId}/favorite`, body, options);
    }

    /**
     * Add a movie or TV show to your watchlist
     */
    public async setWatchlist(
        accountId: number | null,
        body: Readonly<{
            mediaType: string;
            mediaId: number;
            watchlist: boolean;
        }>,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<AccountResult> {
        return await this.client.post(`/account/${accountId}/watchlist`, body, options);
    }

    /**
     * Get a users list of favourite movies
     */
    public async getFavoriteMovies(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            language?: string;
            page?: number;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountFavoriteMovieItem>> {
        return await this.client.get(`/account/${accountId}/favorite/movies`, options);
    }

    /**
     * Get a users list of favourite TV shows
     */
    public async getFavoriteTvShows(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            language?: string;
            page?: number;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountFavoriteTvShowItem>> {
        return await this.client.get(`/account/${accountId}/favorite/tv`, options);
    }

    /**
     * Get a users list of custom lists
     */
    public async getCustomLists(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
        }>
    ): Promise<PaginatedResult<AccountCustomListItem>> {
        return await this.client.get(`/account/${accountId}/lists`, options);
    }

    /**
     * Get a users list of rated movies
     */
    public async getRatedMovies(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountRatedMovieItem>> {
        return await this.client.get(`/account/${accountId}/rated/movies`, options);
    }

    /**
     * Get a users list of rated TV shows
     */
    public async getRatedTvShows(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountRatedTvShowItem>> {
        return await this.client.get(`/account/${accountId}/rated/tv`, options);
    }

    /**
     * Get a users list of rated TV Episodes
     */
    public async getRatedTvEpisodes(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountRatedTvEpisodeItem>> {
        return await this.client.get(`/account/${accountId}/rated/tv/episodes`, options);
    }

    /**
     * Get a list of movies added to a users watchlist
     */
    public async getWatchlistMovies(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountWatchlistMovieItem>> {
        return await this.client.get(`/account/${accountId}/watchlist/movies`, options);
    }

    /**
     * Get a list of TV shows added to a users watchlist
     */
    public async getWatchlistTvShows(
        accountId: number | null,
        options: Readonly<{
            sessionId: string;
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<AccountWatchlistTvShowItem>> {
        return await this.client.get(`/account/${accountId}/watchlist/tv`, options);
    }
}
