/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICacheLocks } from '../../interfaces/ICacheLocks';

type IBody = ICacheLocks;

export const updateCacheLocks = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/cache_locks`,
    body: JSON.stringify(formData),
  });
  return result;
};
