/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPersonalAccessTokens } from '../../interfaces/IPersonalAccessTokens';

type IBody = IPersonalAccessTokens;

export const updatePersonalAccessTokens = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/personal_access_tokens`,
    body: JSON.stringify(formData),
  });
  return result;
};
