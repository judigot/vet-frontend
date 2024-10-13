/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPayment } from '../../interfaces/IPayment';

type IBody = Omit<IPayment, 'payment_id' | 'created_at' | 'updated_at'>;

export const createPayment = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/payments`,
    body: JSON.stringify(formData),
  });
  return result;
};
