/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobs } from '../../interfaces/IJobs';

type IBody = IJobs;

export const updateJobs = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/jobs`,
    body: JSON.stringify(formData),
  });
  return result;
};
