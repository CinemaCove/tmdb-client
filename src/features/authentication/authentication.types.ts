export type AuthenticationValidationResult = Readonly<{
    success: boolean;
    status_code?: number;
    status_message?: string;
}>;
export type AuthenticationGuestSessionResult = Readonly<{
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}>;
export type AuthenticationRequestTokenResult = Readonly<{
    success: boolean;
    expires_at: string;
    request_token: string;
}>;
export type AuthenticationCreateSessionResult = Readonly<{
    success: boolean;
    session_id: string;
}>;
export type AuthenticationValidateSessionWithLoginResult = Readonly<{
    success: boolean;
    expires_at: string;
    request_token: string;
}>;
export type AuthenticationDeleteSessionResult = Readonly<{
    success: boolean;
}>;