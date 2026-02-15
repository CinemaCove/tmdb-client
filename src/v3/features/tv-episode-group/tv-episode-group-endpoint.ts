import { TvEpisodeGroupDetailsResult } from './tv-episode-group.types';

import { HttpClient } from '#core';

export class TvEpisodeGroupEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     * Get the details of a TV episode group.
     */
    public async getDetails(tvEpisodeGroupId: string): Promise<TvEpisodeGroupDetailsResult> {
        return await this.client.get(`/tv/episode_group/${tvEpisodeGroupId}`);
    }
}
