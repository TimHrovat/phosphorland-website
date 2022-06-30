import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";

export default function ConfirmEmail() {
  const navigate = useNavigate();
  const { confirmEmail, logout } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [msg, setMsg] = React.useState("verification.info");
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  // sends another verification email
  async function handleConfirmEmail(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await confirmEmail();
      setMsg("verification.info");
    } catch (err) {
      console.log(err);
      setMsg("verification.err");
    }
    setLoading(false);
    setEmailSent(true);
  }

  async function handleLogout(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await logout();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="title-slide">
        <div className="confirm-email-container">
          <h1>{t("verification.title")}</h1>
          <p>{t("verification.tip.1")}</p>
          <button
            className="prim-button"
            disabled={loading}
            onClick={handleConfirmEmail}
          >
            {t("verification.button.1")}
          </button>
          {emailSent ? <p className="info">{t(msg)}</p> : <></>}
          <p>{t("verification.tip.2")}</p>
          <button
            className="prim-button"
            onClick={() => {
              window.location.reload();
            }}
          >
            {t("verification.button.2")}
          </button>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "repeat(2, auto)",
              gap: "30px",
            }}
          >
            <button
              className="sec-btn"
              onClick={() => {
                navigate("/home");
              }}
            >
              {t("verification.button.3")}
            </button>
            <button
              disabled={loading}
              className="sec-btn"
              onClick={handleLogout}
            >
              {t("verification.button.4")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
