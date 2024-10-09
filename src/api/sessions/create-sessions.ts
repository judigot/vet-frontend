/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { ISessions } from '../../interfaces/ISessions';

type IBody = Omit<ISessions, 'id' | 'created_at' | 'updated_at'>;

export const createSessions = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/sessions`,
    body: JSON.stringify(formData),
  });
  return result;
};
