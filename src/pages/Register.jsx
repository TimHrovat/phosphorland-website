import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signup, confirmEmail } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // checks if password and password confirmation are the same
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("register.error.password-match");
    }
    // checks if the password is the appropriate length
    if (passwordRef.current.value.length < 6) {
      return setError("register.error.password-length");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await confirmEmail();
      navigate("/dashboard");
    } catch {
      setError("register.error.failed");
    }
    setLoading(false);
  }

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  return (
    <>
      <Navbar />
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
              id="confpswd"
              name="pswd"
              placeholder={t("register.form.confirm-pswd")}
              className="login-input pswd"
              ref={confirmPasswordRef}
            ></input>
            <span className="error">{t(error)}</span>
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
      <Footer />
    </>
  );
}

export default Register;
