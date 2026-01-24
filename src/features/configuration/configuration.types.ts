export type ConfigurationImages = Readonly<{
    base_url: string; // example: http://image.tmdb.org/t/p/
    secure_base_url: string; // example: https://image.tmdb.org/t/p/
    backdrop_sizes: string[]; // example: w300
    logo_sizes: string[]; // example: w45
    poster_sizes: string[]; // example: w92
    profile_sizes: string[]; // example: w45
    still_sizes: string[]; // example: w92
}>;
export type ConfigurationDetails = Readonly<{
    images: ConfigurationImages;
    change_keys: string[]; // example: adult
}>;
export type ConfigurationCountry = Readonly<{
    iso_3166_1: string;
    english_name: string;
    native_name: string;
}>;
export type ConfigurationJob = Readonly<{
    department: string; // example: Production
    jobs: string[]; // example: Casting
}>;
export type ConfigurationLanguage = Readonly<{
    iso_639_1: string;
    english_name: string;
    name: string;
}>;
export type ConfigurationTimezone = Readonly<{
    iso_3166_1: string; // example: AD
    zones: string[]; // example: ['Europe/Andorra']
}>;
