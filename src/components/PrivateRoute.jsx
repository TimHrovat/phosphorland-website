import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";
import firebase from "firebase/compat/app";
import ConfirmEmail from "../pages/ConfirmEmail";

// before users are able to access dashboard they need to be authenticated and have their email verified
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
