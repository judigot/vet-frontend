import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import '@/styles/scss/main.scss';
import { QueryClient } from '@tanstack/react-query';
import { IUserPayload } from '@/utils/auth/Authorization';

export interface IRouterContext {
  queryClient: QueryClient;
  auth: Promise<IUserPayload | false>;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  notFoundComponent: () => {
    return (
      <div className="flex items-center justify-center pb-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Custom 404 (__root.tsx)
        </h1>
      </div>
    );
  },
  component: RootComponent,
});

// export const Route = createRootRoute({
//   notFoundComponent: () => {
//     return (
//       <div className="flex items-center justify-center pb-10">
//         <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
//           Custom 404 (__root.tsx)
//         </h1>
//       </div>
//     );
//   },
//   component: RootComponent,
// });

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
