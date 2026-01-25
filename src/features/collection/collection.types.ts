import { MediaType } from '../../shared';

export type CollectionImageItem = Readonly<{
    aspect_ratio: number;
    height: number;
    iso_3166_1: string;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}>;
export type CollectionTranslationData = Readonly<{
    title: string;
    overview: string;
    homepage: string;
}>;
export type CollectionTranslationItem = Readonly<{
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: CollectionTranslationData;
}>;
export type CollectionTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<CollectionTranslationItem[]>;
}>;
export type CollectionImagesResult = Readonly<{
    id: number;
    backdrops: Readonly<CollectionImageItem[]>;
    posters: Readonly<CollectionImageItem[]>;
}>;
export type CollectionDetailsPart = Readonly<{
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: MediaType;
    original_language: string;
    genre_ids: Readonly<number[]>;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;
export type CollectionDetailsResult = Readonly<{
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    parts: CollectionDetailsPart[];
}>;
