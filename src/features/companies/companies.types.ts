export type CompaniesDetailsResult = {
    readonly description: string;
    readonly headquarters: string;
    readonly homepage: string;
    readonly id: number;
    readonly logo_path: string;
    readonly name: string;
    readonly origin_country: string;
    readonly parent_company: string;
};
type CompaniesImageItem = {
    readonly aspect_ratio: number;
    readonly file_path: string;
    readonly height: number;
    readonly id: string;
    readonly file_type: '.svg' | '.png';
    readonly vote_average: number;
    readonly vote_count: number;
    readonly width: number;
};
export type CompaniesImagesResult = {
    readonly id: number;
    readonly logos: CompaniesImageItem[];
};
type CompaniesAlternativeNameItem = {
    readonly name: string;
    readonly type: string;
};
export type CompaniesAlternativeNamesResult = {
    readonly id: number;
    readonly results: CompaniesAlternativeNameItem[];
};