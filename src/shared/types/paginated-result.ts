export type PaginatedResult<T> = Readonly<{
    page: number;
    totalPages: number;
    totalResults: number;
    results: T[];
}>;