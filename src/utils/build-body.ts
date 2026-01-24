import { camelToSnake } from './camel-to-snake';

export function buildBody<T extends Record<string, any>>(
    options: T | undefined
): Record<string, string | number | boolean> {
    const body: Record<string, any> = {};

    if (!options) {
        return body;
    }

    for (const [camelKey, value] of Object.entries(options)) {
        // Skip undefined / null
        if (value === undefined || value === null) continue;

        // Convert camelCase → snake_case
        const snakeKey = camelToSnake(camelKey);

        // Handle arrays (e.g. append_to_response: ['credit', 'videos'] → 'credit,videos')
        if (Array.isArray(value)) {
            body[snakeKey] = value.join(',');
            continue;
        }

        // Everything else (string, number, etc.)
        body[snakeKey] = value;
    }

    return body;
}
