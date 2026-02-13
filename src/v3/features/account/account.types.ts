export type AccountGravatar = Readonly<{
    hash: string;
}>;
export type AccountTmdb = Readonly<{
    avatarPath: string;
}>;
export type AccountAvatar = Readonly<{
    gravatar: AccountGravatar;
    tmdb: AccountTmdb;
}>;
export type AccountDetailsResult = Readonly<{
    avatar: AccountAvatar;
    id: number;
    iso639_1: string;
    iso3166_1: string;
    name: string;
    includeAdult: boolean;
    username: string;
}>;
export type AccountResult = Readonly<{
    success: boolean;
    statusCode: number;
    statusMessage: string;
}>;
export type AccountFavoriteMovieResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
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

export type AccountFavoriteTvShowResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    originalCountry: Readonly<string[]>;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    firstAirDate: string;
    name: string;
    voteAverage: number;
    voteCount: number;
}>;
export type AccountCustomListResultItem = Readonly<{
    description: string;
    favoriteCount: number;
    id: number;
    itemCount: number;
    iso639_1: string;
    listType: string;
    name: string;
    posterPath: string;
}>;
export type AccountRatedMovieResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
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
    rating: number;
}>;
export type AccountRatedTvShowResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    firstAirDate: string;
    name: string;
    voteAverage: number;
    voteCount: number;
    rating: number;
}>;
export type AccountRatedTvEpisodeResultItem = Readonly<{
    airDate: string;
    episodeNumber: number;
    id: number;
    name: string;
    overview: string;
    productionCode: string;
    runtime: number;
    seasonNumber: number;
    showId: number;
    stillPath: string;
    voteAverage: number;
    voteCount: number;
    rating: number;
}>;
export type AccountWatchlistMovieResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
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
export type AccountWatchlistTvShowResultItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    firstAirDate: string;
    name: string;
    voteAverage: number;
    voteCount: number;
}>;
