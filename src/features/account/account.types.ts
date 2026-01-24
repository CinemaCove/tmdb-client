export type AccountGravatar = Readonly<{
    hash: string;
}>;
export type AccountTmdb = Readonly<{
    avatar_path: string;
}>;
export type AccountAvatar = Readonly<{
    gravatar: AccountGravatar;
    tmdb: AccountTmdb;
}>;
export type AccountDetailsResult = Readonly<{
    avatar: AccountAvatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}>;
export type AccountResult = Readonly<{
    success: boolean;
    status_code: number;
    status_message: string;
}>;
export type AccountFavoriteMovieItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
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

export type AccountFavoriteTVShowItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_country: string[];
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
}>;
export type AccountCustomListItem = Readonly<{
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path: string;
}>;
export type AccountRatedMovieItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
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
    rating: number;
}>;
export type AccountRatedTVShowItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    rating: number;
}>;
export type AccountRatedTVEpisodeItem = Readonly<{
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    rating: number;
}>;
export type AccountWatchlistMovieItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
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
export type AccountWatchlistTVShowItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
}>;
