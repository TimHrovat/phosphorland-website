import React from "react";
import DashboardNavbar from "../components/dashboard-navbar/DashboardNavbar";
import DashboardContent from "../components/dashboard-content/DashboardContent";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <DashboardNavbar />
        <DashboardContent />
      </div>
    </>
  );
}
