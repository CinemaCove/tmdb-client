import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';
import {
    DiscoverMovieItem,
    DiscoverMoviesSortBy,
    DiscoverTVShowItem,
    DiscoverTVShowsSortBy,
} from './discover.types';

export class DiscoverEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // Find movies using over 30 filters and sort options.
    public async searchMovies(options?: {
        readonly certification?: string; // use in conjunction with region
        readonly 'certification.gte'?: string; // use in conjunction with region
        readonly 'certification.lte'?: string; // use in conjunction with region
        readonly certificationCountry?: string; // use in conjunction with the certification, certification.gte and certification.lte filters
        readonly includeAdult?: boolean;
        readonly includeVideo?: boolean;
        readonly language?: string;
        readonly page?: number;
        readonly primaryReleaseDate?: string;
        readonly 'primaryReleaseDate.gte'?: string;
        readonly 'primaryReleaseDate.lte'?: string;
        readonly region?: string;
        readonly 'releaseDate.gte'?: string;
        readonly 'releaseDate.lte'?: string;
        readonly sortBy?: DiscoverMoviesSortBy;
        readonly 'voteAverage.gte'?: number;
        readonly 'voteAverage.lte'?: number;
        readonly 'voteCount.gte'?: number;
        readonly 'voteCount.lte'?: number;
        readonly watchRegion?: string; // use in conjunction with with_watch_monetization_types or with_watch_providers
        readonly withCast?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withCrew?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withGenres?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withOriginCountry?: string;
        readonly withPeople?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withReleaseType?: '1' | '2' | '3' | '4' | '5' | '6'; // can be a comma (AND) or pipe (OR) separated query. Can be used in conjunction with region
        readonly 'withRuntime.gte'?: number;
        readonly 'withRuntime.lte'?: number;
        readonly withWatchMonetizationTypes?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'; // can be a comma (AND) or pipe (OR) separated query
        readonly withWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query. Use in conjunction with region
        readonly withoutCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutGenres?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly year?: number;
    }): Promise<PaginatedResult<DiscoverMovieItem>> {
        return await this.client.get(`/discover/movie`, options);
    }

    // Find TV shows using over 30 filters and sort options.
    public async searchTVShows(options?: {
        readonly 'airDate.gte'?: string;
        readonly 'airDate.lte'?: string;
        readonly firstAirDateYear?: number;
        readonly 'firstAirDate.gte'?: string;
        readonly 'firstAirDate.lte'?: string;
        readonly includeAdult?: boolean;
        readonly includeNullFirstAirDates?: boolean;
        readonly language?: string;
        readonly page?: number;
        readonly screenTheatrically?: boolean;
        readonly sortBy?: DiscoverTVShowsSortBy;
        readonly timezone?: string;
        readonly 'voteAverage.gte'?: number;
        readonly 'voteAverage.lte'?: number;
        readonly 'voteCount.gte'?: number;
        readonly 'voteCount.lte'?: number;
        readonly watchRegion?: string; // use in conjunction with with_watch_monetization_types or with_watch_providers
        readonly withCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withGenres?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withNetworks?: number; // can be a comma (AND) or pipe (OR) separated query
        readonly withOriginCountry?: string;
        readonly 'withRuntime.gte'?: number;
        readonly 'withRuntime.lte'?: number;
        readonly withStatus?: '0' | '1' | '2' | '3' | '4' | '5'; // can be a comma (AND) or pipe (OR) separated query
        readonly withWatchMonetizationTypes?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'; // can be a comma (AND) or pipe (OR) separated query
        readonly withWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query. Use in conjunction with region
        readonly withoutCompanies?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutGenres?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutKeywords?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withoutWatchProviders?: string; // can be a comma (AND) or pipe (OR) separated query
        readonly withType?: '1' | '2' | '3' | '4' | '5' | '6'; // can be a comma (AND) or pipe (OR) separated query. Can be used in conjunction with region
    }): Promise<PaginatedResult<DiscoverTVShowItem>> {
        return await this.client.get(`/discover/tv`, options);
    }
}
