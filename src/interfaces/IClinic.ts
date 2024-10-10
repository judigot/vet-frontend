/* Owner: App Scaffolder */
export interface IClinic {
  name: string;
  updated_at: Date | null;
  phone_number: string | null;
  email: string | null;
  created_at: Date | null;
  clinic_id: number;
  address: string | null;
}

export function isIClinic(data: unknown): data is IClinic {
  return (
    data !== null &&
    typeof data === 'object' &&
    'name' in data &&
    'updated_at' in data &&
    'phone_number' in data &&
    'email' in data &&
    'created_at' in data &&
    'clinic_id' in data &&
    'address' in data &&
    typeof data.name === 'string' &&
    typeof data.updated_at === 'string' &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    (data.email === null || typeof data.email === 'string') &&
    typeof data.created_at === 'string' &&
    typeof data.clinic_id === 'number' &&
    (data.address === null || typeof data.address === 'string')
  );
}

export function isIClinicArray(data: unknown): data is IClinic[] {
  return Array.isArray(data) && data.every(isIClinic);
}
