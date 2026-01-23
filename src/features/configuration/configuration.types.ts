type ConfigurationImages = {
    base_url: string; // example: http://image.tmdb.org/t/p/
    secure_base_url: string; // example: https://image.tmdb.org/t/p/
    backdrop_sizes: string[]; // example: w300
    readonly logo_sizes: string[]; // example: w45
    readonly poster_sizes: string[]; // example: w92
    readonly profile_sizes: string[]; // example: w45
    readonly still_sizes: string[]; // example: w92
};
export type ConfigurationDetails = {
    readonly images: ConfigurationImages;
    readonly change_keys: string[]; // example: adult
};
export type ConfigurationCountry = {
    readonly iso_3166_1: string;
    readonly english_name: string;
    readonly native_name: string;
};
export type ConfigurationJob = {
    readonly department: string; // example: Production
    readonly jobs: string[]; // example: Casting
};
export type ConfigurationLanguage = {
    readonly iso_639_1: string;
    readonly english_name: string;
    readonly name: string;
};
export type ConfigurationTimezone = {
    readonly iso_3166_1: string; // example: AD
    readonly zones: string[]; // example: ['Europe/Andorra']
};