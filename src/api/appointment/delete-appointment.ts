/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteAppointment = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/appointments/${String(id)}`,
  });
};
