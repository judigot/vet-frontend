/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPasswordResetTokens } from '../../interfaces/IPasswordResetTokens';

type IBody = Omit<IPasswordResetTokens, 'email' | 'created_at' | 'updated_at'>;

export const createPasswordResetTokens = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/password_reset_tokens`,
    body: JSON.stringify(formData),
  });
  return result;
};
