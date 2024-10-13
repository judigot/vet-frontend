/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IVaccinationSchedule } from '../../interfaces/IVaccinationSchedule';

type IBody = IVaccinationSchedule;

export const updateVaccinationSchedule = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/vaccination_schedules`,
    body: JSON.stringify(formData),
  });
  return result;
};
