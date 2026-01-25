/**
 * Converts snake_case string to camelCase
 * e.g. append_to_response → appendToResponse
 *      includeAdult    → includeAdult
 */
export function snakeToCamelCase(str: string): string {
    return str.replace(/(?!^)_(.)/g, (_, char) => char.toUpperCase());
}