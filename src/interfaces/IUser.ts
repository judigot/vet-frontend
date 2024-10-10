/* Owner: App Scaffolder */
export interface IUser {
  updated_at: Date | null;
  user_id: number;
  phone_number: string | null;
  password_hash: string;
  last_name: string;
  first_name: string;
  email: string;
  created_at: Date | null;
}

export function isIUser(data: unknown): data is IUser {
  return (
    data !== null &&
    typeof data === 'object' &&
    'updated_at' in data &&
    'user_id' in data &&
    'phone_number' in data &&
    'password_hash' in data &&
    'last_name' in data &&
    'first_name' in data &&
    'email' in data &&
    'created_at' in data &&
    typeof data.updated_at === 'string' &&
    typeof data.user_id === 'number' &&
    (data.phone_number === null || typeof data.phone_number === 'string') &&
    typeof data.password_hash === 'string' &&
    typeof data.last_name === 'string' &&
    typeof data.first_name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.created_at === 'string'
  );
}

export function isIUserArray(data: unknown): data is IUser[] {
  return Array.isArray(data) && data.every(isIUser);
}
