/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';

export const deleteVaccinationSchedule = async (id: number): Promise<void> => {
  await customFetch.delete({
    url: `/vaccination_schedules/${String(id)}`,
  });
};
