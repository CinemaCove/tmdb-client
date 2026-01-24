import {
    AccountCustomListItem,
    AccountDetails,
    AccountFavoriteMovieItem,
    AccountFavoriteTVShowItem,
    AccountRatedMovieItem,
    AccountRatedTVEpisodeItem,
    AccountRatedTVShowItem,
    AccountResult,
    AccountWatchlistMovieItem,
    AccountWatchlistTVShowItem,
} from './account.types';
import { PaginatedResult } from '../../shared';
import { HttpClient } from '../../http-client.interface';

export class AccountEndpoint {
    public constructor(private client: HttpClient) {}

    // Get the public details of an account on TMDB.
    public async getDetails(
        accountId: number | null,
        options: {
            readonly sessionId: string;
        } = {
            sessionId: '',
        }
    ): Promise<AccountDetails> {
        return await this.client.get(`/account/${accountId}`, options);
    }

    // Mark a movie or TV show as a favourite
    public async setFavourite(
        accountId: number | null,
        body: {
            readonly mediaType: string;
            readonly mediaId: number;
            readonly favorite: boolean;
        },
        options: {
            readonly sessionId: string;
        }
    ): Promise<AccountResult> {
        return await this.client.post(`/account/${accountId}/favorite`, body, options);
    }

    // Add a movie or TV show to your watchlist
    public async setWatchlist(
        accountId: number | null,
        body: {
            readonly mediaType: string;
            readonly mediaId: number;
            readonly watchlist: boolean;
        },
        options: {
            readonly sessionId: string;
        }
    ): Promise<AccountResult> {
        return await this.client.post(`/account/${accountId}/watchlist`, body, options);
    }

    // Get a users list of favourite movies
    public async getFavoriteMovies(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly language?: string;
            readonly page?: number;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountFavoriteMovieItem>> {
        return await this.client.get(`/account/${accountId}/favorite/movies`, options);
    }

    // Get a users list of favourite TV shows
    public async getFavoriteTVShows(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly language?: string;
            readonly page?: number;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountFavoriteTVShowItem>> {
        return await this.client.get(`/account/${accountId}/favorite/tv`, options);
    }

    // Get a users list of custom lists
    public async getCustomLists(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
        }
    ): Promise<PaginatedResult<AccountCustomListItem>> {
        return await this.client.get(`/account/${accountId}/lists`, options);
    }

    // Get a users list of rated movies
    public async getRatedMovies(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
            readonly language?: string;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountRatedMovieItem>> {
        return await this.client.get(`/account/${accountId}/rated/movies`, options);
    }

    // Get a users list of rated TV shows
    public async getRatedTVShows(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
            readonly language?: string;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountRatedTVShowItem>> {
        return await this.client.get(`/account/${accountId}/rated/tv`, options);
    }

    // Get a users list of rated TV Episodes
    public async getRatedTVEpisodes(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
            readonly language?: string;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountRatedTVEpisodeItem>> {
        return await this.client.get(`/account/${accountId}/rated/tv/episodes`, options);
    }

    // Get a list of movies added to a users watchlist
    public async getWatchlistMovies(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
            readonly language?: string;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountWatchlistMovieItem>> {
        return await this.client.get(`/account/${accountId}/watchlist/movies`, options);
    }

    // Get a list of TV shows added to a users watchlist
    public async getWatchlistTVShows(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
            readonly language?: string;
            readonly sortBy?: 'created_at.asc' | 'created_at.desc';
        }
    ): Promise<PaginatedResult<AccountWatchlistTVShowItem>> {
        return await this.client.get(`/account/${accountId}/watchlist/tv`, options);
    }
}
