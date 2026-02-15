import { GenderType, MediaType } from '../../shared';

export type PersonListPopularKnownForItem = Readonly<{
    adult: boolean;
    backdropPath: string;
    genreIds: Readonly<number[]>;
    id: number;
    mediaType: MediaType;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}>;
export type PersonListPopularResultItem = {
    adult: boolean;
    gender: GenderType;
    id: number;
    knownFor: PersonListPopularKnownForItem[];
    knownForDepartment: Readonly<string[]>;
    name: string;
    popularity: number;
    profilePath: string;
};
