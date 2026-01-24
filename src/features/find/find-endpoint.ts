import { HttpClient } from '../../http-client.interface';
import { FindExternalIdResult, FindExternalSource } from './find.types';

export class FindEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /*
     * Find data by external ID's.
     * The supported external sources for each object are as follows:
     * Media type coverage by data source:
     *
     * Source      | Movies | TV Shows | Seasons | Episodes | People
     * ------------|--------|----------|---------|----------|-------
     * IMDb        | ✓      | ✓        | ✓       | ✓        | ✓
     * Facebook    | ✓      | ✓        | -       | -        | ✓
     * Instagram   | ✓      | ✓        | -       | -        | ✓
     * TheTVDB     | -      | ✓        | ✓       | ✓        | -
     * TikTok      | ✓      | ✓        | -       | -        | ✓
     * Twitter     | ✓      | ✓        | -       | -        | ✓
     * Wikidata    | ✓      | ✓        | ✓       | ✓        | ✓
     * YouTube     | ✓      | ✓        | -       | -        | ✓
     *
     * ✓ = supported, - = not supported
     */
    public async byExternalId(
        externalId: string,
        options: {
            externalSource: FindExternalSource;
            language?: string;
        }
    ): Promise<FindExternalIdResult> {
        return await this.client.get(`/find/${externalId}`, options);
    }
}
