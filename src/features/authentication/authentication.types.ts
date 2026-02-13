export type AuthenticationValidationResult = Readonly<{
    success: boolean;
    statusCode?: number;
    statusMessage?: string;
}>;
export type AuthenticationGuestSessionResult = Readonly<{
    success: boolean;
    guestSessionId: string;
    expiresAt: string;
}>;
export type AuthenticationRequestTokenResult = Readonly<{
    success: boolean;
    expiresAt: string;
    requestToken: string;
}>;
export type AuthenticationCreateSessionResult = Readonly<{
    success: boolean;
    sessionId: string;
}>;
export type AuthenticationValidateSessionWithLoginResult = Readonly<{
    success: boolean;
    expiresAt: string;
    requestToken: string;
}>;
export type AuthenticationDeleteSessionResult = Readonly<{
    success: boolean;
}>;
