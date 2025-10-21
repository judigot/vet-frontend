import { IUserPayload } from '@/utils/auth/Authorization';
import { create } from 'zustand';
import axios from 'axios';

export interface IAuthContext {
  user: IUserPayload | undefined;
  setUser: (user: IUserPayload) => void;
  login: (credentials: { email: string; password: string }) => Promise<unknown>;
  logout: () => void;
}

export const useAuthStore = create<IAuthContext>()((set) => ({
  user: undefined,
  setUser: (user: IUserPayload) => {
    set({ user });
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

      set({ user });
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
    });
    void (async () => {
      await axios.post('/logout').then(() => {
        localStorage.removeItem('accessToken');
        window.location.reload();
      });
    })();
  },
}));
