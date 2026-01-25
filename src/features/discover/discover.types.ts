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
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;
export type DiscoverTVShowItem = Readonly<{
    backdrop_path: string;
    first_air_date: string;
    genre_ids: Readonly<number[]>;
    id: number;
    name: string;
    origin_country: Readonly<string[]>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}>;
