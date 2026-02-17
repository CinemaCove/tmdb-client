import { PaginatedResult } from '../../shared';

import {
    DiscoverMovieResultItem,
    DiscoverMoviesSortBy,
    DiscoverTvShowResultItem,
    DiscoverTvShowsSortBy,
} from './discover.types';

import { HttpClient } from '#core';

export class DiscoverEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Find movies using over 30 filters and sort options.
     */
    public async searchMovies(
        options?: Readonly<{
            certification?: string; // use in conjunction with region
            'certification.gte'?: string; // use in conjunction with region
            'certification.lte'?: string; // use in conjunction with region
            certificationCountry?: string; // use in conjunction with the certification, certification.gte and certification.lte filters
            includeAdult?: boolean;
            includeVideo?: boolean;
            language?: string;
            page?: number;
            primaryReleaseDate?: string;
            'primaryReleaseDate.gte'?: string;
            'primaryReleaseDate.lte'?: string;
            region?: string;
            'releaseDate.gte'?: string;
            'releaseDate.lte'?: string;
            sortBy?: DiscoverMoviesSortBy;
            'voteAverage.gte'?: number;
            'voteAverage.lte'?: number;
            'voteCount.gte'?: number;
            'voteCount.lte'?: number;
            watchRegion?: string; // use in conjunction with with_watch_monetization_types or with_watch_providers
            withCast?: string; // can be a comma (AND) or pipe (OR) separated query
            withCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
            withCrew?: string; // can be a comma (AND) or pipe (OR) separated query
            withGenres?: string; // can be a comma (AND) or pipe (OR) separated query
            withKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
            withOriginCountry?: string;
            withOriginalLanguage?: string;
            withPeople?: string; // can be a comma (AND) or pipe (OR) separated query
            withReleaseType?: '1' | '2' | '3' | '4' | '5' | '6'; // can be a comma (AND) or pipe (OR) separated query. Can be used in conjunction with region
            'withRuntime.gte'?: number;
            'withRuntime.lte'?: number;
            withWatchMonetizationTypes?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'; // can be a comma (AND) or pipe (OR) separated query
            withWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query. Use in conjunction with region
            withoutCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutGenres?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query
            year?: number;
        }>
    ): Promise<PaginatedResult<DiscoverMovieResultItem>> {
        return await this.client.get(`/discover/movie`, options);
    }

    /**
     * Find TV shows using over 30 filters and sort options.
     */
    public async searchTvShows(
        options?: Readonly<{
            'airDate.gte'?: string;
            'airDate.lte'?: string;
            firstAirDateYear?: number;
            'firstAirDate.gte'?: string;
            'firstAirDate.lte'?: string;
            includeAdult?: boolean;
            includeNullFirstAirDates?: boolean;
            language?: string;
            page?: number;
            screenTheatrically?: boolean;
            sortBy?: DiscoverTvShowsSortBy;
            timezone?: string;
            'voteAverage.gte'?: number;
            'voteAverage.lte'?: number;
            'voteCount.gte'?: number;
            'voteCount.lte'?: number;
            watchRegion?: string; // use in conjunction with with_watch_monetization_types or with_watch_providers
            withCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
            withGenres?: string; // can be a comma (AND) or pipe (OR) separated query
            withKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
            withNetworks?: number; // can be a comma (AND) or pipe (OR) separated query
            withOriginCountry?: string;
            withOriginalLanguage?: string;
            'withRuntime.gte'?: number;
            'withRuntime.lte'?: number;
            withStatus?: '0' | '1' | '2' | '3' | '4' | '5'; // can be a comma (AND) or pipe (OR) separated query
            withWatchMonetizationTypes?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'; // can be a comma (AND) or pipe (OR) separated query
            withWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query. Use in conjunction with region
            withoutCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutGenres?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
            withoutWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query
            withType?: '1' | '2' | '3' | '4' | '5' | '6'; // can be a comma (AND) or pipe (OR) separated query. Can be used in conjunction with region
        }>
    ): Promise<PaginatedResult<DiscoverTvShowResultItem>> {
        return await this.client.get(`/discover/tv`, options);
    }
}
