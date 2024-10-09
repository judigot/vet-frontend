/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPasswordResetTokens } from '../../interfaces/IPasswordResetTokens';

type IBody = IPasswordResetTokens;

export const readPasswordResetTokens = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/password_reset_tokens`,
  });
  return result;
};
