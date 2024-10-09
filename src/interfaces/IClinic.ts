/* Owner: App Scaffolder */
export interface IClinic {
  updated_at: Date | null;
  phone_number: string | null;
  name: string;
  created_at: Date | null;
  clinic_id: number;
  address: string | null;
  email: string | null;
}

export function isIClinic(data: unknown): data is IClinic {
  return (
    data !== null &&
    typeof data === 'object' &&
    'updated_at' in data &&
    'phone_number' in data &&
    'name' in data &&
    'created_at' in data &&
    'clinic_id' in data &&
    'address' in data &&
    'email' in data &&
    typeof data.updated_at === 'string' &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    typeof data.name === 'string' &&
    typeof data.created_at === 'string' &&
    typeof data.clinic_id === 'number' &&
    (data.address === null || typeof data.address === 'string') &&
    (data.email === null || typeof data.email === 'string')
  );
}

export function isIClinicArray(data: unknown): data is IClinic[] {
  return Array.isArray(data) && data.every(isIClinic);
}
