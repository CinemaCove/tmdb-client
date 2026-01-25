import axios, { AxiosInstance } from 'axios';
import { buildQueryParams } from './utils/build-query-params';
import { buildBody } from './utils/build-body';
import { HttpClient } from './http-client.interface';

export class DefaultHttpClient implements HttpClient {
    private readonly http: AxiosInstance;

    public constructor(
        readonly apiKey: string | { accessToken: string },
        baseUrl = 'https://api.themoviedb.org/3'
    ) {
        const isApiKey = typeof apiKey !== 'object';
        this.http = axios.create({
            baseURL: baseUrl,
            params: isApiKey ? { api_key: apiKey } : undefined, // TMDB v3 classic way
            headers: {
                Accept: 'application/json',
                Authorization: !isApiKey ? `Bearer ${apiKey.accessToken}` : undefined,
            },
        });

        this.http.interceptors.response.use(
            res => res,
            err => {
                // normalize TMDB errors, log, etc.
                return Promise.reject(err);
            }
        );
    }

    public async get<TRes>(url: string, options?: Record<string, any>): Promise<TRes> {
        const params = buildQueryParams(options);
        const res = await this.http.get<TRes>(url, { params });

        return res.data;
    }

    public async post<TRes>(
        url: string,
        body?: Record<string, any>,
        options?: Record<string, any>
    ): Promise<TRes> {
        const params = buildQueryParams(options);
        const genBody = buildBody(body);

        const res = await this.http.post<TRes>(url, genBody, { params });
        return res.data;
    }

    public async delete<TRes>(
        url: string,
        body?: Record<string, any>,
        options?: Record<string, any>
    ): Promise<TRes> {
        const params = buildQueryParams(options);
        const genBody = buildBody(body);

        const res = await this.http.delete<TRes>(url, { params, data: genBody });
        return res.data;
    }
}