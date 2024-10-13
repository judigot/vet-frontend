/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteVet = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/vets/${String(id)}`,
  });
};
