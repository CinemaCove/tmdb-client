export type TvEpisodeGroupNetworkItem = Readonly<{
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;
type TvEpisodeGroupEpisodeItem = Readonly<{
    airDate: string;
    episodeNumber: number;
    id: number;
    name: string;
    overview: string;
    productionCode: string;
    runtime: unknown;
    seasonNumber: number;
    showId: number;
    stillPath: string;
    voteAverage: number;
    voteCount: number;
    order: number;
}>;
type TvEpisodeGroupItem = Readonly<{
    id: string;
    name: string;
    order: number;
    episodes: Readonly<TvEpisodeGroupEpisodeItem[]>;
    locked: boolean;
}>;
export type TvEpisodeGroupDetailsResult = Readonly<{
    description: string;
    episodeCount: number;
    groupCount: number;
    groups: Readonly<TvEpisodeGroupItem[]>;
    id: string;
    name: string;
    network: TvEpisodeGroupNetworkItem;
    type: number;
}>;
