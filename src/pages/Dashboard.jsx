import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/dashboard-navbar/DashboardNavbar";
import DashboardContent from "../components/dashboard-content/DashboardContent";

export default function Dashboard() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <DashboardNavbar />
        <DashboardContent />
      </div>
    </>
  );
}
