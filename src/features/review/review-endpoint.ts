import { HttpClient } from '../../http-client.interface';
import { MediaType } from '../../shared';

export type ReviewDetailsResult = Readonly<{
    id: string;
    author: string;
    author_details: Readonly<{
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
    }>;
    content: string;
    created_at: string;
    iso_639_1: string;
    media_id: number;
    media_title: string;
    media_type: MediaType;
    updated_at: string;
    url: string;

}>;

export class ReviewEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Retrieve the details of a movie or TV show review
     */
    public async getDetails(
        reviewId: string
    ): Promise<ReviewDetailsResult> {
        return await this.client.get(`/review/${reviewId}`);
    }
}