import { GenderType, MediaType } from '../../shared';

export type CreditDetailsSeasonItem = Readonly<{
    id: number;
    air_date: string;
    episode_count: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    show_id: number;
}>;
export type CreditDetailsMedia = Readonly<{
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: MediaType;
    genre_ids: Readonly<number[]>;
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: Readonly<string[]>;
    character: string;
    episodes: Readonly<any[]>;
    seasons: Readonly<CreditDetailsSeasonItem[]>;
}>;
export type CreditDetailsPerson = Readonly<{
    adult: boolean;
    id: number;
    name: string;
    original_name: string;
    media_type: MediaType;
    popularity: number;
    gender: GenderType;
    known_for_department: string;
    profile_path: string;
}>;
export type CreditDetailsResult = Readonly<{
    credit_type: string;
    department: string;
    job: string;
    media: CreditDetailsMedia;
    media_type: MediaType;
    id: string;
    person: CreditDetailsPerson;
}>;
