export type TvSeasonWatchProviderCountry =
    | 'AD'
    | 'AE'
    | 'AG'
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
    | 'BZ'
    | 'CA'
    | 'CH'
    | 'CI'
    | 'CL'
    | 'CM'
    | 'CO'
    | 'CR'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DO'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'GG'
    | 'GQ'
    | 'GT'
    | 'GY'
    | 'HK'
    | 'HN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IN'
    | 'IQ'
    | 'IT'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'LB'
    | 'LC'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MG'
    | 'MK'
    | 'ML'
    | 'MT'
    | 'MU'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NE'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PT'
    | 'PY'
    | 'QA'
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
    | 'TC'
    | 'TD'
    | 'TH'
    | 'TR'
    | 'TT'
    | 'TW'
    | 'US'
    | 'UY'
    | 'VE'
    | 'ZA'
    | 'ZM'
    | 'ZW';

export type TvSeasonWatchProviderFlatrate = Readonly<{
    logoPath: string;
    providerId: number;
    providerName: string;
    displayPriority: number;
}>;

export type TvSeasonWatchProviderResultItem = Readonly<{
    link: string;
    flatrate: Readonly<TvSeasonWatchProviderFlatrate[]>;
}>;

export type TvSeasonWatchProvidersResult = Readonly<{
    id: number;
    results: {
        [key in TvSeasonWatchProviderCountry]: TvSeasonWatchProviderResultItem;
    };
}>;

export type TvSeasonNetworkItem = Readonly<{
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;

export type TvSeasonAppendToResponse =
    | 'images'
    | 'credits'
    | 'external_ids'
    | 'videos'
    | 'aggregate_credits'
    | 'translations';

export type TvSeasonDetailsWithAppend = Readonly<
    TvSeasonDetails & {
        images?: Omit<TvSeasonImagesResult, 'id'>;
        credits?: Omit<TvSeasonCreditsResult, 'id'>;
        external_ids?: Omit<TvSeasonExternalIdsResult, 'id'>;
        videos?: Omit<TvSeasonVideosResult, 'id'>;
        aggregate_credits?: Omit<TvSeasonAggregateCreditsResult, 'id'>;
        translations?: Omit<TvSeasonTranslationsResult, 'id'>;
    }
>;
export type TvSeasonCrewItem = Readonly<{
    department: string;
    job: string;
    creditId: string;
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
}>;
export type TvSeasonGuestStarItem = Readonly<{
    character: string;
    creditId: string;
    order: number;
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
}>;
export type TvSeasonEpisode = Readonly<{
    airDate: string;
    episodeNumber: number;
    episodeType: string;
    id: number;
    name: string;
    overview: string;
    productionCode: string;
    runtime: number;
    seasonNumber: number;
    showId: number;
    stillPath: string;
    voteAverage: number;
    voteCount: number;
    crew: Readonly<TvSeasonCrewItem[]>;
    guestStars: Readonly<TvSeasonGuestStarItem[]>;
}>;
export type TvSeasonDetails = {
    _id: string;
    airDate: string;
    episodes: Readonly<TvSeasonEpisode[]>;
    name: string;
    networks: Readonly<TvSeasonNetworkItem[]>;
    overview: string;
    id: number;
    posterPath: string;
    seasonNumber: number;
    voteAverage: number;
};

export type TvSeasonRoleItem = Readonly<{
    creditId: string;
    character: string;
    episodeCount: number;
}>;

export type TvSeasonJobItem = Readonly<{
    creditId: string;
    job: string;
    episodeCount: number;
}>;

export type TvSeasonCastItem = Readonly<{
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

export type TvSeasonAggregateCastItem = Readonly<{
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    roles: Readonly<TvSeasonRoleItem[]>;
    totalEpisodeCount: number;
    order: number;
}>;

export type TvSeasonImageItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso6391: string;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type TvSeasonRating = Readonly<{
    value: number;
}>;
export type TvSeasonAccountStateItem = Readonly<{
    id: number;
    episodeNumber: number;
    rated: TvSeasonRating;
}>;
export type TvSeasonAccountStatesResult = Readonly<{
    id: number;
    results: Readonly<TvSeasonAccountStateItem[]>;
}>;
export type TvSeasonAggregateCrewItem = Readonly<{
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: unknown;
    jobs: Readonly<TvSeasonJobItem[]>;
    department: string;
    totalEpisodeCount: number;
}>;
export type TvSeasonAggregateCreditsResult = Readonly<{
    cast: Readonly<TvSeasonAggregateCastItem[]>;
    crew: Readonly<TvSeasonAggregateCrewItem[]>;
    id: number;
}>;
export type TvSeasonChangeValue = Readonly<{
    episodeId: number;
    episodeNumber: number;
}>;
export type TvSeasonChangeItemsListItem = Readonly<{
    id: string;
    action: string;
    time: string;
    value: TvSeasonChangeValue;
}>;
export type TvSeasonChangeItem = Readonly<{
    key: string;
    items: Readonly<TvSeasonChangeItemsListItem[]>;
}>;
export type TvSeasonChangesResult = Readonly<{
    changes: Readonly<TvSeasonChangeItem[]>;
}>;
export type TvSeasonCreditsResult = Readonly<{
    cast: Readonly<TvSeasonCastItem[]>;
    crew: Readonly<TvSeasonCrewItem[]>;
    id: number;
}>;
export type TvSeasonExternalIdsResult = Readonly<{
    id: number;
    freebaseMid: string;
    freebaseId: string;
    tvdbId: number;
    tvrageId: unknown;
    wikidataId: string;
}>;
export type TvSeasonTranslationData = Readonly<{
    name: string;
    overview: string;
}>;
export type TvSeasonTranslationItem = Readonly<{
    iso31661: string;
    iso6391: string;
    name: string;
    englishName: string;
    data: TvSeasonTranslationData;
}>;
export type TvSeasonTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<TvSeasonTranslationItem[]>;
}>;
export type TvSeasonVideoItem = Readonly<{
    iso6391: string;
    iso31661: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
    id: string;
}>;
export type TvSeasonVideosResult = Readonly<{
    id: number;
    results: Readonly<TvSeasonVideoItem[]>;
}>;
