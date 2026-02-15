import { MediaType } from '../../shared';

import {
    ListClearResult,
    ListCreateResult,
    ListDeleteResult,
    ListDetailsResult,
    ListItemsResult,
    ListItemStatusResult,
    ListRemoveMovieResult,
    ListUpdateResult,
} from './list.types';

import { HttpClient } from '#core';

export class ListEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Retrieve a list by id.
     */
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
     * Update the details of a list
     */
    public async update(
        listId: number,
        body: Readonly<{
            description?: string;
            name?: string;
            public?: boolean;
            sortBy?: string;
        }>
    ): Promise<ListUpdateResult> {
        return await this.client.put(`/list/${listId}`, body);
    }

    /**
     * Add items to a list
     */
    public async addItems(
        listId: number,
        body: Readonly<{
            items: Readonly<
                {
                    mediaType: MediaType;
                    mediaId: number;
                }[]
            >;
        }>
    ): Promise<ListItemsResult> {
        return await this.client.post(`/list/${listId}/items`, body);
    }

    /**
     * Remove items from a list
     */
    public async removeItems(
        listId: number,
        body: Readonly<{
            items: Readonly<
                {
                    mediaType: MediaType;
                    mediaId: number;
                }[]
            >;
        }>
    ): Promise<ListItemsResult> {
        return await this.client.delete(`/list/${listId}/items`, body);
    }

    /**
     * Update items of a list
     */
    public async updateItems(
        listId: number,
        body: Readonly<{
            items: Readonly<
                {
                    mediaType: MediaType;
                    mediaId: number;
                    comment: string;
                }[]
            >;
        }>
    ): Promise<ListItemsResult> {
        return await this.client.delete(`/list/${listId}/items`, body);
    }

    /**
     * Clear all items from a list
     */
    public async clear(listId: number): Promise<ListClearResult> {
        return await this.client.get(`/list/${listId}/clear`);
    }

    /**
     * Create a new list
     */
    public async create(
        body: Readonly<{
            description: string;
            name: string;
            iso3166_1: string;
            iso639_1: string;
            public: boolean;
        }>
    ): Promise<ListCreateResult> {
        return await this.client.post(`/list`, body);
    }

    /**
     * Delete a list
     */
    public async delete(listId: number): Promise<ListDeleteResult> {
        return await this.client.delete(`/list/${listId}`);
    }

    /**
     * Check if an item is on a list
     */
    public async checkItemStatus(
        listId: number,
        options: Readonly<{
            movieId: number;
            mediaType: MediaType;
        }>
    ): Promise<ListItemStatusResult> {
        return await this.client.get(`/list/${listId}/item_status`, options);
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
