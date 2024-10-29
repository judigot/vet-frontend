/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IClinic } from '../../interfaces/IClinic';

type IBody = Omit<IClinic, 'clinic_id' | 'created_at' | 'updated_at'>;

export const createClinic = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/clinics`,
    body: JSON.stringify(formData),
  });
  return result;
};
