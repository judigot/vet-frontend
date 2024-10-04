import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Register() {
  const { t } = useTranslation(); // Translation hook
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error(t('passwordMismatch'));
      return;
    }

    // Reset form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">{t('register')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder={t('enterName')}
            />
          </div>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="confirm-password"
            >
              {t('confirmPassword')}
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder={t('confirmPasswordPlaceholder')}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
