/* Owner: App Scaffolder */
export interface IJobs {
  attempts: number;
  available_at: number;
  created_at: number;
  id: number;
  payload: string;
  queue: string;
  reserved_at: number | null;
}

export function isIJobs(data: unknown): data is IJobs {
  return (
    data !== null &&
    typeof data === 'object' &&
    'attempts' in data &&
    'available_at' in data &&
    'created_at' in data &&
    'id' in data &&
    'payload' in data &&
    'queue' in data &&
    'reserved_at' in data &&
    typeof data.attempts === 'number' &&
    typeof data.available_at === 'number' &&
    typeof data.created_at === 'number' &&
    typeof data.id === 'number' &&
    typeof data.payload === 'string' &&
    typeof data.queue === 'string' &&
    (data.reserved_at === null || typeof data.reserved_at === 'number')
  );
}

export function isIJobsArray(data: unknown): data is IJobs[] {
  return Array.isArray(data) && data.every(isIJobs);
}
