/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPayment } from '../../interfaces/IPayment';

type IBody = IPayment;

export const readPayment = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/payments`,
  });
  return result;
};
