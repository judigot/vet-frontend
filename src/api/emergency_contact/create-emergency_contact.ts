/* Owner: App Scaffolder */
import { customFetch } from '../customFetch';
import { IEmergencyContact } from '../../interfaces/IEmergencyContact';

type IBody = Omit<IEmergencyContact, 'emergency_contact_id' | 'created_at' | 'updated_at'>;

export const createEmergencyContact = async (
  formData: IBody,
): Promise<IBody | undefined> => {
  const result: IBody | undefined = await customFetch.post({
    url: `/emergency_contacts`,
    body: JSON.stringify(formData),
  });
  return result;
};
