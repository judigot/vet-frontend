/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobs } from '../../interfaces/IJobs';

type IBody = Omit<IJobs, 'id' | 'created_at' | 'updated_at'>;

export const createJobs = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/jobs`,
    body: JSON.stringify(formData),
  });
  return result;
};
