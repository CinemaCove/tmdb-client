import {HttpClient} from "../../http-client.interface";
import {
    CollectionsDetailsResult,
    CollectionsImagesResult,
    CollectionsTranslationsResult,
} from './collections.types';

export class CollectionsEndpoint {
    public constructor(private client: HttpClient) {}

    // Get collection details by ID.
    public async getDetails(
        collectionId: number,
        options: {
            readonly language?: string;
        } = {}
    ): Promise<CollectionsDetailsResult> {
        return this.client.get(`/collection/${collectionId}`, options);
    }

    // Get the images that belong to a collection
    public async getImages(
        collectionId: number,
        options: {
            readonly includeImageLanguage?: boolean;
            readonly language?: string;
        } = {}
    ): Promise<CollectionsImagesResult> {
        return this.client.get(`/collection/${collectionId}/images`, options);
    }

    // get the available translations for a collection
    public async getTranslations(
        collectionId: number
    ): Promise<CollectionsTranslationsResult> {
        return this.client.get(`/collection/${collectionId}/translations`);
    }
}