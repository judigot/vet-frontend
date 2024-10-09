/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserUserType } from '../../interfaces/IUserUserType';

type IBody = IUserUserType;

export const readUserUserType = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/user_user_types`,
  });
  return result;
};
