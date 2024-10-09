/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPhoto } from '../../interfaces/IPhoto';

type IBody = Omit<IPhoto, 'photo_id' | 'created_at' | 'updated_at'>;

export const createPhoto = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/photos`,
    body: JSON.stringify(formData),
  });
  return result;
};
