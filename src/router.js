import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";

/* Pages Import */
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate to='/404' replace />,
    },
  ]);

  return routes;
}
