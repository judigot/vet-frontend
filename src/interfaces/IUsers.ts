/* Owner: App Scaffolder */
export interface IUsers {
  email_verified_at: Date | null;
  updated_at: Date | null;
  remember_token: string | null;
  password: string;
  name: string;
  id: number;
  email: string;
  created_at: Date | null;
}

export function isIUsers(data: unknown): data is IUsers {
  return (
    data !== null &&
    typeof data === 'object' &&
    'email_verified_at' in data &&
    'updated_at' in data &&
    'remember_token' in data &&
    'password' in data &&
    'name' in data &&
    'id' in data &&
    'email' in data &&
    'created_at' in data &&
    typeof data.email_verified_at === 'string' &&
    typeof data.updated_at === 'string' &&
    (data.remember_token === null || typeof data.remember_token === 'string') &&
    typeof data.password === 'string' &&
    typeof data.name === 'string' &&
    typeof data.id === 'number' &&
    typeof data.email === 'string' &&
    typeof data.created_at === 'string'
  );
}

export function isIUsersArray(data: unknown): data is IUsers[] {
  return Array.isArray(data) && data.every(isIUsers);
}
