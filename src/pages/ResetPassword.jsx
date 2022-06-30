import React, { useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [emailSendSuccess, setEmailSendSuccess] = useState(false);
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  //eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  // this function sends a reset password email
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setEmailSendSuccess(false);
      if (emailRef.current.value === "") setError("resetpswd.error.invalid");
      else {
        await resetPassword(emailRef.current.value);
        setError("resetpswd.error.success");
        setEmailSendSuccess(true);
        await setTimeout(() => navigate("/login"), 5000);
      }
    } catch (e) {
      console.log(e);
      setError("resetpswd.error.basic");
      setEmailSendSuccess(false);
    }
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="title-slide">
        <div className="title login-box">
          <h1 className="login-title">{t("resetpswd.title")}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="usrnm"
              name="usrnm"
              placeholder={t("resetpswd.form.email")}
              className="login-input usrnm"
              ref={emailRef}
            ></input>
            <span className={emailSendSuccess ? "success" : "error"}>
              {t(error)}
            </span>
            <input
              type="submit"
              disabled={loading}
              className="login-submit"
              value={t("resetpswd.button")}
            ></input>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
