import { HttpClient } from '../../http-client.interface';

type ListsAddMovieResult = {
    status_code: number;
    status_message: string;
};

type ListsItemStatusResult = {
    id: number;
    item_present: boolean;
};

type ListsClearResult = {
    status_code: number;
    status_message: string;
};

type ListsCreateResult = {
    readonly status_message: string;
    readonly success: boolean;
    readonly status_code: number;
    readonly list_id: number;
};

type ListsDeleteResult = {
    readonly status_code: number;
    readonly status_message: string;
};

type ListsDetailsItem = {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly genre_ids: number[];
    readonly id: number;
    readonly media_type: string;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly release_date: string;
    readonly title: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
};

type ListsDetailsResult = {
    readonly created_by: string;
    readonly description: string;
    readonly favorite_count: number;
    readonly id: string;
    readonly items: ListsDetailsItem[];
    readonly item_count: number;
    readonly iso_639_1: string;
    readonly name: string;
    readonly poster_path: string;
};

type ListsRemoveMovieResult = {
    readonly status_code: number;
    readonly status_message: string;
};
export class ListsEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // Add a movie to a list
    public async addMovie(
        listId: number,
        body: {
            mediaId: number;
        },
        options: {
            readonly sessionId: string;
        }
    ): Promise<ListsAddMovieResult> {
        return await this.client.post(`/list/${listId}/add_item`, body, options);
    }

    // Use this method to check if an item has already been added to the list
    public async checkItemStatus(
        listId: number,
        options: {
            readonly mediaId: number;
            readonly language: string;
        }
    ): Promise<ListsItemStatusResult> {
        return await this.client.get(`/list/${listId}/item_status`, options);
    }

    // Clear all items from a list
    public async clear(
        listId: number,
        body: {
            mediaId: number;
        },
        options: {
            readonly sessionId: string;
            readonly confirm: boolean;
        }
    ): Promise<ListsClearResult> {
        return await this.client.post(`/list/${listId}/add_item`, body, options);
    }

    public async create(
        body: {
            readonly name: string;
            readonly description: string;
            readonly language: string;
        },
        options: {
            readonly sessionId: string;
        }
    ): Promise<ListsCreateResult> {
        return await this.client.post(`/list`, body, options);
    }

    // Delete a list
    public async delete(
        listId: number,
        options: {
            readonly sessionId: string;
        }
    ): Promise<ListsDeleteResult> {
        return await this.client.delete(`/list/${listId}`, undefined, options);
    }

    public async details(
        listId: number,
        options: {
            readonly page?: number;
            readonly language?: string;
        } = {}
    ): Promise<ListsDetailsResult> {
        return await this.client.post(`/list/${listId}`, options);
    }

    // Remove a movie from a list
    public async removeMovie(
        listId: number,
        body: {
            mediaId: number;
        },
        options: {
            readonly sessionId: string;
        }
    ): Promise<ListsRemoveMovieResult> {
        return await this.client.delete(`/list/${listId}/remove_item`, undefined, options);
    }
}
