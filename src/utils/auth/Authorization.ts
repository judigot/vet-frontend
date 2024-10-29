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

async function Authorization(): Promise<IUserPayload | false> {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken === null) {
    return false;
  }

  try {
    const { data } = await axios.get<IUserPayload>(`/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const statusCode = error.response.status;

        // Handle specific status codes
        switch (statusCode) {
          case 401:
            localStorage.removeItem('accessToken');
            console.warn('Unauthorized - possibly expired or invalid token');
            break;
          case 403:
            console.warn(
              'Forbidden - you do not have permission to access this resource',
            );
            break;
          case 404:
            console.warn('Not Found - the requested resource was not found');
            break;
          case 500:
            console.warn(
              'Internal Server Error - something went wrong on the server',
            );
            break;
          case 502:
            console.warn(
              'Bad Gateway - the server received an invalid response',
            );
            break;
          case 503:
            console.warn(
              'Service Unavailable - the server is temporarily unable to handle the request',
            );
            break;
          default:
            console.warn(`API error occurred: ${String(statusCode)}`);
        }
      } else if (error.request === true) {
        console.warn('No response from the server. Possible network error.');
      } else {
        console.warn('Error setting up the request:', error.message);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }

    return false;
  }
}

export default Authorization;
