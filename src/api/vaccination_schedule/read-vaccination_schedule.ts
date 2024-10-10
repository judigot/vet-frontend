/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IVaccinationSchedule } from '../../interfaces/IVaccinationSchedule';

type IBody = IVaccinationSchedule;

export const readVaccinationSchedule = async (): Promise<IBody[] | null> => {
  const result: IBody[] | null = await customFetch.get({
    url: `/vaccination_schedules`,
  });
  return result;
};
