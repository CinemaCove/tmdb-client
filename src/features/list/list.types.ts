export type ListAddMovieResult = {
    status_code: number;
    status_message: string;
};
export type ListItemStatusResult = {
    id: number;
    item_present: boolean;
};
export type ListClearResult = {
    status_code: number;
    status_message: string;
};
export type ListCreateResult = {
    readonly status_message: string;
    readonly success: boolean;
    readonly status_code: number;
    readonly list_id: number;
};
export type ListDeleteResult = {
    readonly status_code: number;
    readonly status_message: string;
};
type ListDetailsItem = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly genre_ids: number[];
    readonly id: number;
    readonly media_type: string;
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
export type ListDetailsResult = {
    readonly created_by: string;
    readonly description: string;
    readonly favorite_count: number;
    readonly id: string;
    readonly items: ListDetailsItem[];
    readonly item_count: number;
    readonly iso_639_1: string;
    readonly name: string;
    readonly poster_path: string;
};
export type ListRemoveMovieResult = {
    readonly status_code: number;
    readonly status_message: string;
};
