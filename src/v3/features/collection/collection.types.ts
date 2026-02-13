import { MediaType } from '../../shared';

export type CollectionImageItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso3166_1: string;
    iso639_1: string;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type CollectionTranslationData = Readonly<{
    title: string;
    overview: string;
    homepage: string;
}>;
export type CollectionTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
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
    backdropPath: string;
    id: number;
    name: string;
    originalName: string;
    overview: string;
    posterPath: string;
    mediaType: MediaType;
    originalLanguage: string;
    genreIds: Readonly<number[]>;
    popularity: number;
    releaseDate: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type CollectionDetailsResult = Readonly<{
    id: number;
    name: string;
    originalLanguage: string;
    originalName: string;
    overview: string;
    posterPath: string;
    backdropPath: string;
    parts: CollectionDetailsPart[];
}>;
