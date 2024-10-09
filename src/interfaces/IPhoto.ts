/* Owner: App Scaffolder */
export interface IPhoto {
  photo_id: number;
  user_id: number;
  pet_id: number;
  image_url: string;
  created_at: Date | null;
  caption: string | null;
}

export function isIPhoto(data: unknown): data is IPhoto {
  return (
    data !== null &&
    typeof data === 'object' &&
    'photo_id' in data &&
    'user_id' in data &&
    'pet_id' in data &&
    'image_url' in data &&
    'created_at' in data &&
    'caption' in data &&
    typeof data.photo_id === 'number' &&
    typeof data.user_id === 'number' &&
    typeof data.pet_id === 'number' &&
    typeof data.image_url === 'string' &&
    typeof data.created_at === 'string' &&
    (data.caption === null || typeof data.caption === 'string')
  );
}

export function isIPhotoArray(data: unknown): data is IPhoto[] {
  return Array.isArray(data) && data.every(isIPhoto);
}
