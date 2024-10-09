/* Owner: App Scaffolder */
export interface IAppointment {
  appointment_id: number;
  created_at: Date | null;
  notes: string | null;
  pet_id: number;
  status: string | null;
  updated_at: Date | null;
  vet_id: number;
  appointment_date: Date;
}

export function isIAppointment(data: unknown): data is IAppointment {
  return (
    data !== null &&
    typeof data === 'object' &&
    'appointment_id' in data &&
    'created_at' in data &&
    'notes' in data &&
    'pet_id' in data &&
    'status' in data &&
    'updated_at' in data &&
    'vet_id' in data &&
    'appointment_date' in data &&
    typeof data.appointment_id === 'number' &&
    typeof data.created_at === 'string' &&
    (data.notes === null || typeof data.notes === 'string') &&
    typeof data.pet_id === 'number' &&
    (data.status === null || typeof data.status === 'string') &&
    typeof data.updated_at === 'string' &&
    typeof data.vet_id === 'number' &&
    typeof data.appointment_date === 'string'
  );
}

export function isIAppointmentArray(data: unknown): data is IAppointment[] {
  return Array.isArray(data) && data.every(isIAppointment);
}
