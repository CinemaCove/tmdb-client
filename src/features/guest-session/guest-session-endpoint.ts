import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    GuestSessionRatedMovieResultItem,
    GuestSessionRatedTvEpisodeResultItem,
    GuestSessionRatedTvShowResultItem,
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
    ): Promise<PaginatedResult<GuestSessionRatedMovieResultItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/movies`, options);
    }

    /**
     * Get the rated TV shows for a guest session
     */
    public async getRatedTvShows(
        guestSessionId: string,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<GuestSessionRatedTvShowResultItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/tv`, options);
    }

    /**
     * Get the rated TV Episodes for a guest session
     */
    public async getRatedTvEpisodes(
        guestSessionId: string,
        options?: Readonly<{
            page?: number;
            language?: string;
            sortBy?: 'created_at.asc' | 'created_at.desc';
        }>
    ): Promise<PaginatedResult<GuestSessionRatedTvEpisodeResultItem>> {
        return this.client.get(`/guest_session/${guestSessionId}/rated/tv/episodes`, options);
    }
}
