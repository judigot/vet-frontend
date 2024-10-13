/* Owner: App Scaffolder */
export interface IPhoto {
  user_id: number;
  photo_id: number;
  image_url: string;
  created_at: Date | null;
  caption: string | null;
  pet_id: number;
}

export function isIPhoto(data: unknown): data is IPhoto {
  return (
    data !== null &&
    typeof data === 'object' &&
    'user_id' in data &&
    'photo_id' in data &&
    'image_url' in data &&
    'created_at' in data &&
    'caption' in data &&
    'pet_id' in data &&
    typeof data.user_id === 'number' &&
    typeof data.photo_id === 'number' &&
    typeof data.image_url === 'string' &&
    typeof data.created_at === 'string' &&
    (data.caption === null || typeof data.caption === 'string') &&
    typeof data.pet_id === 'number'
  );
}

export function isIPhotoArray(data: unknown): data is IPhoto[] {
  return Array.isArray(data) && data.every(isIPhoto);
}
