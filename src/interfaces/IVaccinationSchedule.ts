/* Owner: App Scaffolder */
export interface IVaccinationSchedule {
  created_at: Date | null;
  vaccine_name: string;
  vaccination_schedule_id: number;
  updated_at: Date | null;
  status: string | null;
  pet_id: number;
  due_date: Date;
}

export function isIVaccinationSchedule(data: unknown): data is IVaccinationSchedule {
  return (
    data !== null &&
    typeof data === 'object' &&
    'created_at' in data &&
    'vaccine_name' in data &&
    'vaccination_schedule_id' in data &&
    'updated_at' in data &&
    'status' in data &&
    'pet_id' in data &&
    'due_date' in data &&
    typeof data.created_at === 'string' &&
    typeof data.vaccine_name === 'string' &&
    typeof data.vaccination_schedule_id === 'number' &&
    typeof data.updated_at === 'string' &&
    (data.status === null || typeof data.status === 'string') &&
    typeof data.pet_id === 'number' &&
    typeof data.due_date === 'string'
  );
}

export function isIVaccinationScheduleArray(data: unknown): data is IVaccinationSchedule[] {
  return Array.isArray(data) && data.every(isIVaccinationSchedule);
}
