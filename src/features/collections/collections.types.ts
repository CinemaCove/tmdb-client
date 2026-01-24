type CollectionsImageItem = {
    readonly aspect_ratio: number;
    readonly height: number;
    readonly iso_3166_1: string;
    readonly iso_639_1: string;
    readonly file_path: string;
    readonly vote_average: number;
    readonly vote_count: number;
    readonly width: number;
};
type CollectionsTranslationData = {
    readonly title: string;
    readonly overview: string;
    readonly homepage: string;
};
type CollectionsTranslationItem = {
    readonly iso_3166_1: string;
    readonly iso_639_1: string;
    readonly name: string;
    readonly english_name: string;
    readonly data: CollectionsTranslationData;
};
export type CollectionsTranslationsResult = {
    readonly id: number;
    readonly translations: CollectionsTranslationItem[];
};
export type CollectionsImagesResult = {
    readonly id: number;
    readonly backdrops: CollectionsImageItem[];
    readonly posters: CollectionsImageItem[];
};
type CollectionsDetailsPart = {
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
export type CollectionsDetailsResult = {
    readonly id: number;
    readonly name: string;
    readonly original_language: string;
    readonly original_name: string;
    readonly overview: string;
    readonly poster_path: string;
    readonly backdrop_path: string;
    readonly parts: CollectionsDetailsPart[];
};
