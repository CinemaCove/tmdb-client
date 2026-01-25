import { FileType } from '../../shared';

export type CompanyDetailsResult = Readonly<{
    description: string;
    headquarters: string;
    homepage: string;
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
    parentCompany: string;
}>;
export type CompanyImageItem = Readonly<{
    aspectRatio: number;
    filePath: string;
    height: number;
    id: string;
    fileType: FileType;
    voteAverage: number;
    voteCount: number;
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
