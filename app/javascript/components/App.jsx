import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PickupRequestsIndexPage } from './pages/pickup_requests/IndexPage';

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PickupRequestsIndexPage />,
  },
]);


export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
