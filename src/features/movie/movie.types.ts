import { GenderType, PaginatedResult } from '../../shared';

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
export type MovieNowPlayingDates = Readonly<{
    maximum: string;
    minimum: string;
}>;
export type MovieNowPlayingPaginatedResult = Readonly<PaginatedResult<MovieListItem> & {
    dates: MovieNowPlayingDates;
}>;
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
export type MovieTitleItem = Readonly<{
    iso_3166_1: string;
    title: string;
    type: string;
}>;
export type MovieAlternativeTitlesResult = Readonly<{
    id: number;
    titles: Readonly<MovieTitleItem[]>;
}>;

export type MovieGenreItem = Readonly<{
    id: number;
    name: string;
}>;
export type MovieProductionCompanyItem = Readonly<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}>;
export type MovieProductionCountryItem = Readonly<{
    iso_3166_1: string;
    name: string;
}>;
export type MovieSpokenLanguageItem = Readonly<{
    english_name: string;
    iso_639_1: string;
    name: string;
}>;
export type MovieAccountStateRate = Readonly<{
    value: number;
}>;
export type MovieAccountStatesResult = Readonly<{
    id: number;
    favorite: boolean;
    rated: MovieAccountStateRate;
    watchlist: boolean;
}>;
export type MovieChangesPoster = Readonly<{
    file_path: string;
}>;
export type MovieChangesValue = Readonly<{
    poster: MovieChangesPoster;
}>;
export type MovieChangesChangeItem = Readonly<{
    id: string;
    action: string;
    time: string;
    iso_639_1: string;
    iso_3166_1: string;
    value: MovieChangesValue;
}>;
export type MovieChangesItem = Readonly<{
    key: string;
    items: Readonly<MovieChangesChangeItem[]>;
}>;
export type MovieChangesResult = Readonly<{
    changes: MovieChangesItem[];
}>;
export type MovieCreditsCrewItem = Readonly<{
    adult: boolean;
    gender: GenderType;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}>;
export type MovieCreditsCastItem = Readonly<{
    adult: boolean;
    gender: GenderType;
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
}>;
export type MovieCreditsResult = Readonly<{
    id: number;
    cast: Readonly<MovieCreditsCastItem[]>;
    crew: Readonly<MovieCreditsCrewItem[]>;
}>;
export type MovieExternalIdsResult = Readonly<{
    id: number;
    imdb_id: string;
    wikidata_id: string;
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
}>;
export type MovieImageItem = Readonly<{
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}>;
export type MovieKeywordItem = Readonly<{
    id: number;
    name: string;
}>;
export type MovieKeywordsResult = Readonly<{
    id: number;
    keywords: Readonly<MovieKeywordItem[]>;
}>;
export type MovieListDetail = Readonly<{
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_631_1: string;
    list_type: string;
    name: string;
    poster_path: string;
}>;
export type MovieListPaginatedResult = Readonly<PaginatedResult<MovieListDetail> & { id: number }>;
export type MovieReleaseDateItem = Readonly<{
    certification: string;
    descriptors: Readonly<any[]>;
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
}>;
export type MovieReleaseDateResultItem = Readonly<{
    iso_631_1: string;
    release_dates: Readonly<MovieReleaseDateItem[]>;
}>;
export type MovieReleaseDatesResult = Readonly<{
    id: number;
    results: Readonly<MovieReleaseDateResultItem[]>;
}>;
export type MovieReviewAuthorDetails = Readonly<{
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
}>;
export type MovieReviewItem = Readonly<{
    author: string;
    author_details: MovieReviewAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}>;
export type MovieReviewsPaginatedResult = Readonly<PaginatedResult<MovieReviewItem> & { id: number }>;
export type MovieTranslationData = Readonly<{
    homepage: string;
    overview: string;
    runtime: number;
    tagline: string;
    title: string;
}>;
export type MovieTranslationItem = Readonly<{
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: MovieTranslationData;
}>;
export type MovieTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<MovieTranslationItem[]>;
}>;
export type MovieVideoItem = Readonly<{
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
}>;
export type MovieVideosResult = Readonly<{
    id: number;
    results: Readonly<MovieVideoItem[]>;
}>;
export type MovieWatchProviderItem = Readonly<{
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
}>;
export type MovieWatchProviderResultItem = Readonly<{
    link: string;
    flatrate: Readonly<MovieWatchProviderItem[]>;
    rent: Readonly<MovieWatchProviderItem[]>;
    buy: Readonly<MovieWatchProviderItem[]>;
}>;
export type MovieWatchProvidersResult = Readonly<{
    id: number;
    results: {
        [key in MovieWatchProviderCountry]: MovieWatchProviderResultItem;
    };
}>;
export type MovieDeleteRatingResult = Readonly<{
    status_code: number;
    status_message: string;
}>;
export type MovieListItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;

export type MovieDetail = Readonly<{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Readonly<MovieGenreItem[]>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Readonly<MovieProductionCompanyItem[]>;
    production_countries: Readonly<MovieProductionCountryItem[]>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Readonly<MovieSpokenLanguageItem[]>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;

export type MovieDetailsWithAppends = Readonly<
    MovieDetail & {
        credits?: Omit<MovieCreditsResult, 'id'>;
        images?: Omit<MovieImagesResult, 'id'>;
        videos?: Omit<MovieVideosResult, 'id'>;
        recommendations?: PaginatedResult<MovieDetail>;
        similar?: PaginatedResult<MovieDetail>;
        reviews?: PaginatedResult<MovieReviewItem>;
        keywords?: Omit<MovieKeywordsResult, 'id'>;
        release_dates?: Omit<MovieReleaseDatesResult, 'id'>;
        alternative_titles?: Omit<MovieAlternativeTitlesResult, 'id'>;
        translations?: Omit<MovieTranslationsResult, 'id'>;
        external_ids?: Omit<MovieExternalIdsResult, 'id'>;
        'watch/providers'?: Omit<MovieWatchProvidersResult, 'id'>;
    }
>;

export type MovieImagesResult = Readonly<{
    backdrops: Readonly<MovieImageItem[]>;
    id: number;
    logos: Readonly<MovieImageItem[]>;
    posters: Readonly<MovieImageItem[]>;
}>;