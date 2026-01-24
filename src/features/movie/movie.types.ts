import { PaginatedResult } from '../../shared';

export type MovieWatchProviderCountry =
    | 'AE'
    | 'AL'
    | 'AR'
    | 'AT'
    | 'AU'
    | 'BA'
    | 'BB'
    | 'BE'
    | 'BG'
    | 'BH'
    | 'BO'
    | 'BR'
    | 'BS'
    | 'CA'
    | 'CH'
    | 'CL'
    | 'CO'
    | 'CR'
    | 'CV'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DO'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'ES'
    | 'FI'
    | 'FJ'
    | 'FR'
    | 'GB'
    | 'GF'
    | 'GI'
    | 'GR'
    | 'GT'
    | 'HK'
    | 'HN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IN'
    | 'IQ'
    | 'IS'
    | 'IT'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KR'
    | 'KW'
    | 'LB'
    | 'LI'
    | 'LT'
    | 'LV'
    | 'MD'
    | 'MK'
    | 'MT'
    | 'MU'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PS'
    | 'PT'
    | 'PY'
    | 'QA'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'SA'
    | 'SE'
    | 'SG'
    | 'SI'
    | 'SK'
    | 'SM'
    | 'SV'
    | 'TH'
    | 'TR'
    | 'TT'
    | 'TW'
    | 'UG'
    | 'US'
    | 'UY'
    | 'VE'
    | 'YE'
    | 'ZA';
export type MovieNowPlayingDates = {
    readonly maximum: string;
    readonly minimum: string;
};
export type MovieNowPlayingPaginatedResult = PaginatedResult<MovieListItem> & {
    readonly dates: MovieNowPlayingDates;
};
/**
 * All possible append_to_response values for a movie
 */
export type MovieAppendToResponse =
    | 'credits'
    | 'images'
    | 'videos'
    | 'recommendations'
    | 'similar'
    | 'reviews'
    | 'keywords'
    | 'release_dates'
    | 'alternative_titles'
    | 'translations'
    | 'external_ids'
    | 'watch/providers';
export type MovieTitleItem = {
    readonly iso_3166_1: string;
    readonly title: string;
    readonly type: string;
};
export type MovieAlternativeTitlesResult = {
    readonly id: number;
    titles: MovieTitleItem[];
};

export type MovieGenreItem = {
    readonly id: number;
    readonly name: string;
};
export type MovieProductionCompanyItem = {
    readonly id: number;
    readonly logo_path: string;
    readonly name: string;
    readonly origin_country: string;
};
export type MovieProductionCountryItem = {
    readonly iso_3166_1: string;
    readonly name: string;
};
export type MovieSpokenLanguageItem = {
    readonly english_name: string;
    readonly iso_639_1: string;
    readonly name: string;
};
export type MovieAccountStateRate = {
    value: number;
};
export type MovieAccountStatesResult = {
    id: number;
    favorite: boolean;
    rated: MovieAccountStateRate;
    watchlist: boolean;
};
export type MovieChangesPoster = {
    file_path: string;
};
export type MovieChangesValue = {
    poster: MovieChangesPoster;
};
export type MovieChangesChangeItem = {
    id: string;
    action: string;
    time: string;
    iso_639_1: string;
    iso_3166_1: string;
    value: MovieChangesValue;
};
export type MovieChangesItem = {
    key: string;
    items: MovieChangesChangeItem[];
};
export type MovieChangesResult = {
    changes: MovieChangesItem[];
};
export type MovieCreditsCrewItem = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
};
export type MovieCreditsCastItem = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};
export type MovieCreditsResult = {
    id: number;
    cast: MovieCreditsCastItem[];
    crew: MovieCreditsCrewItem[];
};
export type MovieExternalIdsResult = {
    id: number;
    imdb_id: string;
    wikidata_id: string;
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
};
export type MovieImageItem = {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
};
export type MovieKeywordItem = {
    id: number;
    name: string;
};
export type MovieKeywordsResult = {
    id: number;
    keywords: MovieKeywordItem[];
};
export type MovieListDetail = {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_631_1: string;
    list_type: string;
    name: string;
    poster_path: string;
};
export type MovieListPaginatedResult = PaginatedResult<MovieListDetail> & { id: number };
export type MovieReleaseDateItem = {
    certification: string;
    descriptors: any[];
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
};
export type MovieReleaseDateResultItem = {
    iso_631_1: string;
    release_dates: MovieReleaseDateItem[];
};
export type MovieReleaseDatesResult = {
    id: number;
    results: MovieReleaseDateResultItem[];
};
export type MovieReviewAuthorDetails = {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
};
export type MovieReviewItem = {
    author: string;
    author_details: MovieReviewAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
};
export type MovieReviewsPaginatedResult = PaginatedResult<MovieReviewItem> & { id: number };
export type MovieTranslationData = {
    homepage: string;
    overview: string;
    runtime: number;
    tagline: string;
    title: string;
};
export type MovieTranslationItem = {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: MovieTranslationData;
};
export type MovieTranslationsResult = {
    id: number;
    translations: MovieTranslationItem[];
};
export type MovieVideoItem = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};
export type MovieVideosResult = {
    id: number;
    results: MovieVideoItem[];
};
export type MovieWatchProviderItem = {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
};
type MovieWatchProviderResultItem = {
    link: string;
    flatrate: MovieWatchProviderItem[];
    rent: MovieWatchProviderItem[];
    buy: MovieWatchProviderItem[];
};
export type MovieWatchProvidersResult = {
    id: number;
    results: {
        readonly [key in MovieWatchProviderCountry]: MovieWatchProviderResultItem;
    };
};
export type MovieDeleteRatingResult = {
    status_code: number;
    status_message: string;
};
export type MovieListItem = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly genre_ids: number[];
    readonly id: number;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly release_date: string;
    readonly title: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};

