/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPet } from '../../interfaces/IPet';

type IBody = Omit<IPet, 'pet_id' | 'created_at' | 'updated_at'>;

export const createPet = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/pets`,
    body: JSON.stringify(formData),
  });
  return result;
};
