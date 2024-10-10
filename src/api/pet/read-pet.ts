/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPet } from '../../interfaces/IPet';

type IBody = IPet;

export const readPet = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/pets`,
  });
  return result;
};
