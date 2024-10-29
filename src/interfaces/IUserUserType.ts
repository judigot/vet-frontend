/* Owner: App Scaffolder */
export interface IUserUserType {
  user_id: number;
  user_type_id: number;
}

export function isIUserUserType(data: unknown): data is IUserUserType {
  return (
    data !== null &&
    typeof data === 'object' &&
    'user_id' in data &&
    'user_type_id' in data &&
    typeof data.user_id === 'number' &&
    typeof data.user_type_id === 'number'
  );
}

export function isIUserUserTypeArray(data: unknown): data is IUserUserType[] {
  return Array.isArray(data) && data.every(isIUserUserType);
}
