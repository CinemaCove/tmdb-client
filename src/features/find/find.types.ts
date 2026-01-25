import { MediaType } from '../../shared';

export type FindExternalSource =
    | 'imdb_id'
    | 'facebook_id'
    | 'instagram_id'
    | 'tvdb_id'
    | 'tiktok_id'
    | 'twitter_id'
    | 'wikidata_id'
    | 'youtube_id';
export type FindMovieResultItem = Readonly<{
    adult: boolean;
    backdrop_pat: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: MediaType;
    genre_ids: Readonly<number[]>;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;
export type FindExternalIdResult = Readonly<{
    movie_results: Readonly<FindMovieResultItem[]>;
    person_results: Readonly<any[]>;
    tv_results: Readonly<any[]>;
    tv_episode_results: Readonly<any[]>;
    tv_season_results: Readonly<any[]>;
}>;