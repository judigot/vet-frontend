/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserType } from '../../interfaces/IUserType';

type IBody = Omit<IUserType, 'user_type_id' | 'created_at' | 'updated_at'>;

export const createUserType = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/user_types`,
    body: JSON.stringify(formData),
  });
  return result;
};
