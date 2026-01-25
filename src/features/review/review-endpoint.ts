import { HttpClient } from '../../http-client.interface';
import { ReviewDetailsResult } from './review.types';

export class ReviewEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Retrieve the details of a movie or TV show review
     */
    public async getDetails(reviewId: string): Promise<ReviewDetailsResult> {
        return await this.client.get(`/review/${reviewId}`);
    }
}