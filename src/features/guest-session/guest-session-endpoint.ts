import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    GuestSessionRatedMovieItem,
    GuestSessionRatedTVEpisodeItem,
    GuestSessionRatedTVShowItem,
} from './guest-session.types';

export class GuestSessionEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the rated movies for a guest session
     */
    public async getRatedMovies(
        guestSessionId: string,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<GuestSessionRatedMovieItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/movies`, options);
    }

    /**
     * Get the rated TV shows for a guest session
     */
    public async getRatedTVShows(
        guestSessionId: string,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<GuestSessionRatedTVShowItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/tv`, options);
    }

    /**
     * Get the rated TV Episodes for a guest session
     */
    public async getRatedTVEpisodes(
        guestSessionId: string,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<GuestSessionRatedTVEpisodeItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/tv/episodes`, options);
    }
}
