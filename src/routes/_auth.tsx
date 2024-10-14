import { useAuthStore } from '@/useAuthStore';
import { IUserPayload } from '@/utils/auth/Authorization';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useEffect } from 'react';

/*****************************************************************
 * MIDDLEWARE FOR ALL AUTHENTICATED ROUTES (_auth.routeName.tsx) *
 *****************************************************************/

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context }) => {
    const user = await context.auth;

    if (user === false) {
      return redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  loader: async ({ context }) => {
    const user = await context.auth;
    return user;
  },
  component: AuthRoute,
});

function AuthRoute() {
  const user: IUserPayload = Route.useLoaderData();

  const { setUser, logout } = useAuthStore();

  useEffect(() => {
    setUser(user);
  }, [setUser, user]);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">Hello Pet</div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
