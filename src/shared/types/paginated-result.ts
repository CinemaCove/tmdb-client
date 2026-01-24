export type PaginatedResult<T> = {
    readonly page: number;
    readonly total_pages: number;
    readonly total_results: number;
    readonly results: T[];
};