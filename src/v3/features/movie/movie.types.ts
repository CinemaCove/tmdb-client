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

export type MovieNowPlayingPaginatedResult = Readonly<
    PaginatedResult<MovieListResultItem> & {
        dates: MovieNowPlayingDates;
    }
>;

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
    iso3166_1: string;
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
    logoPath: string;
    name: string;
    originCountry: string;
}>;
export type MovieProductionCountryItem = Readonly<{
    iso3166_1: string;
    name: string;
}>;
export type MovieSpokenLanguageItem = Readonly<{
    englishName: string;
    iso639_1: string;
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
    filePath: string;
}>;
export type MovieChangesValue = Readonly<{
    poster: MovieChangesPoster;
}>;
export type MovieChangesChangeItem = Readonly<{
    id: string;
    action: string;
    time: string;
    iso639_1: string;
    iso3166_1: string;
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
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    creditId: string;
    department: string;
    job: string;
}>;
export type MovieCreditsCastItem = Readonly<{
    adult: boolean;
    gender: GenderType;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    castId: number;
    character: string;
    creditId: string;
    order: number;
}>;
export type MovieCreditsResult = Readonly<{
    id: number;
    cast: Readonly<MovieCreditsCastItem[]>;
    crew: Readonly<MovieCreditsCrewItem[]>;
}>;
export type MovieExternalIdsResult = Readonly<{
    id: number;
    imdbId: string;
    wikidataId: string;
    facebookId: string;
    instagramId: string;
    twitterId: string;
}>;
export type MovieImageItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso639_1: string;
    filePath: string;
    voteAverage: number;
    voteCount: number;
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
    favoriteCount: number;
    id: number;
    itemCount: number;
    iso631_1: string;
    listType: string;
    name: string;
    posterPath: string;
}>;
export type MovieListPaginatedResult = Readonly<PaginatedResult<MovieListDetail> & { id: number }>;
export type MovieReleaseDateItem = Readonly<{
    certification: string;
    descriptors: Readonly<unknown[]>;
    iso639_1: string;
    note: string;
    releaseDate: string;
    type: number;
}>;
export type MovieReleaseDateResultItem = Readonly<{
    iso631_1: string;
    releaseDates: Readonly<MovieReleaseDateItem[]>;
}>;
export type MovieReleaseDatesResult = Readonly<{
    id: number;
    results: Readonly<MovieReleaseDateResultItem[]>;
}>;
export type MovieReviewAuthorDetails = Readonly<{
    name: string;
    username: string;
    avatarPath: string;
    rating: number;
}>;
export type MovieReviewItem = Readonly<{
    author: string;
    authorDetails: MovieReviewAuthorDetails;
    content: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    url: string;
}>;
export type MovieReviewsPaginatedResult = Readonly<
    PaginatedResult<MovieReviewItem> & { id: number }
>;
export type MovieTranslationData = Readonly<{
    homepage: string;
    overview: string;
    runtime: number;
    tagline: string;
    title: string;
}>;
export type MovieTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
    data: MovieTranslationData;
}>;
export type MovieTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<MovieTranslationItem[]>;
}>;
export type MovieVideoItem = Readonly<{
    iso639_1: string;
    iso3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
    id: string;
}>;
export type MovieVideosResult = Readonly<{
    id: number;
    results: Readonly<MovieVideoItem[]>;
}>;
export type MovieWatchProviderItem = Readonly<{
    logoPath: string;
    providerId: number;
    providerName: string;
    displayPriority: number;
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
    statusCode: number;
    statusMessage: string;
}>;
export type MovieListResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;

export type MovieDetail = Readonly<{
    adult: boolean;
    backdropPath: string;
    belongsToCollection?: unknown;
    budget: number;
    genres: Readonly<MovieGenreItem[]>;
    homepage: string;
    id: number;
    imdbId: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: Readonly<MovieProductionCompanyItem[]>;
    productionCountries: Readonly<MovieProductionCountryItem[]>;
    releaseDate: string;
    revenue: number;
    runtime: number;
    spokenLanguages: Readonly<MovieSpokenLanguageItem[]>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
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
        releaseDates?: Omit<MovieReleaseDatesResult, 'id'>;
        alternativeTitles?: Omit<MovieAlternativeTitlesResult, 'id'>;
        translations?: Omit<MovieTranslationsResult, 'id'>;
        externalIds?: Omit<MovieExternalIdsResult, 'id'>;
        'watch/providers'?: Omit<MovieWatchProvidersResult, 'id'>;
    }
>;

export type MovieImagesResult = Readonly<{
    backdrops: Readonly<MovieImageItem[]>;
    id: number;
    logos: Readonly<MovieImageItem[]>;
    posters: Readonly<MovieImageItem[]>;
}>;
export type MovieAddRatingResult = Readonly<{
    success: boolean;
    statusMessage: string;
}>;