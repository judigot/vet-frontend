/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteCacheLocks = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/cache_locks/${String(id)}`,
  });
};
