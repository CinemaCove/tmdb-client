import {
    PersonAppendToResponse,
    PersonChangesResult,
    PersonCombinedCreditsResult,
    PersonDetail,
    PersonDetailsWithAppends,
    PersonExternalIdsResult,
    PersonImagesResult,
    PersonMovieCreditsResult,
    PersonTranslationsResult,
    PersonTvCreditsResult,
} from './person.types';

import { HttpClient } from '#core';

export class PersonEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Query the top-level details of a person
     */
    public async getDetails(
        personId: number,
        options?: Readonly<{
            appendToResponse?: PersonAppendToResponse[];
            language?: string;
        }>
    ): Promise<PersonDetailsWithAppends> {
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
    ): Promise<PersonChangesResult> {
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
    ): Promise<PersonCombinedCreditsResult> {
        return await this.client.get(`/person/${personId}/combined_credits`, options);
    }

    /**
     * Get the external ID's that belong to a person
     */
    public async getExternalIds(personId: number): Promise<PersonExternalIdsResult> {
        return await this.client.get(`/person/${personId}/external_ids`);
    }

    /**
     * Get the profile images that belong to a person
     */
    public async getProfileImages(personId: number): Promise<PersonImagesResult> {
        return await this.client.get(`/person/${personId}/images`);
    }

    /**
     * Get the newest created person. This is a live response and will continuously change
     */
    public async getLatest(): Promise<PersonDetail> {
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
    ): Promise<PersonMovieCreditsResult> {
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
    ): Promise<PersonTvCreditsResult> {
        return await this.client.get(`/person/${personId}/tv_credits`, options);
    }

    /**
     * Get the translations that belong to a person
     */
    public async getTranslations(personId: number): Promise<PersonTranslationsResult> {
        return await this.client.get(`/person/${personId}/translations`);
    }
}
