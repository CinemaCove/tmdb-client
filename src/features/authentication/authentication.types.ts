export type AuthenticationValidationResult = {
    readonly success: boolean;
    readonly status_code?: number;
    readonly status_message?: string;
};
export type AuthenticationGuestSessionResult = {
    readonly success: boolean;
    readonly guest_session_id: string;
    readonly expires_at: string;
};
export type AuthenticationRequestTokenResult = {
    readonly success: boolean;
    readonly expires_at: string;
    readonly request_token: string;
};
export type AuthenticationCreateSessionResult = {
    readonly success: boolean;
    readonly session_id: string;
};
export type AuthenticationValidateSesssionWithLoginResult = {
    readonly success: boolean;
    readonly expires_at: string;
    readonly request_token: string;
};
export type AuthenticationDeleteSessionResult = {
    readonly success: boolean;
};