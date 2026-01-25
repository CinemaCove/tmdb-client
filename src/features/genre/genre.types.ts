export type GenreItem = Readonly<{ id: number; name: string }>;
export type GenreMovieGenresResult = Readonly<{
    genres: Readonly<GenreItem[]>;
}>;
export type GenreTVShowGenresResult = Readonly<{
    genres: Readonly<GenreItem[]>;
}>;
