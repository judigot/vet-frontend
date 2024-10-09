/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteCache = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/caches/${String(id)}`,
  });
};
