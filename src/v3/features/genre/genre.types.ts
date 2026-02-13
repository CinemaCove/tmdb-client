export type GenreItem = Readonly<{ id: number; name: string }>;
export type GenreMovieGenresResult = Readonly<{
    genres: Readonly<GenreItem[]>;
}>;
export type GenreTvShowGenresResult = Readonly<{
    genres: Readonly<GenreItem[]>;
}>;
