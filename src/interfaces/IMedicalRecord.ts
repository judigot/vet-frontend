/* Owner: App Scaffolder */
export interface IMedicalRecord {
  pet_id: number;
  visit_date: Date;
  vet_id: number;
  treatment: string | null;
  prescription: string | null;
  medical_record_id: number;
  diagnosis: string | null;
  created_at: Date | null;
}

export function isIMedicalRecord(data: unknown): data is IMedicalRecord {
  return (
    data !== null &&
    typeof data === 'object' &&
    'pet_id' in data &&
    'visit_date' in data &&
    'vet_id' in data &&
    'treatment' in data &&
    'prescription' in data &&
    'medical_record_id' in data &&
    'diagnosis' in data &&
    'created_at' in data &&
    typeof data.pet_id === 'number' &&
    typeof data.visit_date === 'string' &&
    typeof data.vet_id === 'number' &&
    (data.treatment === null || typeof data.treatment === 'string') &&
    (data.prescription === null || typeof data.prescription === 'string') &&
    typeof data.medical_record_id === 'number' &&
    (data.diagnosis === null || typeof data.diagnosis === 'string') &&
    typeof data.created_at === 'string'
  );
}

export function isIMedicalRecordArray(data: unknown): data is IMedicalRecord[] {
  return Array.isArray(data) && data.every(isIMedicalRecord);
}
