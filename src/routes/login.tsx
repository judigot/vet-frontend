import { createFileRoute, redirect } from '@tanstack/react-router';
import Authorization from '@/utils/auth/Authorization';
import Login from '@/components/Login';

export const Route = createFileRoute('/login')({
  beforeLoad: async ({ location }) => {
    const isAuthenticated = await Authorization();
    if (isAuthenticated !== false) {
      return redirect({
        to: '/appointments',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Login,
});
