/* Owner: App Scaffolder */
export interface ICache {
  expiration: number;
  value: string;
  key: number;
}

export function isICache(data: unknown): data is ICache {
  return (
    data !== null &&
    typeof data === 'object' &&
    'expiration' in data &&
    'value' in data &&
    'key' in data &&
    typeof data.expiration === 'number' &&
    typeof data.value === 'string' &&
    typeof data.key === 'string'
  );
}

export function isICacheArray(data: unknown): data is ICache[] {
  return Array.isArray(data) && data.every(isICache);
}
