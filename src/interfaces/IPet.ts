/* Owner: App Scaffolder */
export interface IPet {
  name: string;
  weight: number | null;
  user_id: number;
  updated_at: Date | null;
  status: string | null;
  pet_id: number;
  medical_history: string | null;
  created_at: Date | null;
  breed: string | null;
  age: number | null;
}

export function isIPet(data: unknown): data is IPet {
  return (
    data !== null &&
    typeof data === 'object' &&
    'name' in data &&
    'weight' in data &&
    'user_id' in data &&
    'updated_at' in data &&
    'status' in data &&
    'pet_id' in data &&
    'medical_history' in data &&
    'created_at' in data &&
    'breed' in data &&
    'age' in data &&
    typeof data.name === 'string' &&
    (data.weight === null || typeof data.weight === 'number') &&
    typeof data.user_id === 'number' &&
    typeof data.updated_at === 'string' &&
    (data.status === null || typeof data.status === 'string') &&
    typeof data.pet_id === 'number' &&
    (data.medical_history === null || typeof data.medical_history === 'string') &&
    typeof data.created_at === 'string' &&
    (data.breed === null || typeof data.breed === 'string') &&
    (data.age === null || typeof data.age === 'number')
  );
}

export function isIPetArray(data: unknown): data is IPet[] {
  return Array.isArray(data) && data.every(isIPet);
}
