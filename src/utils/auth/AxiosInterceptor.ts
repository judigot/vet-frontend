import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api';

export default function AxiosInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      const accessToken: string = localStorage.getItem('accessToken') ?? '';
      // const accessToken: string = getToken("accessToken");

      config.baseURL = BASE_API_URL;
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ``;

      return config;
    },

    (error) => {
      return Promise.reject(new Error(`Response error: ${String(error)}'}`));
    },
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      return Promise.reject(new Error(`Response error: ${String(error)}'}`));
    },
  );
}

export const getCookie = (cookieID: string) => {
  const name = cookieID + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (const c of ca) {
    const trimmedCookie = c.trim(); // Trim leading whitespace
    if (trimmedCookie.startsWith(name)) {
      return trimmedCookie.substring(name.length);
    }
  }
  return '';
};
