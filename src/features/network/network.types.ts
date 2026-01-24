export type NetworkDetailsResult = Readonly<{
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}>;
export type NetworkAlternativeNamesResultItem = Readonly<{
    name: string;
    type: string;
}>;
export type NetworkAlternativeNamesResult = Readonly<{
    id: number;
    results: NetworkAlternativeNamesResultItem[];
}>;
export type NetworkImageItem = Readonly<{
    id: string;
    aspect_ratio: number;
    file_path: string;
    height: number;
    file_type: '.svg' | '.png';
    vote_average: number;
    vote_count: number;
    width: number;
}>;
