/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPet } from '../../interfaces/IPet';

type IBody = IPet;

export const updatePet = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/pets`,
    body: JSON.stringify(formData),
  });
  return result;
};
