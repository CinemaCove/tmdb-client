import {
    TvSeasonAccountStatesResult,
    TvSeasonAggregateCreditsResult,
    TvSeasonAppendToResponse,
    TvSeasonChangesResult,
    TvSeasonCreditsResult,
    TvSeasonDetailsWithAppend,
    TvSeasonExternalIdsResult,
    TvSeasonImageItem,
    TvSeasonTranslationsResult,
    TvSeasonVideosResult,
    TvSeasonWatchProvidersResult,
} from './tv-season.types';

import { HttpClient } from '#core';

type TvSeasonImagesResult = Readonly<{
    id: number;
    posters: Readonly<TvSeasonImageItem[]>;
}>;

export class TvSeasonEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Query the details of a TV season.
     */
    public async getDetails(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            appendToResponse: Readonly<TvSeasonAppendToResponse[]>;
            language: string;
        }>
    ): Promise<TvSeasonDetailsWithAppend> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}`, options);
    }

    /**
     * Get the rating, watchlist and favourite status.
     */
    public async getAccountStates(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            sessionId: string;
            guestSessionId: string;
        }>
    ): Promise<TvSeasonAccountStatesResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/account_states`,
            options
        );
    }

    /**
     * Get the aggregate credits (cast and crew) that have been added to a TV season.
     */
    public async getAggregateCredits(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            language: string;
        }>
    ): Promise<TvSeasonAggregateCreditsResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/aggregate_credits`,
            options
        );
    }

    /**
     * Get the recent changes for a TV season.
     */
    public async getChanges(
        seasonId: number,
        options: Readonly<{
            endDate: string;
            page: number;
            startDate: string;
        }>
    ): Promise<TvSeasonChangesResult> {
        return await this.client.get(`/tv/season/${seasonId}/changes`, options);
    }

    /**
     *
     */
    public async getCredits(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            language: string;
        }>
    ): Promise<TvSeasonCreditsResult> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}/credits`, options);
    }

    /**
     * Get a list of external IDs that have been added to a TV season.
     */
    public async getExternalIds(
        seriesId: number,
        seasonNumber: number
    ): Promise<TvSeasonExternalIdsResult> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}/external_ids`);
    }

    /**
     * Get the images that belong to a TV season.
     */
    public async getImages(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            /**
             * specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null`
             */
            includeImageLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvSeasonImagesResult> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}/images`, options);
    }

    /**
     * Get the translations for a TV season.
     */
    public async getTranslations(
        seriesId: number,
        seasonNumber: number
    ): Promise<TvSeasonTranslationsResult> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}/translations`);
    }

    /**
     * Get the videos that belong to a TV season.
     */
    public async getVideos(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            /**
             * filter the list results by language, supports more than one value by using a comma
             */
            includeVideoLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvSeasonVideosResult> {
        return await this.client.get(`/tv/${seriesId}/season/${seasonNumber}/videos`, options);
    }

    /**
     * Get the list of streaming providers we have for a TV season.
     */
    public async getWatchProviders(
        seriesId: number,
        seasonNumber: number,
        options: Readonly<{
            language: string;
        }>
    ): Promise<TvSeasonWatchProvidersResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/watch/providers`,
            options
        );
    }
}
