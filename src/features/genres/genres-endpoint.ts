import { HttpClient } from '../../http-client.interface';
import { GenresMovieGenresResult, GenresTVShowGenresResult } from './genres.types';

export class GenresEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // Get the list of official genres for movies
    public async getMovieGenres(
        options: { language?: string } = {}
    ): Promise<GenresMovieGenresResult> {
        return this.client.get('/genre/movie/list', options);
    }

    // Get the list of official genres for TV shows
    public async getTVShowGenres(
        options: { language?: string } = {}
    ): Promise<GenresTVShowGenresResult> {
        return this.client.get('/genre/tv/list', options);
    }
}