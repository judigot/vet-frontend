/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteMigrations = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/migrations/${String(id)}`,
  });
};
