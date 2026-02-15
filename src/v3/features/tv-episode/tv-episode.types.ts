export type TvEpisodeImageItem = Readonly<{
    aspectRatio: number;
    height: number;
    iso639_1: unknown;
    filePath: string;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
export type TvEpisodeImagesResult = Readonly<{
    id: number;
    stills: Readonly<TvEpisodeImageItem[]>;
}>;
export type TvEpisodeTranslationData = Readonly<{
    name: string;
    overview: string;
}>;
export type TvEpisodeTranslationItem = Readonly<{
    iso3166_1: string;
    iso639_1: string;
    name: string;
    englishName: string;
    data: TvEpisodeTranslationData;
}>;
export type TvEpisodeTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<TvEpisodeTranslationItem[]>;
}>;
export type TvEpisodeVideoItem = Readonly<{
    iso639_1: string;
    iso3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
    id: string;
}>;
export type TvEpisodeVideosResult = Readonly<{
    id: number;
    results: Readonly<TvEpisodeVideoItem[]>;
}>;
export type TvEpisodeAddRatingResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
export type TvEpisodeDeleteRatingResult = Readonly<{
    statusCode: number;
    statusMessage: string;
}>;
