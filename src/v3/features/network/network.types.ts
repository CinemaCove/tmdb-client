import { FileType } from '../../shared';

export type NetworkDetailsResult = Readonly<{
    headquarters: string;
    homepage: string;
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}>;
export type NetworkAlternativeNamesResultItem = Readonly<{
    name: string;
    type: string;
}>;
export type NetworkAlternativeNamesResult = Readonly<{
    id: number;
    results: Readonly<NetworkAlternativeNamesResultItem[]>;
}>;
export type NetworkImageItem = Readonly<{
    id: string;
    aspectRatio: number;
    filePath: string;
    height: number;
    fileType: FileType;
    voteAverage: number;
    voteCount: number;
    width: number;
}>;
