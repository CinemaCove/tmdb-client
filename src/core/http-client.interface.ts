export interface HttpClient {
    get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
    post<T>(
        url: string,
        body?: Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<T>;
    delete<T>(
        url: string,
        body?: Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<T>;
    put<T>(
        url: string,
        body?: Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<T>;
}
