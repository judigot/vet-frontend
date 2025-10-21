/* Owner: App Scaffolder */

import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios'; // Import axios
import { IAppointment } from '../../interfaces/IAppointment';

type IBody = IAppointment;

export const readAppointment = async (): Promise<IBody[]> => {
  const response = await axios.get<IBody[]>(`/appointments`);
  return response.data;
};

export const useAppointmentData = (
  behavior?: Omit<UseQueryOptions<IBody[], unknown>, 'queryKey' | 'queryFn'>,
): UseQueryResult<IBody[], unknown> => {
  return useQuery<IBody[], unknown>({
    queryKey: ['appointmentData'],
    queryFn: readAppointment,
    ...behavior,
  });
};
