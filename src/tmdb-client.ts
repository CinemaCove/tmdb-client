import axios, {AxiosInstance} from "axios";
import {MoviesEndpoint} from "./features/movies/movie.endpoint";

import {ConfigurationEndpoint} from "./features/configuration/configuration-endpoint";

export class TmdbClient {
    private readonly http: AxiosInstance;

    public readonly movies: MoviesEndpoint;
    public readonly configuration: ConfigurationEndpoint;

    constructor(
        apiKey: string | { accessToken: string },
        baseUrl = 'https://api.themoviedb.org/3') {
        const isApiKey = typeof apiKey !== 'object';
        this.http = axios.create({
            baseURL: baseUrl,
            params: isApiKey ? {api_key: apiKey} : undefined,           // TMDB v3 classic way
            headers: {
                Accept: 'application/json',
                Authorization: !isApiKey ? `Bearer ${apiKey.accessToken}` : undefined
            }
        });

        this.http.interceptors.response.use(
            (res) => res,
            (err) => {
                // normalize TMDB errors, log, etc.
                return Promise.reject(err);
            }
        );

        this.movies = new MoviesEndpoint(this);
        this.configuration = new ConfigurationEndpoint(this);
    }

    public getHttp() {
        return this.http;
    }
}