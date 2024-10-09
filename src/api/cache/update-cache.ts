/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICache } from '../../interfaces/ICache';

type IBody = ICache;

export const updateCache = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/caches`,
    body: JSON.stringify(formData),
  });
  return result;
};
