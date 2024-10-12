import { FALLBACK_URL } from '@/api/customFetch';
import axios from 'axios';

export interface IUserPayload {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  user_types: string;
}

async function Authorization() {
  try {
    const { data, status, statusText } = await axios.get<IUserPayload>(
      `${FALLBACK_URL}/authorize`,
    );
    if (status === 200 && statusText === 'OK') {
      return data;
    }
  } catch (error: unknown) {
    if (error instanceof Error) return false;
  }
}

export default Authorization;
