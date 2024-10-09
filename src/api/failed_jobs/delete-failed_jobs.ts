/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteFailedJobs = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/failed_jobs/${String(id)}`,
  });
};
