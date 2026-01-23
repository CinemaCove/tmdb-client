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
