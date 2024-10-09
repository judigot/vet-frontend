/* Owner: App Scaffolder */
export interface ICacheLocks {
  expiration: number;
  key: number;
  owner: string;
}

export function isICacheLocks(data: unknown): data is ICacheLocks {
  return (
    data !== null &&
    typeof data === 'object' &&
    'expiration' in data &&
    'key' in data &&
    'owner' in data &&
    typeof data.expiration === 'number' &&
    typeof data.key === 'string' &&
    typeof data.owner === 'string'
  );
}

export function isICacheLocksArray(data: unknown): data is ICacheLocks[] {
  return Array.isArray(data) && data.every(isICacheLocks);
}
