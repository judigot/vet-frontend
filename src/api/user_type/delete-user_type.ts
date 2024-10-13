/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteUserType = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/user_types/${String(id)}`,
  });
};
