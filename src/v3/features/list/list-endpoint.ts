import {
    ListAddMovieResult,
    ListClearResult,
    ListCreateResult,
    ListDeleteResult,
    ListDetailsResult,
    ListItemStatusResult,
    ListRemoveMovieResult,
} from './list.types';

import { HttpClient } from '#core';

export class ListEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Add a movie to a list
     */
    public async addMovie(
        listId: number,
        body: Readonly<{
            mediaId: number;
        }>,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<ListAddMovieResult> {
        return await this.client.post(`/list/${listId}/add_item`, body, options);
    }

    /**
     * Use this method to check if an item has already been added to the list
     */
    public async checkItemStatus(
        listId: number,
        options: Readonly<{
            movieId: number;
            language: string;
        }>
    ): Promise<ListItemStatusResult> {
        return await this.client.get(`/list/${listId}/item_status`, options);
    }

    /**
     * Clear all items from a list
     */
    public async clear(
        listId: number,
        options: Readonly<{
            sessionId: string;
            confirm: boolean;
        }>
    ): Promise<ListClearResult> {
        return await this.client.post(`/list/${listId}/clear`, undefined, options);
    }

    public async create(
        body: Readonly<{
            name: string;
            description: string;
            language: string;
        }>,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<ListCreateResult> {
        return await this.client.post(`/list`, body, options);
    }

    /**
     * Delete a list
     */
    public async delete(
        listId: number,
        options: Readonly<{
            sessionId: string;
        }>
    ): Promise<ListDeleteResult> {
        return await this.client.delete(`/list/${listId}`, undefined, options);
    }

    public async details(
        listId: number,
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<ListDetailsResult> {
        return await this.client.get(`/list/${listId}`, options);
    }

    /**
     *  Remove a movie from a list
     */
    public async removeMovie(
        listId: number,
        body: Readonly<{
            mediaId: number;
        }>,
        options: {
            sessionId: string;
        }
    ): Promise<ListRemoveMovieResult> {
        return await this.client.post(`/list/${listId}/remove_item`, body, options);
    }
}
