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
export type DiscoverMovieItem = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly genre_ids: number[];
    readonly id: number;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly release_date: string;
    readonly title: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};
export type DiscoverTVShowItem = {
    readonly backdrop_path: string;
    readonly first_air_date: string;
    readonly genre_ids: number[];
    readonly id: number;
    readonly name: string;
    readonly origin_country: string[];
    readonly original_language: string;
    readonly original_name: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly vote_average: number;
    readonly vote_count: number;
};
