/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IMedicalRecord } from '../../interfaces/IMedicalRecord';

type IBody = IMedicalRecord;

export const updateMedicalRecord = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/medical_records`,
    body: JSON.stringify(formData),
  });
  return result;
};
