/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUsers } from '../../interfaces/IUsers';

type IBody = IUsers;

export const readUsers = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/users`,
  });
  return result;
};
