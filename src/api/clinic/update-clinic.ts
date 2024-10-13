/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IClinic } from '../../interfaces/IClinic';

type IBody = IClinic;

export const updateClinic = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/clinics`,
    body: JSON.stringify(formData),
  });
  return result;
};
