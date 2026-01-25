import { MediaType } from '../../shared';

type ReviewDetailsAuthorDetails = Readonly<{
    name: string;
    username: string;
    avatarPath: string;
    rating: number;
}>;
export type ReviewDetailsResult = Readonly<{
    id: string;
    author: string;
    authorDetails: ReviewDetailsAuthorDetails;
    content: string;
    createdAt: string;
    iso639_1: string;
    mediaId: number;
    mediaTitle: string;
    mediaType: MediaType;
    updatedAt: string;
    url: string;
}>;