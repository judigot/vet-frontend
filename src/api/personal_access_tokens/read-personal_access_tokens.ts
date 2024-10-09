/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPersonalAccessTokens } from '../../interfaces/IPersonalAccessTokens';

type IBody = IPersonalAccessTokens;

export const readPersonalAccessTokens = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/personal_access_tokens`,
  });
  return result;
};
