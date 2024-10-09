/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUsers } from '../../interfaces/IUsers';

type IBody = Omit<IUsers, 'id' | 'created_at' | 'updated_at'>;

export const createUsers = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/users`,
    body: JSON.stringify(formData),
  });
  return result;
};
