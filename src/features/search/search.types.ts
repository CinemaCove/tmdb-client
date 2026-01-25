import { GenderType, MediaType } from '../../shared';

export type SearchCollectionResult = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    name: string;
    originalLanguage: string;
    originalName: string;
    overview: string;
    posterPath: string;
}>;
export type SearchCompaniesResult = Readonly<{
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;
export type SearchKeywordsResult = Readonly<{
    id: number;
    name: string;
}>;
export type SearchMoviesResult = Readonly<{
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
export type SearchMultiResult = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    title: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    mediaType: MediaType;
    genreIds: Readonly<number[]>;
    popularity: number;
    releaseDate: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type SearchPeopleKnownForItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    title: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    mediaType: MediaType;
    genreIds: Readonly<number[]>;
    popularity: number;
    releaseDate: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type SearchPeopleResult = Readonly<{
    adult: boolean;
    gender: GenderType;
    id: number;
    knownForDepartment: Readonly<string[]>;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    knownFor: Readonly<SearchPeopleKnownForItem[]>;
}>;
export type SearchTvShowsResult = Readonly<{
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
