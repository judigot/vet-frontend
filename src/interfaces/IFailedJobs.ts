/* Owner: App Scaffolder */
export interface IFailedJobs {
  connection: string;
  uuid: string;
  queue: string;
  payload: string;
  id: number;
  failed_at: Date;
  exception: string;
}

export function isIFailedJobs(data: unknown): data is IFailedJobs {
  return (
    data !== null &&
    typeof data === 'object' &&
    'connection' in data &&
    'uuid' in data &&
    'queue' in data &&
    'payload' in data &&
    'id' in data &&
    'failed_at' in data &&
    'exception' in data &&
    typeof data.connection === 'string' &&
    typeof data.uuid === 'string' &&
    typeof data.queue === 'string' &&
    typeof data.payload === 'string' &&
    typeof data.id === 'number' &&
    typeof data.failed_at === 'string' &&
    typeof data.exception === 'string'
  );
}

export function isIFailedJobsArray(data: unknown): data is IFailedJobs[] {
  return Array.isArray(data) && data.every(isIFailedJobs);
}
