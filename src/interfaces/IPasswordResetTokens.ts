/* Owner: App Scaffolder */
export interface IPasswordResetTokens {
  created_at: Date | null;
  email: number;
  token: string;
}

export function isIPasswordResetTokens(data: unknown): data is IPasswordResetTokens {
  return (
    data !== null &&
    typeof data === 'object' &&
    'created_at' in data &&
    'email' in data &&
    'token' in data &&
    typeof data.created_at === 'string' &&
    typeof data.email === 'string' &&
    typeof data.token === 'string'
  );
}

export function isIPasswordResetTokensArray(data: unknown): data is IPasswordResetTokens[] {
  return Array.isArray(data) && data.every(isIPasswordResetTokens);
}
