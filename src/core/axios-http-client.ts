import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import qs from 'qs';

import { HttpClient } from './http-client.interface';

import { camelToSnakeCase, snakeToCamelCase } from '#utils';

const customProcessing: Record<string, (key: string) => string> = {
    iso3166_1: _ => 'iso_3166_1',
    iso_3166_1: _ => 'iso3166_1',
    iso639_1: _ => 'iso_639_1',
    iso_639_1: _ => 'iso639_1',
    iso631_1: _ => 'iso_631_1',
    iso_631_1: _ => 'iso631_1',
};

const convertRequestObject = <T>(obj: T): T | Record<string, unknown> => {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(convertRequestObject) as T;
    }

    if (typeof obj === 'object' && obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (acc, key) => {
                const customProcessingElement = customProcessing[key];
                const snakeKey = customProcessingElement
                    ? customProcessingElement(key)
                    : camelToSnakeCase(key);
                acc[snakeKey] = convertRequestObject((obj as Record<string, unknown>)[key]);
                return acc;
            },
            {} as Record<string, unknown>
        );
    }

    return obj;
};

const convertResponseObject = <T>(obj: T): T | Record<string, unknown> => {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(convertResponseObject) as T;
    }

    if (typeof obj === 'object' && obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (acc, key) => {
                const customProcessingElement = customProcessing[key];
                const snakeKey = customProcessingElement
                    ? customProcessingElement(key)
                    : snakeToCamelCase(key);
                acc[snakeKey] = convertResponseObject((obj as Record<string, unknown>)[key]);
                return acc;
            },
            {} as Record<string, unknown>
        );
    }

    return obj;
};

const requestFormatterInterceptor = (
    req: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    req.params = convertRequestObject(req.params);
    req.data = convertRequestObject(req.data);

    return req;
};

const responseFormatterInterceptor = (res: AxiosResponse): AxiosResponse => {
    res.data = convertResponseObject(res.data);

    return res;
};

export class AxiosHttpClient implements HttpClient {
    private readonly http: AxiosInstance;

    public constructor(apiKey: string | Readonly<{ accessToken: string }>, baseUrl: string) {
        const isApiKey = typeof apiKey !== 'object';
        this.http = axios.create({
            baseURL: baseUrl,
            params: isApiKey ? { apiKey: apiKey } : undefined, // TMDB v3 classic way
            headers: {
                Accept: 'application/json',
                Authorization: !isApiKey ? `Bearer ${apiKey.accessToken}` : undefined,
            },
            paramsSerializer: params =>
                qs.stringify(params, {
                    arrayFormat: 'comma',
                    allowDots: true,
                }),
        });

        this.http.interceptors.request.use(requestFormatterInterceptor);

        this.http.interceptors.response.use(responseFormatterInterceptor, err => {
            // normalize TMDB errors, log, etc.
            return Promise.reject(err);
        });
    }

    public async get<TRes>(url: string, params?: Record<string, unknown>): Promise<TRes> {
        const res = await this.http.get<TRes>(url, { params });
        return res.data;
    }

    public async post<TRes>(
        url: string,
        body?: Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<TRes> {
        const res = await this.http.post<TRes>(url, body, { params: options });
        return res.data;
    }

    public async delete<TRes>(
        url: string,
        body?: Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<TRes> {
        const res = await this.http.delete<TRes>(url, { params: options, data: body });
        return res.data;
    }
}
