/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPasswordResetTokens } from '../../interfaces/IPasswordResetTokens';

type IBody = IPasswordResetTokens;

export const updatePasswordResetTokens = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/password_reset_tokens`,
    body: JSON.stringify(formData),
  });
  return result;
};
