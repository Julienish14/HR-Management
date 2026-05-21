import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { RouteConfig } from "./Routes.types";

// Lazy load pages
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("./Pages/DashboardPage/DashboardPage"));

const routes: RouteConfig[] = [
  {
    path: "/login",
    element: <LoginPage />,
    title: "Login",
  },
  // Add more routes here
];

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes> */}
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
