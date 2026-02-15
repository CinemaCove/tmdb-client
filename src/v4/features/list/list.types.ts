import { MediaType } from '../../shared';

export type ListItemStatusResult = Readonly<{
    mediaType: MediaType;
    success: boolean;
    statusMessage: string;
    id: number;
    mediaId: number;
    statusCode: number;
}>;

export type ListClearResult = Readonly<{
    itemsDeleted: number;
    statusMessage: string;
    id: number;
    statusCode: number;
    success: boolean;
}>;
export type ListCreateResult = Readonly<{
    statusMessage: string;
    id: number;
    success: boolean;
    statusCode: number;
}>;
export type ListDeleteResult = Readonly<{
    statusMessage: string;
    success: boolean;
    statusCode: number;
}>;

export type ListDetailsItem = Readonly<{
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
export type ListDetailsCreatedBy = Readonly<{
    avatarPath: string;
    gravatarPath: string;
    id: string;
    name: string;
    username: string;
}>;
export type ListDetailsResult = Readonly<{
    averageRating: number;
    backdropPath: string;
    results: Readonly<ListDetailsItem[]>;
    comments: unknown;
    createdBy: ListDetailsCreatedBy;
    description: string;
    id: number;
    iso3166_1: string;
    iso639_1: string;
    itemCount: number;
    name: string;
    objectIds: unknown;
    page: number;
    posterPath: string;
    public: boolean;
    revenue: number;
    runtime: number;
    sortBy: string;
    totalPages: number;
    totalResults: number;
}>;
export type ListRemoveMovieResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
export type ListUpdateResult = Readonly<{
    statusMessage: string;
    success: boolean;
    statusCode: number;
}>;
export type ListAddItemsItem = Readonly<{
    mediaType: MediaType;
    mediaId: number;
    success: boolean;
}>;
export type ListItemsResult = Readonly<{
    statusMessage: string;
    results: Readonly<ListAddItemsItem[]>;
    success: boolean;
    statusCode: number;
}>;
