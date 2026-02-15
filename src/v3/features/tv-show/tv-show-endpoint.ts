import { PaginatedResult } from '../../shared';

import {
    TvShowAlternativeTitlesResult,
    TvShowAccountStatesResult,
    TvShowAggregateCreditsResult,
    TvShowAppendToResponse,
    TvShowChangesResult,
    TvShowContentRatingsResult,
    TvShowCreditsResult,
    TvShowDeleteRatingResult,
    TvShowDetailsWithAppend,
    TvShowEpisodeGroupsResult,
    TvShowExternalIdsResult,
    TvShowImagesResult,
    TvShowKeywordsResult,
    TvShowLatestResult,
    TvShowListResultItem,
    TvShowRecommendationItem,
    TvShowReviewItem,
    TvShowScreenedTheatricallyResult,
    TvShowSimilarItem,
    TvShowTranslationsResult,
    TvShowWatchProvidersResult,
    TvShowVideosResult,
} from './tv-show.types';

import { HttpClient } from '#core';

export class TvShowEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the details of a TV show.
     */
    public async getDetails(
        seriesId: number,
        options: Readonly<{
            appendToResponse: Readonly<TvShowAppendToResponse[]>;
            language: string;
        }>
    ): Promise<TvShowDetailsWithAppend> {
        return await this.client.get(`/tv/${seriesId}`, options);
    }

    /**
     * Get the rating, watchlist and favourite status.
     */
    public async getAccountStates(
        seriesId: number,
        options: Readonly<{
            sessionId: string;
            guestSessionId: string;
        }>
    ): Promise<TvShowAccountStatesResult> {
        return await this.client.get(`/tv/${seriesId}/account_states`, options);
    }

    /**
     * Get the aggregate credits (cast and crew) that have been added to a TV show.
     */
    public async getAggregateCredits(
        seriesId: number,
        options: Readonly<{
            language: string;
        }>
    ): Promise<TvShowAggregateCreditsResult> {
        return await this.client.get(`/tv/${seriesId}/aggregate_credits`, options);
    }

    /**
     * Get the alternative titles that have been added to a TV show.
     */
    public async getAlternativeTitles(seriesId: number): Promise<TvShowAlternativeTitlesResult> {
        return await this.client.get(`/tv/${seriesId}/alternative_titles`);
    }

    /**
     * Get the recent changes for a TV show.
     */
    public async getChanges(
        seriesId: number,
        options: Readonly<{
            endDate: string;
            page: number;
            startDate: string;
        }>
    ): Promise<TvShowChangesResult> {
        return await this.client.get(`/tv/${seriesId}/changes`, options);
    }

    /**
     * Get the content ratings that have been added to a TV show.
     */
    public async getContentRatings(seriesId: number): Promise<TvShowContentRatingsResult> {
        return await this.client.get(`/tv/${seriesId}/content_ratings`);
    }

    /**
     * Get the latest season credits of a TV show.
     */
    public async getCredits(
        seriesId: number,
        options: Readonly<{
            language: string;
        }>
    ): Promise<TvShowCreditsResult> {
        return await this.client.get(`/tv/${seriesId}/credits`, options);
    }

    /**
     * Get the episode groups that have been added to a TV show.
     */
    public async getEpisodeGroups(seriesId: number): Promise<TvShowEpisodeGroupsResult> {
        return await this.client.get(`/tv/${seriesId}/episode_groups`);
    }

    /**
     * Get a list of external IDs that have been added to a TV show.
     */
    public async getExternalIds(seriesId: number): Promise<TvShowExternalIdsResult> {
        return await this.client.get(`/tv/${seriesId}/external_ids`);
    }

    /**
     * Get the images that belong to a TV series.
     */
    public async getImages(
        seriesId: number,
        options: Readonly<{
            /**
             * specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null`
             */
            includeImageLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvShowImagesResult> {
        return await this.client.get(`/tv/${seriesId}/images`, options);
    }

    /**
     * Get a list of keywords that have been added to a TV show.
     */
    public async getKeywords(seriesId: number): Promise<TvShowKeywordsResult> {
        return await this.client.get(`/tv/${seriesId}/keywords`);
    }

    /**
     * Get the newest TV show ID.
     */
    public async getLatest(): Promise<TvShowLatestResult> {
        return await this.client.get(`/tv/latest`);
    }

    /**
     * Get the lists that a TV series has been added to.
     */
    public async getLists(
        seriesId: number,
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowListResultItem>> {
        return await this.client.get(`/tv/${seriesId}/lists`, options);
    }

    /**
     *
     */
    public async getRecommendations(
        seriesId: number,
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowRecommendationItem>> {
        return await this.client.get(`/tv/${seriesId}/recommendations`, options);
    }

    /**
     * Get the reviews that have been added to a TV show.
     */
    public async getReviews(
        seriesId: number,
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowReviewItem>> {
        return await this.client.get(`/tv/${seriesId}/reviews`, options);
    }

    /**
     * Get the seasons and episodes that have screened theatrically.
     */
    public async getScreenedTheatrically(
        seriesId: number
    ): Promise<TvShowScreenedTheatricallyResult> {
        return await this.client.get(`/tv/${seriesId}/screened_theatrically`);
    }

    /**
     * Get the similar TV shows.
     */
    public async getSimilar(
        seriesId: string,
        options: Readonly<{
            language: string;
            page: number;
        }>
    ): Promise<PaginatedResult<TvShowSimilarItem>> {
        return await this.client.get(`/tv/${seriesId}/similar`, options);
    }

    /**
     * Get the translations that have been added to a TV show.
     */
    public async getTranslations(seriesId: number): Promise<TvShowTranslationsResult> {
        return await this.client.get(`/tv/${seriesId}/translations`);
    }

    /**
     * Get the videos that belong to a TV show.
     */
    public async getVideos(
        seriesId: number,
        options: Readonly<{
            /**
             * filter the list results by language, supports more than one value by using a comma
             */
            includeVideoLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvShowVideosResult> {
        return await this.client.get(`/tv/${seriesId}/videos`, options);
    }

    /**
     * Get the list of streaming providers we have for a TV show.
     */
    public async getWatchProviders(seriesId: number): Promise<TvShowWatchProvidersResult> {
        return await this.client.get(`/tv/${seriesId}/watch/providers`);
    }

    /**
     * Rate a TV show and save it to your rated list.
     */
    public async addRating(
        seriesId: number,
        body: Readonly<{
            value: number;
        }>,
        options: Readonly<{
            guestSessionId: string;
            sessionId: string;
        }>
    ): Promise<{
        statusCode: number;
        statusMessage: string;
    }> {
        return await this.client.post(`/tv/${seriesId}/rating`, body, options);
    }

    /**
     *
     */
    public async deleteRating(
        seriesId: number,
        options: Readonly<{
            guestSessionId: string;
            sessionId: string;
        }>
    ): Promise<TvShowDeleteRatingResult> {
        return await this.client.delete(`/tv/${seriesId}/rating`, options);
    }
}