import {
    MovieAlternativeTitlesResult,
    MovieAppendToResponse,
    MovieCreditsResult,
    MovieExternalIdsResult,
    MovieGenreItem,
    MovieImageItem,
    MovieKeywordsResult,
    MovieProductionCompanyItem,
    MovieProductionCountryItem,
    MovieReleaseDatesResult,
    MovieReviewItem,
    MovieSpokenLanguageItem,
    MovieTranslationsResult,
    MovieVideosResult,
    MovieWatchProvidersResult,
} from './movie.types';
import { PaginatedResult } from '../../shared';

export type MovieDetail = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly belongs_to_collection?: any;
    readonly budget: number;
    readonly genres: MovieGenreItem[];
    readonly homepage: string;
    readonly id: number;
    readonly imdb_id: string;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly production_companies: MovieProductionCompanyItem[];
    readonly production_countries: MovieProductionCountryItem[];
    readonly release_date: string;
    readonly revenue: number;
    readonly runtime: number;
    readonly spoken_languages: MovieSpokenLanguageItem[];
    readonly status: string;
    readonly tagline: string;
    readonly title: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};
/**
 * Mapping from append value → the shape it adds to the response
 */
type _AppendMapping = {
    credits: { credits: Omit<MovieCreditsResult, 'id'> };
    images: { images: Omit<MovieImagesResult, 'id'> };
    videos: { videos: Omit<MovieVideosResult, 'id'> };
    recommendations: { recommendations: PaginatedResult<MovieDetail> };
    similar: { similar: PaginatedResult<MovieDetail> };
    reviews: { reviews: PaginatedResult<MovieReviewItem> };
    keywords: { keywords: Omit<MovieKeywordsResult, 'id'> };
    release_dates: { release_dates: Omit<MovieReleaseDatesResult, 'id'> };
    alternative_titles: { alternative_titles: Omit<MovieAlternativeTitlesResult, 'id'> };
    translations: { translations: Omit<MovieTranslationsResult, 'id'> };
    external_ids: { external_ids: Omit<MovieExternalIdsResult, 'id'> };
    'watch/providers': { 'watch/providers': Omit<MovieWatchProvidersResult, 'id'> };
};

type _Normalized<T> = T extends readonly any[] ? T : [];

export type MovieDetailsWithAppends<
    TAppend extends readonly MovieAppendToResponse[] | undefined = [],
> = MovieDetail & {
    [K in _Normalized<TAppend>[number] as _AppendMapping[K] extends Record<string, any>
        ? keyof _AppendMapping[K]
        : never]: _AppendMapping[K] extends Record<string, infer V> ? V : _AppendMapping[K];
};
export type MovieImagesResult = {
    backdrops: MovieImageItem[];
    id: number;
    logos: MovieImageItem[];
    posters: MovieImageItem[];
};