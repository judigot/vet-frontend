import { routeTree } from '@/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Suspense } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '@/localizations/i18n';

import AxiosInterceptor from '@/utils/auth/AxiosInterceptor';
import { useAuthStore } from '@/useAuthStore';
import Authorization from '@/utils/auth/Authorization';

AxiosInterceptor();

const queryClient = new QueryClient();

export function HelloPetApp() {
  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      auth: useAuthStore(),
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider
          router={router}
          context={{
            auth: async () => {
              return await Authorization();
            },
          }}
        />
      </Suspense>
    </QueryClientProvider>
  );
}

export default HelloPetApp;
