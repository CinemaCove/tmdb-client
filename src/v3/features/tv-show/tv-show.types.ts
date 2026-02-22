import { PaginatedResult } from '../../shared';

export type TvShowWatchProviderCountry =
    | 'AE'
    | 'AR'
    | 'AT'
    | 'AU'
    | 'BA'
    | 'BB'
    | 'BE'
    | 'BG'
    | 'BO'
    | 'BR'
    | 'BS'
    | 'CA'
    | 'CH'
    | 'CI'
    | 'CL'
    | 'CO'
    | 'CR'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EG'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'GF'
    | 'GH'
    | 'GQ'
    | 'GT'
    | 'HK'
    | 'HN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IQ'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'KE'
    | 'KR'
    | 'LB'
    | 'LT'
    | 'LY'
    | 'MD'
    | 'MK'
    | 'MU'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NE'
    | 'NG'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PA'
    | 'PE'
    | 'PH'
    | 'PL'
    | 'PS'
    | 'PT'
    | 'PY'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'SA'
    | 'SC'
    | 'SE'
    | 'SG'
    | 'SI'
    | 'SK'
    | 'SN'
    | 'SV'
    | 'TH'
    | 'TR'
    | 'TT'
    | 'TW'
    | 'TZ'
    | 'UG'
    | 'US'
    | 'UY'
    | 'VE'
    | 'ZA'
    | 'ZM';

export type TvShowWatchProviderFlatrate = Readonly<{
    logoPath: string;
    providerId: number;
    providerName: string;
    displayPriority: number;
}>;

export type TvShowWatchProviderResultItem = Readonly<{
    link: string;
    flatrate: Readonly<TvShowWatchProviderFlatrate[]>;
}>;

export type TvShowWatchProvidersResult = Readonly<{
    id: number;
    results: {
        [key in TvShowWatchProviderCountry]: TvShowWatchProviderResultItem;
    };
}>;

export type TvShowCreatedByItem = Readonly<{
    id: number;
    creditId: string;
    name: string;
    gender: number;
    profilePath: string;
}>;

export type TvShowGenreItem = Readonly<{
    id: number;
    name: string;
}>;

export type TvShowLastEpisodeToAir = Readonly<{
    id: number;
    name: string;
    overview: string;
    voteAverage: number;
    voteCount: number;
    airDate: string;
    episodeNumber: number;
    productionCode: string;
    runtime: number;
    seasonNumber: number;
    showId: number;
    stillPath: string;
}>;

