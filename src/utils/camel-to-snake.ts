/**
 * Converts camelCase string to snake_case
 * e.g. appendToResponse → append_to_response
 *      includeAdult    → include_adult
 */
export function camelToSnake(camelValue: string) {
  return camelValue
    .replace(/([A-Z])/g, match => `_${match.toLowerCase()}`)
    .replace(/^_/, ''); // remove leading _ if any
}
