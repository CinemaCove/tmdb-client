import { PaginatedResult } from '../../shared';

export type MovieNowPlayingDates = Readonly<{
    maximum: string;
    minimum: string;
}>;
export type MovieListItem = Readonly<{
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
export type MovieListNowPlayingPaginatedResult = Readonly<
    PaginatedResult<MovieListItem> & {
        dates: MovieNowPlayingDates;
    }
>;
