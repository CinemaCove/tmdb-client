import { GenderType, MediaType } from '../../shared';

export type CreditMediaSeasonItem = Readonly<{
    id: number;
    airDate: string;
    episodeCount: number;
    name: string;
    overview: string;
    posterPath: string;
    seasonNumber: number;
    showId: number;
}>;

export type CreditMediaBase = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    overview: string;
    posterPath: string;
    originalLanguage: string;
    genreIds: Readonly<number[]>;
    popularity: number;
    voteAverage: number;
    voteCount: number;
}>;

export type CreditMediaMovie = CreditMediaBase & {
    mediaType: MediaType.Movie;
    title: string;
    originalTitle: string;
    releaseDate: string;
    video: boolean;
    character?: string;
};

export type CreditMediaTvEpisodeItem = Readonly<{
    id: number;
    name: string;
    overview: string;
    mediaType: MediaType.TvEpisode;
    voteAverage: number;
    voteCount: number;
    airDate: string;
    episodeNumber: number;
    episodeType: string;
    productionCode: string;
    runtime: number;
    seasonNumber: number;
    showId: number;
    stillPath: string | null;
}>;

export type CreditMediaTvShow = CreditMediaBase & Readonly<{
    mediaType: 'tv';
    name: string;
    originalName: string;
    firstAirDate: string;
    originCountry: Readonly<string[]>;
    character?: string;
    episodes?: Readonly<CreditMediaTvEpisodeItem[]>;
    seasons?: Readonly<CreditMediaSeasonItem[]>;
}>;

export type CreditDetailsMedia = CreditMediaMovie | CreditMediaTvShow;

export type CreditDetailsPerson = Readonly<{
    adult: boolean;
    id: number;
    name: string;
    originalName: string;
    mediaType: MediaType.Person;
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
    mediaType: MediaType.Movie | MediaType.TvShow;
    id: string;
    person: CreditDetailsPerson;
}>;
