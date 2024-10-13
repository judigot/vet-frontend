import { IUserPayload } from '@/utils/auth/Authorization';
import { create } from 'zustand';
import axios from 'axios';

export interface IAuthContext {
  user: IUserPayload | undefined;
  isAuthenticated: boolean;
  authorize: (isAuthenticated: boolean) => void;
  login: (credentials: { email: string; password: string }) => Promise<unknown>; // Updated login signature
  logout: () => void;
}

// interface IError {
//   status: number;
//   message: string;
//   error_code: string;
// }

export const useAuthStore = create<IAuthContext>()((set) => ({
  user: undefined,
  isAuthenticated: false,
  authorize: (isAuthenticated: boolean) => {
    if (typeof isAuthenticated === 'boolean') {
      set({ isAuthenticated });
    }
  },
  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const {
        data: { user, accessToken },
      }: {
        data: {
          accessToken: string;
          user: IUserPayload;
        };
        status: number;
        statusText: string;
      } = await axios.post('/login', { email, password });

      set({ user, isAuthenticated: true });
      localStorage.setItem('accessToken', accessToken);
      window.location.reload();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  },
  logout: () => {
    set({
      user: undefined,
      isAuthenticated: false,
    });
    localStorage.removeItem('accessToken');
  },
}));
