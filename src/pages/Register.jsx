import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign up");
    }
    setLoading(false);
  }

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  return (
    <div className="title-slide">
      <div className="title login-box">
        <h1 className="login-title">{t("register.title")}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="usrnm"
            name="usrnm"
            placeholder={t("register.form.usrnm")}
            className="login-input usrnm"
            ref={emailRef}
          ></input>
          <input
            type="password"
            id="pswd"
            name="pswd"
            placeholder={t("register.form.pswd")}
            className="login-input pswd"
            ref={passwordRef}
          ></input>
          <input
            type="password"
            id="pswd"
            name="pswd"
            placeholder={t("register.form.confirm-pswd")}
            className="login-input pswd"
            ref={confirmPasswordRef}
          ></input>
          <input
            type="submit"
            disabled={loading}
            className="login-submit"
            value={t("register.button")}
          ></input>
        </form>
        <p>
          {t("register.user-has-acc.paragraph") + " "}
          <Link to="/login">{t("register.user-has-acc.link")}</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
