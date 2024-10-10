/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IAppointmentDetails } from '@/interfaces/IAppointmentDetails';

type IBody = IAppointmentDetails;

export const readAppointmentDetails = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/appointments/details`,
  });
  return result;
};
