/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUser } from '../../interfaces/IUser';

type IBody = Omit<IUser, 'user_id' | 'created_at' | 'updated_at'>;

export const createUser = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/users`,
    body: JSON.stringify(formData),
  });
  return result;
};
