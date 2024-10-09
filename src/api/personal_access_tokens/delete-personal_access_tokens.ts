/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deletePersonalAccessTokens = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/personal_access_tokens/${String(id)}`,
  });
};
