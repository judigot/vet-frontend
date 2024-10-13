/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deletePhoto = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/photos/${String(id)}`,
  });
};
