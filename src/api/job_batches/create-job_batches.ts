/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IJobBatches } from '../../interfaces/IJobBatches';

type IBody = Omit<IJobBatches, 'id' | 'created_at' | 'updated_at'>;

export const createJobBatches = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/job_batches`,
    body: JSON.stringify(formData),
  });
  return result;
};
