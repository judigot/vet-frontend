/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IUserType } from '../../interfaces/IUserType';

type IBody = IUserType;

export const updateUserType = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/user_types`,
    body: JSON.stringify(formData),
  });
  return result;
};
