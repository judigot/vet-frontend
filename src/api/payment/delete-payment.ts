/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deletePayment = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/payments/${String(id)}`,
  });
};
