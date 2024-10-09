/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IFailedJobs } from '../../interfaces/IFailedJobs';

type IBody = IFailedJobs;

export const updateFailedJobs = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/failed_jobs`,
    body: JSON.stringify(formData),
  });
  return result;
};
