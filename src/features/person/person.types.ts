import { GenderType, MediaType } from '../../shared';

export type PeoplePopularKnownForItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    mediaType: MediaType;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type PersonPopularResultItem = {
    adult: boolean;
    gender: GenderType;
    id: number;
    knownFor: PeoplePopularKnownForItem[];
    knownForDepartment: Readonly<string[]>;
    name: string;
    popularity: number;
    profilePath: string;
};
export type PeopleAppendToResponse =
    | 'changes'
    | 'combined_credits'
    | 'external_ids'
    | 'images'
    | 'movie_credits'
    | 'tv_credits'
    | 'translations';
export type PeopleDetail = {
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
export type PeopleCreditsCrewItem = Readonly<{
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
export type PeopleCreditsCastItem = Readonly<{
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
export type PeopleCombinedCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleCreditsCastItem[]>;
    crew: Readonly<PeopleCreditsCrewItem[]>;
}>;
export type PeopleExternalIdsResult = Readonly<{
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
export type PeopleImagesProfileItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso639_1: unknown;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type PeopleImagesResult = Readonly<{
    id: number;
    profiles: PeopleImagesProfileItem[];
}>;
export type PeopleMovieCreditsCastItem = Readonly<{
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
export type PeopleMovieCreditsCrewItem = Readonly<{
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
export type PeopleMovieCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleMovieCreditsCastItem[]>;
    crew: Readonly<PeopleMovieCreditsCrewItem[]>;
}>;
export type PeopleTvCreditsCastItem = Readonly<{
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
export type PeopleTvCreditsCrewItem = Readonly<{
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
export type PeopleTvCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleTvCreditsCastItem[]>;
    crew: Readonly<PeopleTvCreditsCrewItem[]>;
}>;
export type PeopleTranslationDataItem = Readonly<{
    biography: string;
    name: string;
}>;
export type PeopleTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
    data: Readonly<PeopleTranslationDataItem[]>;
}>;
export type PeopleTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<PeopleTranslationItem[]>;
}>;
export type PeopleDetailsWithAppends = Readonly<
    PeopleDetail & {
        changes?: Omit<PeopleChangesResult, 'id'>;
        combinedCredits?: Omit<PeopleCombinedCreditsResult, 'id'>;
        externalIds?: Omit<PeopleExternalIdsResult, 'id'>;
        images?: Omit<PeopleImagesResult, 'id'>;
        movieCredits?: Omit<PeopleMovieCreditsResult, 'id'>;
        tvCredits?: Omit<PeopleTvCreditsResult, 'id'>;
        translations?: Omit<PeopleTranslationsResult, 'id'>;
    }
>;
export type PeopleChangesChangeItems = Readonly<{
    id: string;
    action: string;
    time: string;
    iso639_1: string;
    iso3166_1: string;
    value: string;
}>;
export type PeopleChangesItem = Readonly<{
    key: string;
    items: Readonly<PeopleChangesChangeItems[]>;
}>;
export type PeopleChangesResult = Readonly<{
    changes: Readonly<PeopleChangesItem[]>;
}>;
