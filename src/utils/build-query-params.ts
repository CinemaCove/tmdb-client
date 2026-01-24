import { camelToSnake } from './camel-to-snake';

export function buildQueryParams<T extends Record<string, any>>(
    options?: Readonly<T>
): Record<string, string | number | boolean> {
    const params: Record<string, any> = {};

    if (!options) {
        return params;
    }

    for (const [camelKey, value] of Object.entries(options)) {
        // Skip undefined / null
        if (value === undefined || value === null) continue;

        // Convert camelCase → snake_case
        const snakeKey = camelToSnake(camelKey);

        // Handle arrays (e.g. append_to_response: ['credit', 'videos'] → 'credit,videos')
        if (Array.isArray(value)) {
            params[snakeKey] = value.join(',');
            continue;
        }

        // Handle booleans (TMDB often expects lowercase true/false or 1/0)
        if (typeof value === 'boolean') {
            params[snakeKey] = value ? 'true' : 'false'; // or '1'/'0' if preferred
            continue;
        }

        // Everything else (string, number, etc.)
        params[snakeKey] = value;
    }

    return params;
}
