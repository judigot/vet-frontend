/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserUserType } from '../../interfaces/IUserUserType';

type IBody = Omit<IUserUserType, 'user_id' | 'created_at' | 'updated_at'>;

export const createUserUserType = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/user_user_types`,
    body: JSON.stringify(formData),
  });
  return result;
};
