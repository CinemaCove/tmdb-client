export type PaginatedResult<T> = Readonly<{
    page: number;
    total_pages: number;
    total_results: number;
    results: T[];
}>;