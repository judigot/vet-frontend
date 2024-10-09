/* Owner: App Scaffolder */
export interface IPersonalAccessTokens {
  name: string;
  updated_at: Date | null;
  tokenable_type: string;
  tokenable_id: number;
  token: string;
  last_used_at: Date | null;
  id: number;
  expires_at: Date | null;
  created_at: Date | null;
  abilities: string | null;
}

export function isIPersonalAccessTokens(data: unknown): data is IPersonalAccessTokens {
  return (
    data !== null &&
    typeof data === 'object' &&
    'name' in data &&
    'updated_at' in data &&
    'tokenable_type' in data &&
    'tokenable_id' in data &&
    'token' in data &&
    'last_used_at' in data &&
    'id' in data &&
    'expires_at' in data &&
    'created_at' in data &&
    'abilities' in data &&
    typeof data.name === 'string' &&
    typeof data.updated_at === 'string' &&
    typeof data.tokenable_type === 'string' &&
    typeof data.tokenable_id === 'number' &&
    typeof data.token === 'string' &&
    typeof data.last_used_at === 'string' &&
    typeof data.id === 'number' &&
    typeof data.expires_at === 'string' &&
    typeof data.created_at === 'string' &&
    (data.abilities === null || typeof data.abilities === 'string')
  );
}

export function isIPersonalAccessTokensArray(data: unknown): data is IPersonalAccessTokens[] {
  return Array.isArray(data) && data.every(isIPersonalAccessTokens);
}
