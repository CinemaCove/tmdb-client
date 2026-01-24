type CollectionImageItem = {
    readonly aspect_ratio: number;
    readonly height: number;
    readonly iso_3166_1: string;
    readonly iso_639_1: string;
    readonly file_path: string;
    readonly vote_average: number;
    readonly vote_count: number;
    readonly width: number;
};
type CollectionTranslationData = {
    readonly title: string;
    readonly overview: string;
    readonly homepage: string;
};
type CollectionTranslationItem = {
    readonly iso_3166_1: string;
    readonly iso_639_1: string;
    readonly name: string;
    readonly english_name: string;
    readonly data: CollectionTranslationData;
};
export type CollectionTranslationsResult = {
    readonly id: number;
    readonly translations: CollectionTranslationItem[];
};
export type CollectionImagesResult = {
    readonly id: number;
    readonly backdrops: CollectionImageItem[];
    readonly posters: CollectionImageItem[];
};
type CollectionDetailsPart = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly id: number;
    readonly name: string;
    readonly original_name: string;
    readonly overview: string;
    readonly poster_path: string;
    readonly media_type: string;
    readonly original_language: string;
    readonly genre_ids: number[];
    readonly popularity: number;
    readonly release_date: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};
export type CollectionDetailsResult = {
    readonly id: number;
    readonly name: string;
    readonly original_language: string;
    readonly original_name: string;
    readonly overview: string;
    readonly poster_path: string;
    readonly backdrop_path: string;
    readonly parts: CollectionDetailsPart[];
};
