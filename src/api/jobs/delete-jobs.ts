/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteJobs = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/jobs/${String(id)}`,
  });
};
