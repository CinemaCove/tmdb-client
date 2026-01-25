import { describe, it, expect, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import { DefaultHttpClient, FindExternalSource, TmdbClient } from '../../src';

dotenv.config(); // loads .env

describe('TmdbClient - Find (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(new DefaultHttpClient(apiKey));
    });

    it('fetches data about the sinners given the id of each available source', async () => {
        const sources: { source: FindExternalSource, id: string }[] = [
            { source: 'imdb_id', id: 'tt31193180' },
            // { source: 'facebook_id', id: '???' },
            { source: 'instagram_id', id: 'sinnersmovie' },
            // { source: 'tvdb_id', id: '???' },
            // { source: 'tiktok_id', id: '???' },
            { source: 'twitter_id', id: 'SinnersMovie' },
            // { source: 'wikidata_id', id: '???' },
            // { source: 'youtube_id', id: '???' },
        ];

        for (const { source, id } of sources) {
            const res = await tmdb.find.byExternalId(id, {
                externalSource: source,
            });

            // Spot-check a few well-known ones (stable data)
            const sinners = res.movieResults.find(m => m.id === 1233413);
            expect(sinners).toBeDefined();
        }
    }, 10000);
});
