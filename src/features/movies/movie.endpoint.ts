import {TmdbClient} from "../../tmdb-client";
import {MovieDetail} from "./types";

export class MoviesEndpoint {
    constructor(private client: TmdbClient) {
    }

    /**
     * Get the primary information about a movie.
     * @param movieId The ID of the movie
     * @param options Optional parameters
     * @returns Promise<MovieDetail>
     */
    public async getDetails(
        movieId: number,
        options: {
            language?: string;              // e.g. 'pt-PT', 'en-US' (default: en-US)
            appendToResponse?: string[];    // e.g. ['credit', 'videos', 'images', 'recommendations']
        } = {}
    ): Promise<MovieDetail> {
        const params: Record<string, any> = {};

        if (options.language) {
            params.language = options.language;
        }

        if (options.appendToResponse && options.appendToResponse.length > 0) {
            // TMDB allows comma-separated string, max ~20 items
            params.append_to_response = options.appendToResponse.join(',');
        }

        const res = await this.client.getHttp().get(`/movie/${movieId}`, {params});

        return res.data as MovieDetail;
    }
}