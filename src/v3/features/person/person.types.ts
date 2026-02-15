import { GenderType } from '../../shared';

export type PersonAppendToResponse =
    | 'changes'
    | 'combined_credits'
    | 'external_ids'
    | 'images'
    | 'movie_credits'
    | 'tv_credits'
    | 'translations';
export type PersonDetail = {
    adult: boolean;
    alsoKnownAs: Readonly<string[]>;
    biography: string;
    birthday: string;
    deathday: string;
    gender: GenderType;
    homepage: string;
    id: number;
    imdbId: string;
    knownForDepartment: Readonly<string[]>;
    name: string;
    placeOfBirth: string;
    popularity: number;
    profilePath: string;
};
export type PersonCreditsCrewItem = Readonly<{
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
export type PersonCreditsCastItem = Readonly<{
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
export type PersonCombinedCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PersonCreditsCastItem[]>;
    crew: Readonly<PersonCreditsCrewItem[]>;
}>;
export type PersonExternalIdsResult = Readonly<{
    id: number;
    freebaseMid: string;
    freebaseId: string;
    imdbId: string;
    tvrageId: number;
    wikidataId: string;
    facebookId: string;
    instagramId: string;
    tiktokId: number;
    twitterId: string;
    youtubeId: unknown;
}>;
export type PersonImagesProfileItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso639_1: unknown;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type PersonImagesResult = Readonly<{
    id: number;
    profiles: PersonImagesProfileItem[];
}>;
export type PersonMovieCreditsCastItem = Readonly<{
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
    character: string;
    creditId: string;
    order: number;
}>;
export type PersonMovieCreditsCrewItem = Readonly<{
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
    creditId: string;
    department: string;
    job: string;
}>;
export type PersonMovieCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PersonMovieCreditsCastItem[]>;
    crew: Readonly<PersonMovieCreditsCrewItem[]>;
}>;
export type PersonTvCreditsCastItem = Readonly<{
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
    character: string;
    creditId: string;
    episodeCount: number;
}>;
export type PersonTvCreditsCrewItem = Readonly<{
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
    creditId: string;
    department: string;
    episodeCount: number;
    job: string;
}>;
export type PersonTvCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PersonTvCreditsCastItem[]>;
    crew: Readonly<PersonTvCreditsCrewItem[]>;
}>;
export type PersonTranslationDataItem = Readonly<{
    biography: string;
    name: string;
}>;
export type PersonTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
    data: Readonly<PersonTranslationDataItem[]>;
}>;
export type PersonTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<PersonTranslationItem[]>;
}>;
export type PersonDetailsWithAppends = Readonly<
    PersonDetail & {
        changes?: Omit<PersonChangesResult, 'id'>;
        combinedCredits?: Omit<PersonCombinedCreditsResult, 'id'>;
        externalIds?: Omit<PersonExternalIdsResult, 'id'>;
        images?: Omit<PersonImagesResult, 'id'>;
        movieCredits?: Omit<PersonMovieCreditsResult, 'id'>;
        tvCredits?: Omit<PersonTvCreditsResult, 'id'>;
        translations?: Omit<PersonTranslationsResult, 'id'>;
    }
>;
export type PersonChangesChangeItems = Readonly<{
    id: string;
    action: string;
    time: string;
    iso639_1: string;
    iso3166_1: string;
    value: string;
}>;
export type PersonChangesItem = Readonly<{
    key: string;
    items: Readonly<PersonChangesChangeItems[]>;
}>;
export type PersonChangesResult = Readonly<{
    changes: Readonly<PersonChangesItem[]>;
}>;
