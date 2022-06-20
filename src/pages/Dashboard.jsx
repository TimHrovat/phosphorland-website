import React from "react";
import DashboardNavbar from "../components/dashboard-navbar/DashboardNavbar";
import DashboardContent from "../components/dashboard-content/DashboardContent";

export default function Dashboard() {
  const [trapState, setTrapState] = React.useState();

  function handleTrapChange(trap) {
    setTrapState(trap);
    console.log(trap);
  }

  return (
    <>
      <div className="dashboard">
        <DashboardNavbar setTrapState={handleTrapChange} />
        <DashboardContent trapID={trapState} />
      </div>
    </>
  );
}
