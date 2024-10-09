/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteSessions = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/sessions/${String(id)}`,
  });
};
