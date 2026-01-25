import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { HttpClient } from './http-client.interface';
import {
    camelToSnakeCase,
    snakeToCamelCase,
} from './utils';

const customProcessing: Record<string, (key: string) => string> = {
    'iso3166_1': (key) => 'iso_3166_1',
    'iso_3166_1': (key) => 'iso3166_1',
    'iso639_1': (key) => 'iso_639_1',
    'iso_639_1': (key) => 'iso639_1',
    'iso631_1': (key) => 'iso_631_1',
    'iso_631_1': (key) => 'iso631_1',
};

const convertRequestObject = (obj: any): Record<string, any> => {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(convertRequestObject);
    }

    if (typeof obj === 'object' && obj.constructor === Object) {
        return Object.keys(obj).reduce((acc, key) => {
            const customProcessingElement = customProcessing[key];
            const snakeKey = customProcessingElement ? customProcessingElement(key) : camelToSnakeCase(key);
            acc[snakeKey] = convertRequestObject(obj[key]);
            return acc;
        }, {} as any);
    }

    return obj;
}

const convertResponseObject = (obj: any): Record<string, any> => {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(convertResponseObject);
    }

    if (typeof obj === 'object' && obj.constructor === Object) {
        return Object.keys(obj).reduce((acc, key) => {
            const customProcessingElement = customProcessing[key];
            const snakeKey = customProcessingElement
                ? customProcessingElement(key)
                : snakeToCamelCase(key);
            acc[snakeKey] = convertResponseObject(obj[key]);
            return acc;
        }, {} as any);
    }

    return obj;
};

const requestFormatterInterceptor = (req: InternalAxiosRequestConfig) => {
    req.params = convertRequestObject(req.params);
    req.data = convertRequestObject(req.data);

    return req;
}

const responseFormatterInterceptor = (res: AxiosResponse) => {
    res.data = convertResponseObject(res.data);

    return res;
}

export class DefaultHttpClient implements HttpClient {
    private readonly http: AxiosInstance;

    public constructor(
        readonly apiKey: string | { accessToken: string },
        baseUrl = 'https://api.themoviedb.org/3'
    ) {
        const isApiKey = typeof apiKey !== 'object';
        this.http = axios.create({
            baseURL: baseUrl,
            params: isApiKey ? { apiKey: apiKey } : undefined, // TMDB v3 classic way
            headers: {
                Accept: 'application/json',
                Authorization: !isApiKey ? `Bearer ${apiKey.accessToken}` : undefined,
            },
        });

        this.http.interceptors.request.use(requestFormatterInterceptor);

        this.http.interceptors.response.use(responseFormatterInterceptor,
            err => {
                // normalize TMDB errors, log, etc.
                return Promise.reject(err);
            }
        );
    }

    public async get<TRes>(url: string, params?: Record<string, any>): Promise<TRes> {
        // const params = buildQueryParams(options);
        const res = await this.http.get<TRes>(url, { params });

        return res.data;
    }

    public async post<TRes>(
        url: string,
        body?: Record<string, any>,
        options?: Record<string, any>
    ): Promise<TRes> {
        const res = await this.http.post<TRes>(url, body, { params: options });
        return res.data;
    }

    public async delete<TRes>(
        url: string,
        body?: Record<string, any>,
        options?: Record<string, any>
    ): Promise<TRes> {
        const res = await this.http.delete<TRes>(url, { params: options, data: body });
        return res.data;
    }
}