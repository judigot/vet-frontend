/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IPhoto } from '../../interfaces/IPhoto';

type IBody = IPhoto;

export const updatePhoto = async (formData: IBody): Promise<IBody> => {
  const result: IBody = await customFetch.patch({
    url: `/photos`,
    body: JSON.stringify(formData),
  });
  return result;
};
