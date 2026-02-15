import { PaginatedResult } from '../../shared';

import {
    SearchCollectionResultItem,
    SearchCompaniesResultItem,
    SearchKeywordsResultItem,
    SearchMoviesResultItem,
    SearchMultiResultItem,
    SearchPeopleResultItem,
    SearchTvShowsResultItem,
} from './search.types';

import { HttpClient } from '#core';

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
    ): Promise<PaginatedResult<SearchCollectionResultItem>> {
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
    ): Promise<PaginatedResult<SearchCompaniesResultItem>> {
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
    ): Promise<PaginatedResult<SearchKeywordsResultItem>> {
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
    ): Promise<PaginatedResult<SearchMoviesResultItem>> {
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
    ): Promise<PaginatedResult<SearchMultiResultItem>> {
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
    ): Promise<PaginatedResult<SearchPeopleResultItem>> {
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
    ): Promise<PaginatedResult<SearchTvShowsResultItem>> {
        return await this.client.get('/search/tv', options);
    }
}
