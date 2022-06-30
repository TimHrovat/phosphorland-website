import React from "react";
import DashboardNavbar from "../components/dashboard-navbar/DashboardNavbar";
import DashboardContent from "../components/dashboard-content/DashboardContent";

export default function Dashboard() {
  // this state has been lifted up from content and navbar components because both need to know which trap is selected
  const [trapState, setTrapState] = React.useState();

  function handleTrapChange(trap) {
    setTrapState(trap);
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
