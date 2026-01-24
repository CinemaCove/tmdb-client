export type GenreItem = Readonly<{ id: number; name: string }>;
export type GenreMovieGenresResult = Readonly<{
    genres: GenreItem[];
}>;
export type GenreTVShowGenresResult = Readonly<{
    genres: GenreItem[];
}>;
