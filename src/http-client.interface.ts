export interface HttpClient {
    get<T>(url: string, options?: Record<string, any>): Promise<T>;
    post<T>(url: string, body?: Record<string, any>, options?: Record<string, any>): Promise<T>;
    delete<T>(url: string, body?: Record<string, any>, options?: Record<string, any>): Promise<T>;
}

