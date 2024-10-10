/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IAppointment } from '../../interfaces/IAppointment';

type IBody = Omit<IAppointment, 'appointment_id' | 'created_at' | 'updated_at'>;

export const createAppointment = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/appointments`,
    body: JSON.stringify(formData),
  });
  return result;
};
