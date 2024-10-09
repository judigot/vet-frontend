/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPersonalAccessTokens } from '../../interfaces/IPersonalAccessTokens';

type IBody = Omit<IPersonalAccessTokens, 'id' | 'created_at' | 'updated_at'>;

export const createPersonalAccessTokens = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/personal_access_tokens`,
    body: JSON.stringify(formData),
  });
  return result;
};
