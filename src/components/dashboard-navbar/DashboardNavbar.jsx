import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./dashboard-navbar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DashboardNavbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  async function handleSignOut() {
    try {
      setLoading(true);
      await logout();
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <>
      <aside>
        <div className="user-info">
          <div className="user-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <p>{currentUser.email}</p>
        </div>
        <div className="trap-list"></div>
        <div className="buttons">
          <button
            className="dashboard-button home"
            onClick={() => {
              navigate("/home");
            }}
          >
            {t("dashboard.navbar.button.home")}
          </button>
          <button
            className="dashboard-button logout"
            disabled={loading}
            onClick={handleSignOut}
          >
            {t("dashboard.navbar.button.logout")}
          </button>
        </div>
      </aside>
    </>
  );
}
