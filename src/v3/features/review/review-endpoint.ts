import { ReviewDetailsResult } from './review.types';

import { HttpClient } from '#core';

export class ReviewEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Retrieve the details of a movie or TV show review
     */
    public async getDetails(reviewId: string): Promise<ReviewDetailsResult> {
        return await this.client.get(`/review/${reviewId}`);
    }
}
