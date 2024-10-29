/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IVaccinationSchedule } from '../../interfaces/IVaccinationSchedule';

type IBody = Omit<IVaccinationSchedule, 'vaccination_schedule_id' | 'created_at' | 'updated_at'>;

export const createVaccinationSchedule = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/vaccination_schedules`,
    body: JSON.stringify(formData),
  });
  return result;
};
