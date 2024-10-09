/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICacheLocks } from '../../interfaces/ICacheLocks';

type IBody = Omit<ICacheLocks, 'key' | 'created_at' | 'updated_at'>;

export const createCacheLocks = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/cache_locks`,
    body: JSON.stringify(formData),
  });
  return result;
};
