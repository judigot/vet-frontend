/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobBatches } from '../../interfaces/IJobBatches';

type IBody = IJobBatches;

export const updateJobBatches = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/job_batches`,
    body: JSON.stringify(formData),
  });
  return result;
};
