/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserType } from '../../interfaces/IUserType';

type IBody = IUserType;

export const readUserType = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/user_types`,
  });
  return result;
};
