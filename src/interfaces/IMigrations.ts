/* Owner: App Scaffolder */
export interface IMigrations {
  batch: number;
  id: number;
  migration: string;
}

export function isIMigrations(data: unknown): data is IMigrations {
  return (
    data !== null &&
    typeof data === 'object' &&
    'batch' in data &&
    'id' in data &&
    'migration' in data &&
    typeof data.batch === 'number' &&
    typeof data.id === 'number' &&
    typeof data.migration === 'string'
  );
}

export function isIMigrationsArray(data: unknown): data is IMigrations[] {
  return Array.isArray(data) && data.every(isIMigrations);
}
