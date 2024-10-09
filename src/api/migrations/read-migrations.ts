/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IMigrations } from '../../interfaces/IMigrations';

type IBody = IMigrations;

export const readMigrations = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/migrations`,
  });
  return result;
};
