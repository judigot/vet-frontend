/* Owner: App Scaffolder */
export interface IEmergencyContact {
  contact_name: string | null;
  created_at: Date | null;
  emergency_contact_id: number;
  phone_number: string | null;
  relationship: string | null;
  updated_at: Date | null;
  user_id: number;
}

export function isIEmergencyContact(data: unknown): data is IEmergencyContact {
  return (
    data !== null &&
    typeof data === 'object' &&
    'contact_name' in data &&
    'created_at' in data &&
    'emergency_contact_id' in data &&
    'phone_number' in data &&
    'relationship' in data &&
    'updated_at' in data &&
    'user_id' in data &&
    (data.contact_name === null || typeof data.contact_name === 'string') &&
    typeof data.created_at === 'string' &&
    typeof data.emergency_contact_id === 'number' &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    (data.relationship === null || typeof data.relationship === 'string') &&
    typeof data.updated_at === 'string' &&
    typeof data.user_id === 'number'
  );
}

export function isIEmergencyContactArray(data: unknown): data is IEmergencyContact[] {
  return Array.isArray(data) && data.every(isIEmergencyContact);
}
