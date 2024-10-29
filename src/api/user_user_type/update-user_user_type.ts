/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserUserType } from '../../interfaces/IUserUserType';

type IBody = IUserUserType;

export const updateUserUserType = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/user_user_types`,
    body: JSON.stringify(formData),
  });
  return result;
};
