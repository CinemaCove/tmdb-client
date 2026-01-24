import { HttpClient } from '../../http-client.interface';
import {
    NetworkAlternativeNamesResult,
    NetworkDetailsResult,
    NetworkImageItem,
} from './network.types';

export class NetworkEndpoint {
    public constructor(private readonly client: HttpClient) {}

    public async getDetails(networkId: number): Promise<NetworkDetailsResult> {
        return await this.client.get(`/network/${networkId}`);
    }

    /**
     * Get the alternative names of a network
     */
    public async getAlternativeNames(networkId: number): Promise<NetworkAlternativeNamesResult> {
        return await this.client.get(`/network/${networkId}/alternative_names`);
    }

    /**
     * Get the TV network logos by id
     */
    public async getImages(networkId: number): Promise<
        Readonly<{
            id: number;
            logos: NetworkImageItem[];
        }>
    > {
        return await this.client.get(`/network/${networkId}/images`);
    }
}