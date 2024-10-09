/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICache } from '../../interfaces/ICache';

type IBody = ICache;

export const readCache = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/caches`,
  });
  return result;
};
