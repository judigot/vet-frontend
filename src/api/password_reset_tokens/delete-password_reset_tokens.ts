/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deletePasswordResetTokens = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/password_reset_tokens/${String(id)}`,
  });
};
