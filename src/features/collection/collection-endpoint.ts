import {HttpClient} from "../../http-client.interface";
import {
    CollectionDetailsResult,
    CollectionImagesResult,
    CollectionTranslationsResult,
} from './collection.types';

export class CollectionEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get collection details by ID.
     */
    public async getDetails(
        collectionId: number,
        options?: Readonly<{
            language?: string;
        }>
    ): Promise<CollectionDetailsResult> {
        return this.client.get(`/collection/${collectionId}`, options);
    }

    /**
     * Get the images that belong to a collection
     */
    public async getImages(
        collectionId: number,
        options?: Readonly<{
            includeImageLanguage?: boolean;
            language?: string;
        }>
    ): Promise<CollectionImagesResult> {
        return this.client.get(`/collection/${collectionId}/images`, options);
    }

    /**
     * get the available translations for a collection
     */
    public async getTranslations(collectionId: number): Promise<CollectionTranslationsResult> {
        return this.client.get(`/collection/${collectionId}/translations`);
    }
}