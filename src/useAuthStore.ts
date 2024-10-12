import { IUserPayload } from '@/utils/auth/Authorization';
import { create } from 'zustand';

export interface IAuthContext {
  user: IUserPayload | undefined;
  isAuthenticated: boolean;
  authorize: (isAuthenticated: boolean) => void;
  login: (payload: { user: IUserPayload; accessToken: string }) => void; // Accept accessToken as a parameter
  logout: () => void;
}

export const useAuthStore = create<IAuthContext>()((set) => ({
  user: undefined,
  isAuthenticated: false,
  authorize: (isAuthenticated: boolean) => {
    set({ isAuthenticated });
  },
  login: ({ user, accessToken }) => {
    set({ user, isAuthenticated: true });
    localStorage.setItem('accessToken', accessToken);
    window.location.reload();
  },
  logout: () => {
    set({
      user: undefined,
      isAuthenticated: false,
    });
    localStorage.removeItem('accessToken');
    window.location.reload();
  },
}));
