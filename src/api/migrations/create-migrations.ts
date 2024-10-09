/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IMigrations } from '../../interfaces/IMigrations';

type IBody = Omit<IMigrations, 'id' | 'created_at' | 'updated_at'>;

export const createMigrations = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/migrations`,
    body: JSON.stringify(formData),
  });
  return result;
};
