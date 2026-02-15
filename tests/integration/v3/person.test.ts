import { beforeAll, describe, expect, it } from 'vitest';
import dotenv from 'dotenv';

import { TmdbClient } from '../../../src/v3';

dotenv.config(); // loads .env

describe('TmdbClient - People (real API)', () => {
    let tmdb: TmdbClient;

    beforeAll(() => {
        const apiKey: string | undefined = process.env.TMDB_API_KEY;

        if (!apiKey) {
            throw new Error(
                'TMDB_API_KEY is not set in .env — cannot run real API tests. Add it and try again.'
            );
        }

        tmdb = new TmdbClient(apiKey);
    });

    it('fetches details for a specific person (Brad Pitt)', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getDetails(bradPittId);

        expect(res.id).toBe(bradPittId);
        expect(res.name).toBe('Brad Pitt');
        expect(res.biography).toBeDefined();
        expect(res.birthday).toBeDefined();
        expect(res.placeOfBirth).toBeDefined();

        console.log(`Fetched details for: ${res.name}`);
    }, 10000);

    it('fetches person details with all additional responses', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getDetails(bradPittId, {
            appendToResponse: [
                'changes',
                'combined_credits',
                'external_ids',
                'images',
                'movie_credits',
                'tv_credits',
                'translations',
            ],
        });

        // Make sure the structure is correct
        expect(res.combinedCredits).toBeDefined();
        expect(res.externalIds).toBeDefined();
        expect(res.images).toBeDefined();
        expect(res.movieCredits).toBeDefined();
        expect(res.tvCredits).toBeDefined();
        expect(res.translations).toBeDefined();

        // Spot-check a few well-known values
        expect(res.externalIds!.imdbId).toBe('nm0000093');
        expect(res.name).toBe('Brad Pitt');

        console.log(`Fetched details with appends for: ${res.name}`);
    }, 10000);

    it('fetches recent changes for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getChanges(bradPittId);

        expect(res.changes).toBeDefined();
        expect(Array.isArray(res.changes)).toBe(true);

        console.log(`Fetched ${res.changes.length} change entries`);
    }, 10000);

    it('fetches combined credits for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getCombinedCredits(bradPittId);

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();
        expect(res.cast.length).toBeGreaterThan(0);

        console.log(`Fetched ${res.cast.length} cast credits and ${res.crew.length} crew credits`);
    }, 10000);

    it('fetches external IDs for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getExternalIds(bradPittId);

        expect(res.imdbId).toBe('nm0000093');
        expect(res.facebookId).toBeDefined();
        expect(res.instagramId).toBeDefined();
        expect(res.twitterId).toBeDefined();

        console.log(`Fetched external IDs - IMDb: ${res.imdbId}`);
    }, 10000);

    it('fetches profile images for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getProfileImages(bradPittId);

        expect(res.profiles).toBeDefined();
        expect(res.profiles.length).toBeGreaterThan(0);

        const firstImage = res.profiles[0];
        expect(firstImage.filePath).toBeDefined();
        expect(firstImage.aspectRatio).toBeDefined();

        console.log(`Fetched ${res.profiles.length} profile images`);
    }, 10000);

    it('fetches the latest created person', async () => {
        const res = await tmdb.person.getLatest();

        expect(res.id).toBeDefined();
        expect(res.name).toBeDefined();

        console.log(`Latest person created: ${res.name} (ID: ${res.id})`);
    }, 10000);

    it('fetches movie credits for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getMovieCredits(bradPittId);

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();
        expect(res.cast.length).toBeGreaterThan(0);

        // Brad Pitt should have some well-known movies
        const fightClub = res.cast.find(movie => movie.id === 550);
        expect(fightClub).toBeDefined();

        console.log(`Fetched ${res.cast.length} movie cast credits`);
    }, 10000);

    it('fetches TV credits for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getTvCredits(bradPittId);

        expect(res.cast).toBeDefined();
        expect(res.crew).toBeDefined();

        console.log(
            `Fetched ${res.cast.length} TV cast credits and ${res.crew.length} TV crew credits`
        );
    }, 10000);

    it('fetches translations for a person', async () => {
        const bradPittId = 287;
        const res = await tmdb.person.getTranslations(bradPittId);

        expect(res.translations).toBeDefined();
        expect(res.translations.length).toBeGreaterThan(0);

        const firstTranslation = res.translations[0];
        expect(firstTranslation.iso3166_1).toBeDefined();
        expect(firstTranslation.iso639_1).toBeDefined();
        expect(firstTranslation.name).toBeDefined();

        console.log(`Fetched ${res.translations.length} translations`);
    }, 10000);
});
