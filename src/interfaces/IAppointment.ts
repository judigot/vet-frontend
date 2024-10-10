/* Owner: App Scaffolder */
export interface IAppointment {
  appointment_id: number;
  appointment_date: Date;
  vet_id: number;
  updated_at: Date | null;
  status: string | null;
  notes: string | null;
  created_at: Date | null;
  pet_id: number;
}

export function isIAppointment(data: unknown): data is IAppointment {
  return (
    data !== null &&
    typeof data === 'object' &&
    'appointment_id' in data &&
    'appointment_date' in data &&
    'vet_id' in data &&
    'updated_at' in data &&
    'status' in data &&
    'notes' in data &&
    'created_at' in data &&
    'pet_id' in data &&
    typeof data.appointment_id === 'number' &&
    typeof data.appointment_date === 'string' &&
    typeof data.vet_id === 'number' &&
    typeof data.updated_at === 'string' &&
    (data.status === null || typeof data.status === 'string') &&
    (data.notes === null || typeof data.notes === 'string') &&
    typeof data.created_at === 'string' &&
    typeof data.pet_id === 'number'
  );
}

export function isIAppointmentArray(data: unknown): data is IAppointment[] {
  return Array.isArray(data) && data.every(isIAppointment);
}
