import { GenderType, MediaType } from '../../shared';

export type CreditDetailsSeasonItem = Readonly<{
    id: number;
    airDate: string;
    episodeCount: number;
    name: string;
    overview: string;
    posterPath: string;
    seasonNumber: number;
    showId: number;
}>;
export type CreditDetailsMedia = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    name: string;
    originalLanguage: string;
    originalName: string;
    overview: string;
    posterPath: string;
    mediaType: MediaType;
    genreIds: Readonly<number[]>;
    popularity: number;
    firstAirDate: string;
    voteAverage: number;
    voteCount: number;
    originCountry: Readonly<string[]>;
    character: string;
    episodes: Readonly<unknown[]>;
    seasons: Readonly<CreditDetailsSeasonItem[]>;
}>;
export type CreditDetailsPerson = Readonly<{
    adult: boolean;
    id: number;
    name: string;
    originalName: string;
    mediaType: MediaType;
    popularity: number;
    gender: GenderType;
    knownForDepartment: string;
    profilePath: string;
}>;
export type CreditDetailsResult = Readonly<{
    creditType: string;
    department: string;
    job: string;
    media: CreditDetailsMedia;
    mediaType: MediaType;
    id: string;
    person: CreditDetailsPerson;
}>;
