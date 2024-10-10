/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPayment } from '../../interfaces/IPayment';

type IBody = IPayment;

export const updatePayment = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/payments`,
    body: JSON.stringify(formData),
  });
  return result;
};
