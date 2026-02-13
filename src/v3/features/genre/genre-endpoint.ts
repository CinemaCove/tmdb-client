import { HttpClient } from '../../http-client.interface';

import { GenreMovieGenresResult, GenreTvShowGenresResult } from './genre.types';

export class GenreEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the list of official genres for movies
     */
    public async getMovieGenres(
        options?: Readonly<{ language?: string }>
    ): Promise<GenreMovieGenresResult> {
        return this.client.get('/genre/movie/list', options);
    }

    /**
     * Get the list of official genres for TV shows
     */
    public async getTvShowGenres(
        options?: Readonly<{ language?: string }>
    ): Promise<GenreTvShowGenresResult> {
        return this.client.get('/genre/tv/list', options);
    }
}
