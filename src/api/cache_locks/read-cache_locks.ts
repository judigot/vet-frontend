/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ICacheLocks } from '../../interfaces/ICacheLocks';

type IBody = ICacheLocks;

export const readCacheLocks = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/cache_locks`,
  });
  return result;
};
