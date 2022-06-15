import React from "react";
import auth from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./dashboard-navbar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DashboardNavbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [t, i18n] = useTranslation("common");

  async function handleSignOut() {
    try {
      setError("");
      setLoading(true);
      await logout();
      navigate("/home");
    } catch {
      setError("Could not sign out");
    }
    setLoading(false);
  }

  return (
    <>
      <aside>
        <div className="user-info">
          <div className="user-icon">
            <i class="fa-solid fa-user"></i>
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
            disable={loading}
            onClick={handleSignOut}
          >
            {t("dashboard.navbar.button.logout")}
          </button>
        </div>
      </aside>
    </>
  );
}
