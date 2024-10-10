/* Owner: App Scaffolder */
export interface IMedicalRecord {
  created_at: Date | null;
  diagnosis: string | null;
  medical_record_id: number;
  pet_id: number;
  prescription: string | null;
  treatment: string | null;
  vet_id: number;
  visit_date: Date;
}

export function isIMedicalRecord(data: unknown): data is IMedicalRecord {
  return (
    data !== null &&
    typeof data === 'object' &&
    'created_at' in data &&
    'diagnosis' in data &&
    'medical_record_id' in data &&
    'pet_id' in data &&
    'prescription' in data &&
    'treatment' in data &&
    'vet_id' in data &&
    'visit_date' in data &&
    typeof data.created_at === 'string' &&
    (data.diagnosis === null || typeof data.diagnosis === 'string') &&
    typeof data.medical_record_id === 'number' &&
    typeof data.pet_id === 'number' &&
    (data.prescription === null || typeof data.prescription === 'string') &&
    (data.treatment === null || typeof data.treatment === 'string') &&
    typeof data.vet_id === 'number' &&
    typeof data.visit_date === 'string'
  );
}

export function isIMedicalRecordArray(data: unknown): data is IMedicalRecord[] {
  return Array.isArray(data) && data.every(isIMedicalRecord);
}
