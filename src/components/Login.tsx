import { FALLBACK_URL } from '@/api/customFetch';
import { IUserPayload } from '@/utils/auth/Authorization';
import { useAuthStore } from '@/useAuthStore';
import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation(); // Translation hook
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useAuthStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${FALLBACK_URL}/login`, { email, password })
      .then(
        ({
          data: { user, accessToken },
          status,
          statusText,
        }: {
          data: {
            accessToken: string;
            user: IUserPayload;
          };
          status: number;
          statusText: string;
        }) => {
          if (status === 200 && statusText === 'OK') {
            login({ user, accessToken });
          }
        },
      )
      .catch((error: unknown) => {
        console.error('Error logging in: ', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">{t('login')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder={t('enterEmail')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              {t('password')}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder={t('enterPassword')}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
