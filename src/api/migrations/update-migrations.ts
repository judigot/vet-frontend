/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IMigrations } from '../../interfaces/IMigrations';

type IBody = IMigrations;

export const updateMigrations = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/migrations`,
    body: JSON.stringify(formData),
  });
  return result;
};
