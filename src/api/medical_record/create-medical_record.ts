/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IMedicalRecord } from '../../interfaces/IMedicalRecord';

type IBody = Omit<IMedicalRecord, 'medical_record_id' | 'created_at' | 'updated_at'>;

export const createMedicalRecord = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/medical_records`,
    body: JSON.stringify(formData),
  });
  return result;
};
