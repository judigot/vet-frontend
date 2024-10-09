/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteJobBatches = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/job_batches/${String(id)}`,
  });
};
