import { MediaType } from '../../shared';

type ReviewDetailsAuthorDetails = Readonly<{
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
}>;
export type ReviewDetailsResult = Readonly<{
    id: string;
    author: string;
    author_details: ReviewDetailsAuthorDetails;
    content: string;
    created_at: string;
    iso_639_1: string;
    media_id: number;
    media_title: string;
    media_type: MediaType;
    updated_at: string;
    url: string;
}>;