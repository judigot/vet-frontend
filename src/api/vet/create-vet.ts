/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IVet } from '../../interfaces/IVet';

type IBody = Omit<IVet, 'vet_id' | 'created_at' | 'updated_at'>;

export const createVet = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/vets`,
    body: JSON.stringify(formData),
  });
  return result;
};
