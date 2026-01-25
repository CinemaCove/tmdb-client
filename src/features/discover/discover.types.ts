export type DiscoverMoviesSortBy =
    | 'original_title.asc'
    | 'original_title.desc'
    | 'popularity.asc'
    | 'popularity.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'title.asc'
    | 'title.desc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
export type DiscoverTVShowsSortBy =
    | 'first_air_date.asc'
    | 'first_air_date.desc'
    | 'name.asc'
    | ' name.desc'
    | 'original_name.asc'
    | 'original_name.desc'
    | 'popularity.asc'
    | 'popularity.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
export type DiscoverMovieItem = Readonly<{
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
export type DiscoverTVShowItem = Readonly<{
    backdropPath: string;
    firstAirDate: string;
    genreIds: Readonly<number[]>;
    id: number;
    name: string;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
}>;
