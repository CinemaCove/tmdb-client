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
    backdropPath: string;
    id: number;
    title: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    mediaType: MediaType;
    genreIds: Readonly<number[]>;
    popularity: number;
    releaseDate: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type FindExternalIdResult = Readonly<{
    movieResults: Readonly<FindMovieResultItem[]>;
    personResults: Readonly<unknown[]>;
    tvResults: Readonly<unknown[]>;
    tvEpisodeResults: Readonly<unknown[]>;
    tvSeasonResults: Readonly<unknown[]>;
}>;
