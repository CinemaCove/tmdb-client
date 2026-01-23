import { TmdbClient } from '../../tmdb-client';
import {
    AccountCustomListEntry,
    AccountDetails,
    AccountFavoriteMovieEntry,
    AccountFavoriteTVShowEntry,
    AccountRatedMovieEntry,
    AccountRatedTVEpisodeEntry,
    AccountRatedTVShowEntry,
    AccountResult,
    AccountWatchlistMovieEntry,
    AccountWatchlistTVShowEntry,
} from './account.types';
import { PaginatedResult } from '../../shared';
import { buildQueryParams } from '../../utils/build-query-params';
import { buildBody } from '../../utils/build-body';

export class AccountEndpoint {
    public constructor(private client: TmdbClient) {}

    // Get the public details of an account on TMDB.
    public async getDetails(
        accountId: number | null,
        options: {
            readonly sessionId: string;
        } = {
            sessionId: '',
        }
    ): Promise<AccountDetails> {
        const params = buildQueryParams(options);

        const res = await this.client.getHttp().get(`/account/${accountId}`, {
            params,
        });

        return res.data;
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
        const params = buildQueryParams(options);
        const reqBody = buildBody(body);

        const res = await this.client.getHttp().post(`/account/${accountId}/favorite`, reqBody, {
            params,
        });

        return res.data;
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
        const params = buildQueryParams(options);
        const reqBody = buildBody(body);

        const res = await this.client.getHttp().post(`/account/${accountId}/watchlist`, reqBody, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountFavoriteMovieEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/favorite/movies`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountFavoriteTVShowEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/favorite/tv`, {
            params,
        });

        return res.data;
    }

    // Get a users list of custom lists
    public async getCustomLists(
        accountId: number | null,
        options: {
            readonly sessionId: string;
            readonly page?: number;
        }
    ): Promise<PaginatedResult<AccountCustomListEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/lists`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountRatedMovieEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/rated/movies`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountRatedTVShowEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/rated/tv`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountRatedTVEpisodeEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/rated/tv/episodes`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountWatchlistMovieEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/watchlist/movies`, {
            params,
        });

        return res.data;
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
    ): Promise<PaginatedResult<AccountWatchlistTVShowEntry>> {
        const params = buildQueryParams(options);
        const res = await this.client.getHttp().get(`/account/${accountId}/watchlist/tv`, {
            params,
        });

        return res.data;
    }
}
