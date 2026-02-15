import { MediaType } from '../../shared';

export type TrendingTimeWindow = 'day' | 'week';

// Trending Movies
export type TrendingMoviesResultItem = Readonly<{
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

// Trending TV Shows
export type TrendingTvShowsResultItem = Readonly<{
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

// Trending People
export type TrendingPeopleResultItem = Readonly<{
    id: number;
    name: string;
    popularity: number;
    profilePath: string;
    adult: boolean;
    knownForDepartment: string;
    knownFor?: Readonly<TrendingPersonKnownForItem[]>; // optional - mixed movie/tv results
}>;

export type TrendingPersonKnownForItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    mediaType: MediaType;
    originalLanguage: string;
    originalTitle?: string; // for movies
    originalName?: string; // for tv
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate?: string; // for movies
    firstAirDate?: string; // for tv
    title?: string; // for movies
    name?: string; // for tv
    video?: boolean; // for movies
    voteAverage: number;
    voteCount: number;
}>;

// Trending All - mixed results
export type TrendingAllResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    id: number;
    mediaType: MediaType;
    originalLanguage: string;
    overview: string;
    popularity: number;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
    // Movie-specific
    genreIds?: Readonly<number[]>;
    originalTitle?: string;
    releaseDate?: string;
    title?: string;
    video?: boolean;
    // TV-specific
    originCountry?: Readonly<string[]>;
    originalName?: string;
    firstAirDate?: string;
    name?: string;
    // Person-specific
    profilePath?: string;
    knownForDepartment?: string;
    knownFor?: Readonly<TrendingPersonKnownForItem[]>;
}>;
