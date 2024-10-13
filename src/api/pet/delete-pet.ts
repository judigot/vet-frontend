/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deletePet = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/pets/${String(id)}`,
  });
};
