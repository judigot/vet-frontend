/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobBatches } from '../../interfaces/IJobBatches';

type IBody = IJobBatches;

export const readJobBatches = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/job_batches`,
  });
  return result;
};
