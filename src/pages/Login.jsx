import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  return (
    <div className="title-slide">
      <div className="title login-box">
        <h1 className="login-title">{t("login.title")}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="usrnm"
            name="usrnm"
            placeholder={t("login.form.usrnm")}
            className="login-input usrnm"
            ref={emailRef}
          ></input>
          <input
            type="password"
            id="pswd"
            name="pswd"
            placeholder={t("login.form.pswd")}
            className="login-input pswd"
            ref={passwordRef}
          ></input>
          <input
            type="submit"
            disabled={loading}
            className="login-submit"
            value={t("login.button")}
          ></input>
        </form>
        <p>
          {t("login.user-without-acc.paragraph") + " "}
          <Link to="/register">{t("login.user-without-acc.link")}</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
