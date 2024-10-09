/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteClinic = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/clinics/${String(id)}`,
  });
};
