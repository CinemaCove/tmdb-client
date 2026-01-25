import { FileType } from '../../shared';

export type CompanyDetailsResult = Readonly<{
    description: string;
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
    parent_company: string;
}>;
export type CompanyImageItem = Readonly<{
    aspect_ratio: number;
    file_path: string;
    height: number;
    id: string;
    file_type: FileType;
    vote_average: number;
    vote_count: number;
    width: number;
}>;
export type CompanyImagesResult = Readonly<{
    id: number;
    logos: Readonly<CompanyImageItem[]>;
}>;
export type CompanyAlternativeNameItem = Readonly<{
    name: string;
    type: string;
}>;
export type CompanyAlternativeNamesResult = Readonly<{
    id: number;
    results: Readonly<CompanyAlternativeNameItem[]>;
}>;