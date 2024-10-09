/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ISessions } from '../../interfaces/ISessions';

type IBody = ISessions;

export const readSessions = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/sessions`,
  });
  return result;
};
