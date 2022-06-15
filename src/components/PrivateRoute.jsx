import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";
import firebase from "firebase/compat/app";
import ConfirmEmail from "../pages/ConfirmEmail";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? (
    firebase.auth().currentUser.emailVerified ? (
      <Dashboard />
    ) : (
      <ConfirmEmail />
    )
  ) : (
    <Navigate to="/login" />
  );
}
