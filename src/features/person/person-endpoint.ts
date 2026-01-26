import { HttpClient } from '../../http-client.interface';
import { PaginatedResult } from '../../shared';

import {
    PeopleAppendToResponse,
    PeopleChangesResult,
    PeopleCombinedCreditsResult,
    PeopleDetail,
    PeopleDetailsWithAppends,
    PeopleExternalIdsResult,
    PeopleImagesResult,
    PeopleMovieCreditsResult,
    PeoplePopularItem,
    PeopleTranslationsResult,
    PeopleTvCreditsResult,
} from './person.types';

export class PersonEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // region list
    /**
     * Get a list of people ordered by popularity
     */
    public async getPopular(
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<Readonly<PaginatedResult<PeoplePopularItem>>> {
        return await this.client.get('/person/popular', options);
    }
    // endregion

    /**
     * Query the top-level details of a person
     */
    public async getDetails(
        personId: number,
        options?: Readonly<{
            appendToResponse?: PeopleAppendToResponse[];
            language?: string;
        }>
    ): Promise<PeopleDetailsWithAppends> {
        return await this.client.get(`/person/${personId}`, options);
    }

    /**
     * Get the recent changes for a person
     */
    public async getChanges(
        personId: number,
        options?: Readonly<{
            page?: number;
            startDate?: string;
            endDate?: string;
        }>
    ): Promise<PeopleChangesResult> {
        return await this.client.get(`/person/${personId}/changes`, options);
    }

    /**
     * Get the combined movie and TV credits that belong to a person
     */
    public async getCombinedCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleCombinedCreditsResult> {
        return await this.client.get(`/person/${personId}/combined_credits`, options);
    }

    /**
     * Get the external ID's that belong to a person
     */
    public async getExternalIds(personId: number): Promise<PeopleExternalIdsResult> {
        return await this.client.get(`/person/${personId}/external_ids`);
    }

    /**
     * Get the profile images that belong to a person
     */
    public async getProfileImages(personId: number): Promise<PeopleImagesResult> {
        return await this.client.get(`/person/${personId}/images`);
    }

    /**
     * Get the newest created person. This is a live response and will continuously change
     */
    public async getLatest(): Promise<PeopleDetail> {
        return await this.client.get(`/person/latest`);
    }

    /**
     * Get the movie credits for a person
     */
    public async getMovieCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleMovieCreditsResult> {
        return await this.client.get(`/person/${personId}/movie_credits`, options);
    }

    /**
     * Get the TV credits that belong to a person
     */
    public async getTvCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleTvCreditsResult> {
        return await this.client.get(`/person/${personId}/tv_credits`, options);
    }

    /**
     * Get the translations that belong to a person
     */
    public async getTranslations(personId: number): Promise<PeopleTranslationsResult> {
        return await this.client.get(`/person/${personId}/translations`);
    }
}
