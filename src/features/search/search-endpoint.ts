import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    SearchCollectionResult,
    SearchCompaniesResult,
    SearchKeywordsResult,
    SearchMoviesResult,
    SearchMultiResult,
    SearchPeopleResult,
    SearchTvShowsResult,
} from './search.types';

export class SearchEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Search for collections by their original, translated and alternative names
     */
    public async collections(
        options: Readonly<{
            query: string;
            includeAdult?: boolean;
            language?: string;
            page?: number;
            region?: string;
        }>
    ): Promise<PaginatedResult<SearchCollectionResult>> {
        return await this.client.get('/search/collection', options);
    }

    /**
     * Search for companies by their original and alternative names
     */
    public async companies(
        options: Readonly<{
            query: string;
            page?: number;
        }>
    ): Promise<PaginatedResult<SearchCompaniesResult>> {
        return await this.client.get('/search/company', options);
    }

    /**
     * Search for keywords by their name
     */
    public async keywords(
        options: Readonly<{
            query: string;
            page?: number;
        }>
    ): Promise<PaginatedResult<SearchKeywordsResult>> {
        return await this.client.get('/search/keyword', options);
    }

    /**
     * Search for movies by their original, translated and alternative titles
     */
    public async movies(
        options: Readonly<{
            query: string;
            includeAdult?: boolean;
            language?: string;
            primaryReleaseYear?: string;
            page?: number;
            region?: string;
            year?: string;
        }>
    ): Promise<PaginatedResult<SearchMoviesResult>> {
        return await this.client.get('/search/movie', options);
    }

    /**
     * Use multi search when you want to search for movies, TV shows and people in a single request
     */
    public async multi(
        options: Readonly<{
            query: string;
            includeAdult?: boolean;
            language?: string;
            page?: number;
        }>
    ): Promise<PaginatedResult<SearchMultiResult>> {
        return await this.client.get('/search/multi', options);
    }

    /**
     * Search for people by their name and also known as names
     */
    public async people(
        options: Readonly<{
            query: string;
            includeAdult?: boolean;
            language?: string;
            page?: number;
        }>
    ): Promise<PaginatedResult<SearchPeopleResult>> {
        return await this.client.get('/search/person', options);
    }

    /**
     * Search for TV shows by their original, translated and also known as names
     */
    public async tvShows(
        options: Readonly<{
            query: string;
            firstAirDateYear?: number;
            includeAdult?: boolean;
            language?: string;
            page?: number;
            year?: number;
        }>
    ): Promise<PaginatedResult<SearchTvShowsResult>> {
        return await this.client.get('/search/tv', options);
    }
}
