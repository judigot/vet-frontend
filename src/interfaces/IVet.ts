/* Owner: App Scaffolder */
export interface IVet {
  clinic_id: number;
  created_at: Date | null;
  email: string | null;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  specialty: string | null;
  updated_at: Date | null;
  vet_id: number;
}

export function isIVet(data: unknown): data is IVet {
  return (
    data !== null &&
    typeof data === 'object' &&
    'clinic_id' in data &&
    'created_at' in data &&
    'email' in data &&
    'first_name' in data &&
    'last_name' in data &&
    'phone_number' in data &&
    'specialty' in data &&
    'updated_at' in data &&
    'vet_id' in data &&
    typeof data.clinic_id === 'number' &&
    typeof data.created_at === 'string' &&
    (data.email === null || typeof data.email === 'string') &&
    typeof data.first_name === 'string' &&
    typeof data.last_name === 'string' &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    (data.specialty === null || typeof data.specialty === 'string') &&
    typeof data.updated_at === 'string' &&
    typeof data.vet_id === 'number'
  );
}

export function isIVetArray(data: unknown): data is IVet[] {
  return Array.isArray(data) && data.every(isIVet);
}
