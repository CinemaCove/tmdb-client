export type TvShowListItem = Readonly<{
    backdropPath: string;
    firstAirDate: string;
    genreIds: Readonly<number[]>;
    id: number;
    name: string;
    originCountry: Readonly<string[]>;
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
}>;
