import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { IndexPage } from './pages/pickup_requests/IndexPage';
import { NewPage } from './pages/pickup_requests/NewPage';
import {ShowPage} from "./pages/pickup_requests/ShowPage";

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/pickup_requests/new",
    element: <NewPage />,
  },
  {
    path: "/pickup_requests/:id",
    element: <ShowPage />,
  },
]);


export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
