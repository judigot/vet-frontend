/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteEmergencyContact = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/emergency_contacts/${String(id)}`,
  });
};
