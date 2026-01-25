import { HttpClient } from '../../http-client.interface';
import { GenderType, MediaType, PaginatedResult } from '../../shared';

type PeoplePopularKnownForItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    media_type: MediaType;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}>;

type PeoplePopularItem = {
    adult: boolean;
    gender: GenderType;
    id: number;
    known_for: PeoplePopularKnownForItem[];
    known_for_department: Readonly<string[]>;
    name: string;
    popularity: number;
    profile_path: string;
};

type PeopleAppendToResponse =
    | 'combined_credits'
    | 'external_ids'
    | 'images'
    | 'movie_credits'
    | 'tv_credits'
    | 'translations';

type PeopleDetail = {
    adult: boolean;
    also_known_as: Readonly<string[]>;
    biography: string;
    birthday: string;
    deathday: string;
    gender: GenderType;
    homepage: string;
    id: number;
    imdb_id: string;
    known_for_department: Readonly<string[]>;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
};

export type PeopleCreditsCrewItem = Readonly<{
    adult: boolean;
    gender: GenderType;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}>;
export type PeopleCreditsCastItem = Readonly<{
    adult: boolean;
    gender: GenderType;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}>;

export type PeopleCombinedCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleCreditsCastItem[]>;
    crew: Readonly<PeopleCreditsCrewItem[]>;
}>;

export type PeopleExternalIdsResult = Readonly<{
    id: number;
    freebase_mid: string;
    freebase_id: string;
    imdb_id: string;
    tvrage_id: number;
    wikidata_id: string;
    facebook_id: string;
    instagram_id: string;
    tiktok_id: number;
    twitter_id: string;
    youtube_id: any;
}>;

type PeopleImagesProfileItem = Readonly<{
    aspect_ratio: number;
    height: number;
    iso_639_1: any;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}>;
export type PeopleImagesResult = Readonly<{
    id: number;
    profiles: PeopleImagesProfileItem[];
}>;

export type PeopleMovieCreditsCastItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    order: number;
}>;

export type PeopleMovieCreditsCrewItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    job: string;
}>;

export type PeopleMovieCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleMovieCreditsCastItem[]>;
    crew: Readonly<PeopleMovieCreditsCrewItem[]>;
}>;

export type PeopleTVCreditsCastItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    origin_country: Readonly<string[]>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    episode_count: number;
}>;

export type PeopleTVCreditsCrewItem = Readonly<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Readonly<number[]>;
    id: number;
    origin_country: Readonly<string[]>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    episode_count: number;
    job: string;
}>;

export type PeopleTVCreditsResult = Readonly<{
    id: number;
    cast: Readonly<PeopleTVCreditsCastItem[]>;
    crew: Readonly<PeopleTVCreditsCrewItem[]>;
}>;

export type PeopleTranslationDataItem = Readonly<{
    biography: string;
    name: string;
}>;

export type PeopleTranslationItem = Readonly<{
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: Readonly<PeopleTranslationDataItem[]>;
}>;

export type PeopleTranslationsResult = Readonly<{
    id: number;
    translations: Readonly<PeopleTranslationItem[]>;
}>;

export type PeopleDetailsWithAppends = Readonly<PeopleDetail & {
    combined_credits?: Omit<PeopleCombinedCreditsResult, 'id'>;
    external_ids?: Omit<PeopleExternalIdsResult, 'id'>;
    image?: Omit<PeopleImagesResult, 'id'>;
    movie_credits?: Omit<PeopleMovieCreditsResult, 'id'>;
    tv_credits?: Omit<PeopleTVCreditsResult, 'id'>;
    translations?: Omit<PeopleTranslationsResult, 'id'>;
}>;

type PeopleChangesChangeItems = Readonly<{
    id: string;
    action: string;
    time: string;
    iso_639_1: string;
    iso_3166_1: string;
    value: string;
}>;

type PeopleChangesItem = Readonly<{
    key: string;
    items: Readonly<PeopleChangesChangeItems[]>;
}>;

type PeopleChangesResult = Readonly<{
    changes: Readonly<PeopleChangesItem[]>;
}>;

export class PeopleEndpoint {
    public constructor(private readonly client: HttpClient) {}

    // region list
    /**
     * Get a list of people ordered by popularity
     */
    public async getPopular(
        options?: Readonly<{
            page?: number;
            language?: string;
        }>
    ): Promise<Readonly<PaginatedResult<PeoplePopularItem>>> {
        return await this.client.get('/person/popular', options);
    }
    // endregion

    /**
     * Query the top-level details of a person
     */
    public async getDetails(
        personId: number,
        options?: Readonly<{
            appendToResponse?: PeopleAppendToResponse[];
            language?: string;
        }>
    ): Promise<PeopleDetailsWithAppends> {
        return await this.client.get(`/person/${personId}`, options);
    }

    /**
     * Get the recent changes for a person
     */
    public async getChanges(
        personId: number,
        options?: Readonly<{
            page?: number;
            start_date?: string;
            end_date?: string;
        }>
    ): Promise<PeopleChangesResult> {
        return await this.client.get(`/person/${personId}/changes`, options);
    }

    /**
     * Get the combined movie and TV credits that belong to a person
     */
    public async getCombinedCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleCombinedCreditsResult> {
        return await this.client.get(`/person/${personId}/combined_credits`, options);
    }

    /**
     * Get the external ID's that belong to a person
     */
    public async getExternalIds(personId: number): Promise<PeopleExternalIdsResult> {
        return await this.client.get(`/person/${personId}/external_ids`);
    }

    /**
     * Get the profile images that belong to a person
     */
    public async getProfileImages(personId: number): Promise<PeopleImagesResult> {
        return await this.client.get(`/person/${personId}/images`);
    }

    /**
     * Get the newest created person. This is a live response and will continuously change
     */
    public async getLatest(): Promise<PeopleDetail> {
        return await this.client.get(`/person/latest`);
    }

    /**
     * Get the movie credits for a person
     */
    public async getMovieCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleMovieCreditsResult> {
        return await this.client.get(`/person/${personId}/movie_credits`, options);
    }

    /**
     * Get the TV credits that belong to a person
     */
    public async getTVCredits(
        personId: number,
        options?: {
            language?: string;
        }
    ): Promise<PeopleTVCreditsResult> {
        return await this.client.get(`/person/${personId}/tv_credits`, options);
    }

    /**
     * Get the translations that belong to a person
     */
    public async getTranslations(
        personId: number
    ): Promise<PeopleTranslationsResult> {
        return await this.client.get(`/person/${personId}/translations`);
    }
}
