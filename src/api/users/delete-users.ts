/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteUsers = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/users/${String(id)}`,
  });
};
