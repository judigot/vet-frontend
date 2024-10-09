/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IFailedJobs } from '../../interfaces/IFailedJobs';

type IBody = Omit<IFailedJobs, 'id' | 'created_at' | 'updated_at'>;

export const createFailedJobs = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/failed_jobs`,
    body: JSON.stringify(formData),
  });
  return result;
};
