/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ISessions } from '../../interfaces/ISessions';

type IBody = ISessions;

export const updateSessions = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/sessions`,
    body: JSON.stringify(formData),
  });
  return result;
};
