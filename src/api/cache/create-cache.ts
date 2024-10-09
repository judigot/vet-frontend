/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICache } from '../../interfaces/ICache';

type IBody = Omit<ICache, 'key' | 'created_at' | 'updated_at'>;

export const createCache = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/caches`,
    body: JSON.stringify(formData),
  });
  return result;
};
