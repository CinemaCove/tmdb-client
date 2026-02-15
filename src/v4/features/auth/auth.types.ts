export type AuthCreateAccessTokenResult = Readonly<{
    accountId: string;
    accessToken: string;
    success: boolean;
    statusMessage: string;
    statusCode: number;
}>;
export type AuthLogoutResult = Readonly<{
    statusMessage: string;
    success: boolean;
    statusCode: number;
}>;
export type AuthCreateRequestTokenResult = Readonly<{
    statusMessage: string;
    requestToken: string;
    success: boolean;
    statusCode: number;
}>;
