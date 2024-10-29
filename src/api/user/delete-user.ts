/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteUser = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/users/${String(id)}`,
  });
};
