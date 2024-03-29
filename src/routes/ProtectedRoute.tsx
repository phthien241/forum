import { useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return authStatus === "authenticated" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
