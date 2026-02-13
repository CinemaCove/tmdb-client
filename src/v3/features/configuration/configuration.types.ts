export type ConfigurationImages = Readonly<{
    baseUrl: string; // example: http://image.tmdb.org/t/p/
    secureBaseUrl: string; // example: https://image.tmdb.org/t/p/
    backdropSizes: Readonly<string[]>; // example: w300
    logoSizes: Readonly<string[]>; // example: w45
    posterSizes: Readonly<string[]>; // example: w92
    profileSizes: Readonly<string[]>; // example: w45
    stillSizes: Readonly<string[]>; // example: w92
}>;
export type ConfigurationDetails = Readonly<{
    images: ConfigurationImages;
    changeKeys: Readonly<string[]>; // example: adult
}>;
export type ConfigurationCountry = Readonly<{
    iso3166_1: string;
    englishName: string;
    nativeName: string;
}>;
export type ConfigurationJob = Readonly<{
    department: string; // example: Production
    jobs: Readonly<string[]>; // example: Casting
}>;
export type ConfigurationLanguage = Readonly<{
    iso639_1: string;
    englishName: string;
    name: string;
}>;
export type ConfigurationTimezone = Readonly<{
    iso3166_1: string; // example: AD
    zones: Readonly<string[]>; // example: ['Europe/Andorra']
}>;
