/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUser } from '../../interfaces/IUser';

type IBody = IUser;

export const updateUser = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/users`,
    body: JSON.stringify(formData),
  });
  return result;
};
