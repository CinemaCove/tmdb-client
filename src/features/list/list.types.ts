import { MediaType } from '../../shared';

export type ListAddMovieResult = Readonly<{
    status_code: number;
    status_message: string;
}>;
export type ListItemStatusResult = Readonly<{
    id: number;
    item_present: boolean;
}>;
export type ListClearResult = Readonly<{
    status_code: number;
    status_message: string;
}>;
export type ListCreateResult = Readonly<{
    status_message: string;
    success: boolean;
    status_code: number;
    list_id: number;
}>;
export type ListDeleteResult = Readonly<{
    status_code: number;
    status_message: string;
}>;
export type ListDetailsItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    media_type: MediaType;
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
export type ListDetailsResult = Readonly<{
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    items: Readonly<ListDetailsItem[]>;
    item_count: number;
    iso_639_1: string;
    name: string;
    poster_path: string;
}>;
export type ListRemoveMovieResult = Readonly<{
    status_code: number;
    status_message: string;
}>;
