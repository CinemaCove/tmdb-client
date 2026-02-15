import {
    TvEpisodeAddRatingResult,
    TvEpisodeDeleteRatingResult,
    TvEpisodeImagesResult,
    TvEpisodeTranslationsResult,
    TvEpisodeVideosResult,
} from './tv-episode.types';

import { HttpClient } from '#core';

export class TvEpisodeEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the images that belong to a TV episode.
     */
    public async getImages(
        seriesId: number,
        seasonNumber: number,
        episodeNumber: number,
        options: Readonly<{
            /**
             * specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null`
             */
            includeImageLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvEpisodeImagesResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/images`,
            options
        );
    }

    /**
     * Get the translations that have been added to a TV episode.
     */
    public async getTranslations(
        seriesId: number,
        seasonNumber: number,
        episodeNumber: number
    ): Promise<TvEpisodeTranslationsResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/translations`
        );
    }

    /**
     * Get the videos that belong to a TV episode.
     */
    public async getVideos(
        seriesId: number,
        seasonNumber: number,
        episodeNumber: number,
        options: Readonly<{
            /**
             * filter the list results by language, supports more than one value by using a comma
             */
            includeVideoLanguage: Readonly<string[]>;
            language: string;
        }>
    ): Promise<TvEpisodeVideosResult> {
        return await this.client.get(
            `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/videos`,
            options
        );
    }

    /**
     * Rate a TV episode and save it to your rated list.
     */
    public async addRating(
        seriesId: number,
        seasonNumber: number,
        episodeNumber: number,
        body: Readonly<{
            value: number;
        }>,
        options: Readonly<{
            guestSessionId: string;
            sessionId: string;
        }>
    ): Promise<TvEpisodeAddRatingResult> {
        return await this.client.post(
            `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
            body,
            options
        );
    }

    /**
     * Delete your rating on a TV episode.
     */
    public async deleteRating(
        seriesId: number,
        seasonNumber: number,
        episodeNumber: number,
        options: Readonly<{
            guestSessionId: string;
            sessionId: string;
        }>
    ): Promise<TvEpisodeDeleteRatingResult> {
        return await this.client.delete(
            `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
            options
        );
    }
}
