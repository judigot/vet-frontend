/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IVet } from '../../interfaces/IVet';

type IBody = IVet;

export const updateVet = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/vets`,
    body: JSON.stringify(formData),
  });
  return result;
};
