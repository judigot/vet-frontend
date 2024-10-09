/* Owner: App Scaffolder */
export interface IPet {
  status: string | null;
  weight: number | null;
  user_id: number;
  updated_at: Date | null;
  pet_id: number;
  name: string;
  medical_history: string | null;
  created_at: Date | null;
  breed: string | null;
  age: number | null;
}

export function isIPet(data: unknown): data is IPet {
  return (
    data !== null &&
    typeof data === 'object' &&
    'status' in data &&
    'weight' in data &&
    'user_id' in data &&
    'updated_at' in data &&
    'pet_id' in data &&
    'name' in data &&
    'medical_history' in data &&
    'created_at' in data &&
    'breed' in data &&
    'age' in data &&
    (data.status === null || typeof data.status === 'string') &&
    (data.weight === null || typeof data.weight === 'number') &&
    typeof data.user_id === 'number' &&
    typeof data.updated_at === 'string' &&
    typeof data.pet_id === 'number' &&
    typeof data.name === 'string' &&
    (data.medical_history === null || typeof data.medical_history === 'string') &&
    typeof data.created_at === 'string' &&
    (data.breed === null || typeof data.breed === 'string') &&
    (data.age === null || typeof data.age === 'number')
  );
}

export function isIPetArray(data: unknown): data is IPet[] {
  return Array.isArray(data) && data.every(isIPet);
}