export type TvShowNetworkItem = Readonly<{
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;

export type TvShowProductionCompanyItem = Readonly<{
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;

export type TvShowProductionCountryItem = Readonly<{
    iso3166_1: string;
    name: string;
}>;

export type TvShowSeasonItem = Readonly<{
    airDate: string;
    episodeCount: number;
    id: number;
    name: string;
    overview: string;
    posterPath: string;
    seasonNumber: number;
    voteAverage: number;
}>;

export type TvShowSpokenLanguageItem = Readonly<{
    englishName: string;
    iso639_1: string;
    name: string;
}>;

export type TvShowDetails = Readonly<{
    adult: boolean;
    backdropPath: string;
    createdBy: Readonly<TvShowCreatedByItem[]>;
    episodeRunTime: Readonly<number[]>;
    firstAirDate: string;
    genres: Readonly<TvShowGenreItem[]>;
    homepage: string;
    id: number;
    inProduction: boolean;
    languages: Readonly<string[]>;
    lastAirDate: string;
    lastEpisodeToAir: TvShowLastEpisodeToAir;
    name: string;
    nextEpisodeToAir: unknown;
    networks: Readonly<TvShowNetworkItem[]>;
    numberOfEpisodes: number;
    numberOfSeasons: number;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: Readonly<TvShowProductionCompanyItem[]>;
    productionCountries: Readonly<TvShowProductionCountryItem[]>;
    seasons: Readonly<TvShowSeasonItem[]>;
    spokenLanguages: Readonly<TvShowSpokenLanguageItem[]>;
    status: string;
    tagline: string;
    type: string;
    voteAverage: number;
    voteCount: number;
}>;

export type TvShowAppendToResponse =
    | 'content_ratings'
    | 'images'
    | 'videos'
    | 'credits'
    | 'recommendations'
    | 'reviews'
    | 'changes'
    | 'similar'
    | 'alternative_titles'
    | 'external_ids'
    | 'translations'
    | 'watch/providers'
    | 'aggregate_credits'
    | 'episode_groups'
    | 'screened_theatrically'
    | 'keywords';

export type TvShowVideosResult = Readonly<{
    id: number;
    results: Readonly<TvShowVideoItem[]>;
}>;
export type TvShowDetailsWithAppend = Readonly<
    TvShowDetails & {
        contentRatings?: Omit<TvShowContentRatingsResult, 'id'>;
        images?: Omit<TvShowImagesResult, 'id'>;
        videos?: Omit<TvShowVideosResult, 'id'>;
        credits?: Omit<TvShowCreditsResult, 'id'>;
        recommendations?: PaginatedResult<TvShowRecommendationItem>;
        reviews?: PaginatedResult<TvShowReviewItem>;
        changes?: Omit<TvShowChangesResult, 'id'>;
        similar?: PaginatedResult<TvShowSimilarItem>;
        alternativeTitles?: Omit<TvShowAlternativeTitlesResult, 'id'>;
        externalIds?: Omit<TvShowExternalIdsResult, 'id'>;
        translations?: Omit<TvShowTranslationsResult, 'id'>;
        'watch/providers'?: Omit<TvShowWatchProvidersResult, 'id'>;
        aggregateCredits?: Omit<TvShowAggregateCreditsResult, 'id'>;
        episodeGroups?: Omit<TvShowEpisodeGroupsResult, 'id'>;
        screenedTheatrically?: Omit<TvShowScreenedTheatricallyResult, 'id'>;
        keywords?: Omit<TvShowKeywordsResult, 'id'>;
    }
>;

export type TvShowRating = Readonly<{
    value: number;
}>;

export type TvShowLatestResult = TvShowDetails;
export type TvShowAccountStatesResult = Readonly<{
    id: number;
    favorite: boolean;
    rated: TvShowRating;
    watchlist: boolean;
}>;
export type TvShowRoleItem = Readonly<{
    creditId: string;
    character: string;
    episodeCount: number;
}>;
export type TvShowAggregateCastItem = Readonly<{
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    roles: Readonly<TvShowRoleItem[]>;
    totalEpisodeCount: number;
    order: number;
}>;
export type TvShowJobItem = Readonly<{
    creditId: string;
    job: string;
    episodeCount: number;
}>;
export type TvShowAggregateCrewItem = Readonly<{
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    jobs: Readonly<TvShowJobItem[]>;
    department: string;
    totalEpisodeCount: number;
}>;
export type TvShowAlternativeTitleResultItem = Readonly<{
    iso3166_1: string;
    title: string;
    type: string;
}>;
export type TvShowAlternativeTitlesResult = Readonly<{
    id: number;
    results: Readonly<TvShowAlternativeTitleResultItem[]>;
}>;
export type TvShowChangePoster = Readonly<{
    filePath: string;
    iso639_1: string;
}>;
export type TvShowChangeValue = Readonly<{
    poster: TvShowChangePoster;
}>;
export type TvShowChangeItemsListItem = Readonly<{
    id: string;
    action: string;
    time: string;
    iso639_1: string;
    iso3166_1: string;
    value: TvShowChangeValue;
    originalValue: TvShowChangeValue;
}>;
export type TvShowChangeItem = Readonly<{
    key: string;
    items: Readonly<TvShowChangeItemsListItem[]>;
}>;
export type TvShowChangesResult = Readonly<{
    changes: Readonly<TvShowChangeItem[]>;
}>;
export type TvShowContentRatingResultItem = Readonly<{
    descriptors: Readonly<unknown[]>;
    iso3166_1: string;
    rating: string;
}>;
export type TvShowContentRatingsResult = Readonly<{
    results: Readonly<TvShowContentRatingResultItem[]>;
    id: number;
}>;
export type TvShowCastItem = Readonly<{
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    character: string;
    creditId: string;
    order: number;
}>;
export type TvShowCreditItem = Readonly<{
    adult: boolean;
    gender: number;
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
export type TvShowCreditsResult = Readonly<{
    cast: Readonly<TvShowCastItem[]>;
    crew: Readonly<TvShowCreditItem[]>;
    id: number;
}>;
export type TvShowEpisodeGroupsResultItem = Readonly<{
    description: string;
    episodeCount: number;
    groupCount: number;
    id: string;
    name: string;
    network: TvShowNetworkItem;
    type: number;
}>;
export type TvShowEpisodeGroupsResult = Readonly<{
    results: Readonly<TvShowEpisodeGroupsResultItem[]>;
    id: number;
}>;
export type TvShowExternalIdsResult = Readonly<{
    id: number;
    imdbId: string;
    freebaseMid: string;
    freebaseId: string;
    tvdbId: number;
    tvrageId: number;
    wikidataId: string;
    facebookId: string;
    instagramId: string;
    twitterId: string;
}>;
export type TvShowImageItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso639_1: string;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type TvShowImagesResult = Readonly<{
    backdrops: Readonly<TvShowImageItem[]>;
    id: number;
    logos: Readonly<TvShowImageItem[]>;
    posters: Readonly<TvShowImageItem[]>;
}>;
export type TvShowKeywordResultItem = Readonly<{
    name: string;
    id: number;
}>;
export type TvShowKeywordsResult = Readonly<{
    id: number;
    results: Readonly<TvShowKeywordResultItem[]>;
}>;
export type TvShowListResultItem = Readonly<{
    description: string;
    favoriteCount: number;
    id: number;
    itemCount: number;
    iso639_1: string;
    iso3166_1: string;
    name: string;
    posterPath: unknown;
}>;
export type TvShowRecommendationItem = Readonly<
    {
        adult: boolean;
        backdropPath: string;
        id: number;
        name: string;
        originalLanguage: string;
        originalName: string;
        overview: string;
        posterPath: string;
        mediaType: string;
        genreIds: Readonly<number[]>;
        popularity: number;
        firstAirDate: string;
        voteAverage: number;
        voteCount: number;
        originCountry: Readonly<string[]>;
    }[]
>;
export type TvShowAggregateCreditsResult = Readonly<{
    cast: Readonly<TvShowAggregateCastItem[]>;
    crew: Readonly<TvShowAggregateCrewItem[]>;
    id: number;
}>;
export type TvShowReviewAuthorDetails = Readonly<{
    name: string;
    username: string;
    avatarPath: string;
    rating: number;
}>;
export type TvShowReviewItem = Readonly<{
    author: string;
    authorDetails: Readonly<TvShowReviewAuthorDetails>;
    content: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    url: string;
}>;
export type TvShowScreenTheatricallyResultItem = Readonly<{
    id: number;
    episodeNumber: number;
    seasonNumber: number;
}>;
export type TvShowScreenedTheatricallyResult = Readonly<{
    id: number;
    results: Readonly<TvShowScreenTheatricallyResultItem[]>;
}>;
export type TvShowSimilarItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    firstAirDate: string;
    name: string;
    voteAverage: number;
    voteCount: number;
}>;
export type TvShowTranslationData = Readonly<{
    name: string;
    overview: string;
    homepage: string;
    tagline: string;
}>;
export type TvShowTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
    data: TvShowTranslationData;
}>;
export type TvShowTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<TvShowTranslationItem[]>;
}>;
export type TvShowVideoItem = Readonly<{
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
export type TvShowDeleteRatingResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
