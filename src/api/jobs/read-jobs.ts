/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobs } from '../../interfaces/IJobs';

type IBody = IJobs;

export const readJobs = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/jobs`,
  });
  return result;
};
