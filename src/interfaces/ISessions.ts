/* Owner: App Scaffolder */
export interface ISessions {
  id: number;
  ip_address: string | null;
  last_activity: number;
  payload: string;
  user_agent: string | null;
  user_id: number | null;
}

export function isISessions(data: unknown): data is ISessions {
  return (
    data !== null &&
    typeof data === 'object' &&
    'id' in data &&
    'ip_address' in data &&
    'last_activity' in data &&
    'payload' in data &&
    'user_agent' in data &&
    'user_id' in data &&
    typeof data.id === 'string' &&
    (data.ip_address === null || typeof data.ip_address === 'string') &&
    typeof data.last_activity === 'number' &&
    typeof data.payload === 'string' &&
    (data.user_agent === null || typeof data.user_agent === 'string') &&
    (data.user_id === null || typeof data.user_id === 'number')
  );
}

export function isISessionsArray(data: unknown): data is ISessions[] {
  return Array.isArray(data) && data.every(isISessions);
}
