/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUsers } from '../../interfaces/IUsers';

type IBody = IUsers;

export const updateUsers = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/users`,
    body: JSON.stringify(formData),
  });
  return result;
};
