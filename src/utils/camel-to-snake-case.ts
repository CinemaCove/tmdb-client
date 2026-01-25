/**
 * Converts camelCase string to snake_case
 * e.g. appendToResponse → append_to_response
 *      includeAdult    → include_adult
 */
export function camelToSnakeCase(str: string) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
