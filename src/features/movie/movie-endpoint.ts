import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';
import {
    MovieAccountStatesResult,
    MovieAlternativeTitlesResult,
    MovieAppendToResponse,
    MovieChangesResult,
    MovieCreditsResult,
    MovieDeleteRatingResult,
    MovieDetail,
    MovieDetailsWithAppends,
    MovieExternalIdsResult,
    MovieKeywordsResult,
    MovieListItem,
    MovieListPaginatedResult,
    MovieNowPlayingPaginatedResult,
    MovieReleaseDatesResult,
    MovieReviewsPaginatedResult,
    MovieTranslationsResult,
    MovieVideosResult,
    MovieWatchProvidersResult,
} from './movie.types';

export class MovieEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // region Lists
    // Get a list of movies that are currently in theatres
    public async getNowPlayingList(
        options: {
            readonly language?: string;
            readonly page?: number;
            readonly region?: string;
        } = {}
    ): Promise<MovieNowPlayingPaginatedResult> {
        return this.client.get('/movie/now_playing', options);
    }

    // Get a list of movies ordered by popularity
    public async getPopularList(
        options: {
            readonly language?: string;
            readonly page?: number;
            readonly region?: string;
        } = {}
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/popular', options);
    }

    // Get a list of movies ordered by rating
    public async getTopRatedList(
        options: {
            readonly language?: string;
            readonly page?: number;
            readonly region?: string;
        } = {}
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/top_rated', options);
    }

    // Get a list of movies that are being released soon
    public async getUpcomingList(
        options: {
            readonly language?: string;
            readonly page?: number;
            readonly region?: string;
        } = {}
    ): Promise<PaginatedResult<MovieListItem>> {
        return this.client.get('/movie/upcoming', options);
    }
    // endregion

    /**
     * JustWatch Attribution Required
     * In order to use this watch providers' data you must attribute the source of the data as JustWatch. If TMDB finds any usage not complying with these terms they will revoke access to the API.
     *
     */
    public async getDetails(
        movieId: number,
        options: {
            readonly appendToResponse?: MovieAppendToResponse[]; // comma separated list of endpoints within this namespace, 20 items max
            readonly language?: string;
        } = {}
    ): Promise<MovieDetailsWithAppends<typeof options.appendToResponse>> {
        return await this.client.get(`/movie/${movieId}`, {
            ...options,
            appendToResponse: (options?.appendToResponse ?? []).join(','),
        });
    }

    // Get the alternative titles for a movie
    public async getAlternativeTitles(
        movieId: number,
        options: {
            readonly country?: string; // specify a ISO-3166-1 value to filter the results
        } = {}
    ): Promise<MovieAlternativeTitlesResult> {
        return await this.client.get(`/movie/${movieId}/alternative_titles`, options);
    }

    // Get the rating, watchlist and favourite status of an account
    public async getAccountStates(
        movieId: number,
        options: {
            readonly sessionId?: string;
            readonly guestSessionId?: string;
        }
    ): Promise<MovieAccountStatesResult> {
        return await this.client.get(`/movie/${movieId}/account_states`, options);
    }

    // Get the recent changes for a movie
    public async getChanges(
        movieId: number,
        options: {
            readonly page?: number;
            readonly startDate?: string;
            readonly endDate?: string;
        } = {}
    ): Promise<MovieChangesResult> {
        return await this.client.get(`/movie/${movieId}/changes`, options);
    }

    // get the credits of a movie
    public async getCredits(
        movieId: number,
        options: {
            readonly language?: string;
        } = {}
    ): Promise<MovieCreditsResult> {
        return await this.client.get(`/movie/${movieId}/credits`, options);
    }

    // get the associated external IDs of a movie
    public async getExternalIds(movieId: number): Promise<MovieExternalIdsResult> {
        return await this.client.get(`/movie/${movieId}/external_ids`);
    }

    // Get the images that belong to a movie
    public async getImages(
        movieId: number,
        options: {
            readonly includeImageLanguage?: string; // specify a comma separated list of ISO-639-1 values to query, for example: en-US,null
            readonly language?: string;
        } = {}
    ): Promise<MovieImagesResult> {
        return await this.client.get(`/movie/${movieId}/images`, options);
    }

    // Get keywords associated to a movie
    public async getKeywords(movieId: number): Promise<MovieKeywordsResult> {
        return await this.client.get(`/movie/${movieId}/keywords`);
    }

    // Get the latest movie
    public async getLatest(): Promise<MovieDetail> {
        return await this.client.get(`/movie/latest`);
    }

    // Get the lists that a movie has been added to
    public async getLists(
        movieId: number,
        options: {
            readonly language?: string;
            readonly page?: number;
        } = {}
    ): Promise<MovieListPaginatedResult> {
        return await this.client.get(`/movie/${movieId}/lists`, options);
    }

    public async getRecommendations(
        movieId: number,
        options: {
            readonly language?: string;
            readonly page?: number;
        } = {}
    ): Promise<PaginatedResult<MovieDetail>> {
        return await this.client.get(`/movie/${movieId}/recommendations`, options);
    }

    // Get the release dates and certifications for a movie
    public async getReleaseDates(movieId: number): Promise<MovieReleaseDatesResult> {
        return await this.client.get(`/movie/${movieId}/release_dates`);
    }

    // Get the user reviews for a movie
    public async getReviews(
        movieId: number,
        options: {
            readonly language?: string;
            readonly page?: number;
        } = {}
    ): Promise<MovieReviewsPaginatedResult> {
        return await this.client.get(`/movie/${movieId}/reviews`, options);
    }

    /* Get the similar movies based on genres and keywords
     * Note
     * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.
     */
    public async getSimilar(
        movieId: number,
        options: {
            readonly language?: string;
            readonly page?: number;
        } = {}
    ): Promise<PaginatedResult<MovieDetail>> {
        return await this.client.get(`/movie/${movieId}/similar`, options);
    }

    // Get the translations for a movie
    public async getTranslations(movieId: number): Promise<MovieTranslationsResult> {
        return await this.client.get(`/movie/${movieId}/translations`);
    }

    // Get the videos of a movie
    public async getVideos(
        movieId: number,
        options: {
            readonly language?: string;
        } = {}
    ): Promise<MovieVideosResult> {
        return await this.client.get(`/movie/${movieId}/videos`);
    }

    /** Get the list of streaming providers we have for a movie
     * JustWatch Attribution Required
     * In order to use this data you must attribute the source of the data as JustWatch. If TMDB finds any usage not complying with these terms they will revoke access to the API.
     */
    public async getWatchProviders(movieId: number): Promise<MovieWatchProvidersResult> {
        return await this.client.get(`/movie/${movieId}/watch/providers`);
    }

    /**
     * Rate a movie and save it to your rated list
     */
    public async addRating(
        movieId: number,
        body: {
            value: number;
        },
        options: {
            readonly guestSessionId?: string;
            readonly sessionId?: string;
        }
    ): Promise<void> {
        return await this.client.post(`/movie/${movieId}/rating`, body, options);
    }

    /**
     * Delete a user rating
     */
    public async deleteRating(
        movieId: number,
        options: {
            readonly guestSessionId?: string;
            readonly sessionId?: string;
        }
    ): Promise<MovieDeleteRatingResult> {
        return await this.client.delete(`/movie/${movieId}/rating`, options);
    }
}
