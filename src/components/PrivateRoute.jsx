import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <Navigate to="/login" />;
}
