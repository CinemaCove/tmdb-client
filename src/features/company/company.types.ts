export type CompanyDetailsResult = {
    readonly description: string;
    readonly headquarters: string;
    readonly homepage: string;
    readonly id: number;
    readonly logo_path: string;
    readonly name: string;
    readonly origin_country: string;
    readonly parent_company: string;
};
type CompanyImageItem = {
    readonly aspect_ratio: number;
    readonly file_path: string;
    readonly height: number;
    readonly id: string;
    readonly file_type: '.svg' | '.png';
    readonly vote_average: number;
    readonly vote_count: number;
    readonly width: number;
};
export type CompanyImagesResult = {
    readonly id: number;
    readonly logos: CompanyImageItem[];
};
type CompanyAlternativeNameItem = {
    readonly name: string;
    readonly type: string;
};
export type CompanyAlternativeNamesResult = {
    readonly id: number;
    readonly results: CompanyAlternativeNameItem[];
};