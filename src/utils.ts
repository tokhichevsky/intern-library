export function convertToArray<T>(data: T | T[] | undefined | null): T[] {
  return Array.isArray(data) ? data : data ? [data] : [];
}
