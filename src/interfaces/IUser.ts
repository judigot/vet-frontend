/* Owner: App Scaffolder */
export interface IUser {
  phone_number: string | null;
  updated_at: Date | null;
  user_id: number;
  created_at: Date | null;
  last_name: string;
  first_name: string;
  email: string;
  password_hash: string;
}

export function isIUser(data: unknown): data is IUser {
  return (
    data !== null &&
    typeof data === 'object' &&
    'phone_number' in data &&
    'updated_at' in data &&
    'user_id' in data &&
    'created_at' in data &&
    'last_name' in data &&
    'first_name' in data &&
    'email' in data &&
    'password_hash' in data &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    typeof data.updated_at === 'string' &&
    typeof data.user_id === 'number' &&
    typeof data.created_at === 'string' &&
    typeof data.last_name === 'string' &&
    typeof data.first_name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.password_hash === 'string'
  );
}

export function isIUserArray(data: unknown): data is IUser[] {
  return Array.isArray(data) && data.every(isIUser);
}
