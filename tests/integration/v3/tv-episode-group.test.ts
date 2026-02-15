import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { TmdbClient } from '../../../src/v3';
import { TV_SHOWS } from '../consts/consts';

dotenv.config(); // loads .env

describe('TmdbClient - TvEpisodeGroup (real API)', () => {
    let tmdb: TmdbClient;
    let episodeGroupId: string;

    beforeAll(async () => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(apiKey);

        // Get an episode group ID from a TV show that has episode groups (Grey's Anatomy)
        const episodeGroups = await tmdb.tvShow.getEpisodeGroups(TV_SHOWS.GREYS_ANATOMY.ID);
        if (episodeGroups.results.length === 0) {
            throw new Error(
                'Grey\'s Anatomy has no episode groups — cannot run TvEpisodeGroup tests. Try another series.'
            );
        }
        episodeGroupId = episodeGroups.results[0].id;
    });

    it('fetches TV episode group details', async () => {
        const res = await tmdb.tvEpisodeGroup.getDetails(episodeGroupId);

        expect(res.id).toBe(episodeGroupId);
        expect(res.name).toBeDefined();
        expect(res.description).toBeDefined();
        expect(res.episodeCount).toBeGreaterThan(0);
        expect(res.groupCount).toBeGreaterThan(0);
        expect(res.groups).toBeDefined();
        expect(Array.isArray(res.groups)).toBe(true);

        const firstGroup = res.groups[0];
        expect(firstGroup.id).toBeDefined();
        expect(firstGroup.name).toBeDefined();
        expect(firstGroup.order).toBeDefined();
        expect(firstGroup.episodes).toBeDefined();
        expect(Array.isArray(firstGroup.episodes)).toBe(true);

        if (firstGroup.episodes.length > 0) {
            const episode = firstGroup.episodes[0];
            expect(episode.id).toBeDefined();
            expect(episode.name).toBeDefined();
            expect(episode.episodeNumber).toBeDefined();
            expect(episode.seasonNumber).toBeDefined();
            expect(episode.airDate).toBeDefined();
        }

        expect(res.network).toBeDefined();

        console.log(`Fetched episode group: ${res.name} with ${res.episodeCount} episodes`);
    }, 10000);
});
