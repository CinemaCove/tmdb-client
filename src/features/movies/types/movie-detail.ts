import {MovieGenre} from "./movie-genre";
import {MovieProductionCompany} from "./movie-production-company";
import {MovieProductionCountry} from "./movie-production-country";
import {MovieSpokenLanguage} from "./movie-spoken-language";

export type MovieDetail = {
    /**
     * @default true
     * @example false
     */
    adult: boolean;
    /** @example /hZkgoQYus5vegHoetLkCJzb17zJ.jpg */
    backdrop_path?: string;
    belongs_to_collection?: unknown;
    /**
     * @default 0
     * @example 63000000
     */
    budget: number;
    genres?: MovieGenre[];
    /** @example http://www.foxmovies.com/movies/fight-club */
    homepage?: string;
    /**
     * @default 0
     * @example 550
     */
    id: number;
    /** @example tt0137523 */
    imdb_id?: string;
    /** @example en */
    original_language?: string;
    /** @example Fight Club */
    original_title?: string;
    /** @example A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion. */
    overview?: string;
    /**
     * @default 0
     * @example 61.416
     */
    popularity: number;
    /** @example /pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg */
    poster_path?: string;
    production_companies?: MovieProductionCompany[];
    production_countries?: MovieProductionCountry[];
    /** @example 1999-10-15 */
    release_date?: string;
    /**
     * @default 0
     * @example 100853753
     */
    revenue: number;
    /**
     * @default 0
     * @example 139
     */
    runtime: number;
    spoken_languages?: MovieSpokenLanguage[];
    /** @example Released */
    status?: string;
    /** @example Mischief. Mayhem. Soap. */
    tagline?: string;
    /** @example Fight Club */
    title?: string;
    /**
     * @default true
     * @example false
     */
    video: boolean;
    /**
     * @default 0
     * @example 8.433
     */
    vote_average: number;
    /**
     * @default 0
     * @example 26280
     */
    vote_count: number;
};