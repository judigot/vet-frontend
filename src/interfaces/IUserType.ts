/* Owner: App Scaffolder */
export interface IUserType {
  type_name: string;
  user_type_id: number;
}

export function isIUserType(data: unknown): data is IUserType {
  return (
    data !== null &&
    typeof data === 'object' &&
    'type_name' in data &&
    'user_type_id' in data &&
    typeof data.type_name === 'string' &&
    typeof data.user_type_id === 'number'
  );
}

export function isIUserTypeArray(data: unknown): data is IUserType[] {
  return Array.isArray(data) && data.every(isIUserType);
}
