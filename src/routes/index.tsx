import Authorization from '@/utils/auth/Authorization';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ location }) => {
    const isAuthenticated = await Authorization();

    if (isAuthenticated !== false) {
      return redirect({
        to: '/appointments',
        search: {
          redirect: location.href,
        },
      });
    } else {
      return redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
