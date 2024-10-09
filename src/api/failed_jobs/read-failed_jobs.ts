/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IFailedJobs } from '../../interfaces/IFailedJobs';

type IBody = IFailedJobs;

export const readFailedJobs = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/failed_jobs`,
  });
  return result;
};
