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
    readonly adult: boolean;
    readonly backdrop_pat: string;
    readonly id: number;
    readonly title: string;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly poster_path: string;
    readonly media_type: string;
    readonly genre_ids: number[];
    readonly popularity: number;
    readonly release_date: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};
export type FindExternalIdResult = {
    readonly movie_results: FindMovieResultItem[];
    readonly person_results: any[];
    readonly tv_results: any[];
    readonly tv_episode_results: any[];
    readonly tv_season_results: any[];
};