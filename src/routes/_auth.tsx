import { useAuthStore } from '@/useAuthStore';
import Authorization from '@/utils/auth/Authorization';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

/*****************************************************************
 * MIDDLEWARE FOR ALL AUTHENTICATED ROUTES (_auth.routeName.tsx) *
 *****************************************************************/

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ location }) => {
    const isAuthenticated = await Authorization();

    if (isAuthenticated === false) {
      return redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthRoute,
});

function AuthRoute() {
  const { logout } = useAuthStore();
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
