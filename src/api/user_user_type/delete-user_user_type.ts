/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteUserUserType = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/user_user_types/${String(id)}`,
  });
};
