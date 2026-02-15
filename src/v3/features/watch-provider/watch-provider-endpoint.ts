import {
    WatchProviderAvailableRegionsResult,
    WatchProviderMovieListResult,
    WatchProviderTvListResult,
} from './watch-provider.types';

import { HttpClient } from '#core';

export class WatchProviderEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the list of the countries we have watch provider (OTT/streaming) data for.
     */
    public async getAvailableRegions(
        options: Readonly<{
            language: string;
        }>
    ): Promise<WatchProviderAvailableRegionsResult> {
        return await this.client.get(`/watch/providers/regions`, options);
    }

    /**
     * Get the list of streaming providers we have for movies.
     */
    public async getMovieList(
        options: Readonly<{
            language: string;
            watchRegion: string;
        }>
    ): Promise<WatchProviderMovieListResult> {
        return await this.client.get(`/watch/providers/movie`, options);
    }

    /**
     * Get the list of streaming providers we have for TV shows.
     */
    public async getTvList(
        options: Readonly<{
            language: string;
            watchRegion: string;
        }>
    ): Promise<WatchProviderTvListResult> {
        return await this.client.get(`/watch/providers/tv`, options);
    }
}
