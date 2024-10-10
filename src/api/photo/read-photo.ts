/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPhoto } from '../../interfaces/IPhoto';

type IBody = IPhoto;

export const readPhoto = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/photos`,
  });
  return result;
};
