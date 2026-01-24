export type FindExternalSource =
    | 'imdb_id'
    | 'facebook_id'
    | 'instagram_id'
    | 'tvdb_id'
    | 'tiktok_id'
    | 'twitter_id'
    | 'wikidata_id'
    | 'youtube_id';
type FindMovieResultItem = {
    adult: boolean;
    backdrop_pat: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export type FindExternalIdResult = {
    movie_results: FindMovieResultItem[];
    person_results: any[];
    tv_results: any[];
    tv_episode_results: any[];
    tv_season_results: any[];
};