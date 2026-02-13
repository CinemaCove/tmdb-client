import { MediaType } from '../../shared';

export type ListAddMovieResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
export type ListItemStatusResult = Readonly<{
    id: number;
    itemPresent: boolean;
}>;
export type ListClearResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
export type ListCreateResult = Readonly<{
    statusMessage: string;
    success: boolean;
    statusCode: number;
    listId: number;
}>;
export type ListDeleteResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
export type ListDetailsItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    mediaType: MediaType;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type ListDetailsResult = Readonly<{
    createdBy: string;
    description: string;
    favoriteCount: number;
    id: string;
    items: Readonly<ListDetailsItem[]>;
    itemCount: number;
    iso639_1: string;
    name: string;
    posterPath: string;
}>;
export type ListRemoveMovieResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
