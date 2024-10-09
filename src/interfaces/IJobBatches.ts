/* Owner: App Scaffolder */
export interface IJobBatches {
  cancelled_at: number | null;
  total_jobs: number;
  pending_jobs: number;
  options: string | null;
  name: string;
  finished_at: number | null;
  failed_jobs: number;
  failed_job_ids: string;
  created_at: number;
  id: number;
}

export function isIJobBatches(data: unknown): data is IJobBatches {
  return (
    data !== null &&
    typeof data === 'object' &&
    'cancelled_at' in data &&
    'total_jobs' in data &&
    'pending_jobs' in data &&
    'options' in data &&
    'name' in data &&
    'finished_at' in data &&
    'failed_jobs' in data &&
    'failed_job_ids' in data &&
    'created_at' in data &&
    'id' in data &&
    (data.cancelled_at === null || typeof data.cancelled_at === 'number') &&
    typeof data.total_jobs === 'number' &&
    typeof data.pending_jobs === 'number' &&
    (data.options === null || typeof data.options === 'string') &&
    typeof data.name === 'string' &&
    (data.finished_at === null || typeof data.finished_at === 'number') &&
    typeof data.failed_jobs === 'number' &&
    typeof data.failed_job_ids === 'string' &&
    typeof data.created_at === 'number' &&
    typeof data.id === 'string'
  );
}

export function isIJobBatchesArray(data: unknown): data is IJobBatches[] {
  return Array.isArray(data) && data.every(isIJobBatches);
}
