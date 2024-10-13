/* Owner: App Scaffolder */

/* IAppointmentDetails.ts */
export interface IAppointmentDetails {
  appointment_id: number;
  pet_id: number;
  vet_id: number;
  appointment_date: Date;
  status: string;
  notes: string;
  created_at: Date;
  updated_at: Date;
  vet_name: string;
  vet_specialty: string;
  vet_phone_number: string;
  vet_email: string;
  clinic_name: string;
  clinic_address: string;
  clinic_phone_number: string;
  clinic_email: string;
  pet_name: string;
  pet_breed: string;
  pet_age: number;
  pet_weight: string;
  pet_medical_history: string;
  pet_status: string;
  owner_name: string;
  owner_email: string;
  owner_phone_number: string;
  payment_id: number;
  payment_amount: string;
  payment_date: Date;
  payment_method: string;
  payment_status: string;
}

export function isIAppointmentDetails(data: unknown): data is IAppointmentDetails {
  return (
    data !== null &&
    typeof data === 'object' &&
    'appointment_id' in data &&
    'pet_id' in data &&
    'vet_id' in data &&
    'appointment_date' in data &&
    'status' in data &&
    'notes' in data &&
    'created_at' in data &&
    'updated_at' in data &&
    'vet_name' in data &&
    'vet_specialty' in data &&
    'vet_phone_number' in data &&
    'vet_email' in data &&
    'clinic_name' in data &&
    'clinic_address' in data &&
    'clinic_phone_number' in data &&
    'clinic_email' in data &&
    'pet_name' in data &&
    'pet_breed' in data &&
    'pet_age' in data &&
    'pet_weight' in data &&
    'pet_medical_history' in data &&
    'pet_status' in data &&
    'owner_name' in data &&
    'owner_email' in data &&
    'owner_phone_number' in data &&
    'payment_id' in data &&
    'payment_amount' in data &&
    'payment_date' in data &&
    'payment_method' in data &&
    'payment_status' in data &&
    typeof data.appointment_id === 'number' &&
    typeof data.pet_id === 'number' &&
    typeof data.vet_id === 'number' &&
    typeof data.appointment_date === 'string' &&
    typeof data.status === 'string' &&
    typeof data.notes === 'string' &&
    typeof data.created_at === 'string' &&
    typeof data.updated_at === 'string' &&
    typeof data.vet_name === 'string' &&
    typeof data.vet_specialty === 'string' &&
    typeof data.vet_phone_number === 'string' &&
    typeof data.vet_email === 'string' &&
    typeof data.clinic_name === 'string' &&
    typeof data.clinic_address === 'string' &&
    typeof data.clinic_phone_number === 'string' &&
    typeof data.clinic_email === 'string' &&
    typeof data.pet_name === 'string' &&
    typeof data.pet_breed === 'string' &&
    typeof data.pet_age === 'number' &&
    typeof data.pet_weight === 'string' &&
    typeof data.pet_medical_history === 'string' &&
    typeof data.pet_status === 'string' &&
    typeof data.owner_name === 'string' &&
    typeof data.owner_email === 'string' &&
    typeof data.owner_phone_number === 'string' &&
    typeof data.payment_id === 'number' &&
    typeof data.payment_amount === 'string' &&
    typeof data.payment_date === 'string' &&
    typeof data.payment_method === 'string' &&
    typeof data.payment_status === 'string'
  );
}

export function isIAppointmentDetailsArray(data: unknown): data is IAppointmentDetails[] {
  return Array.isArray(data) && data.every(isIAppointmentDetails);
}

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
