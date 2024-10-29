/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteMedicalRecord = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/medical_records/${String(id)}`,
  });
};
