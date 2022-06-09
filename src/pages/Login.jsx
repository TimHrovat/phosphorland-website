import React from "react";
import { useTranslation } from "react-i18next";

function Login() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  return (
    <div className="title-slide">
      <div className="title login-box">
        <h1 className="login-title">{t("login.title")}</h1>
        <form>
          <input
            type="text"
            id="usrnm"
            name="usrnm"
            placeholder={t("login.form.usrnm")}
            className="login-input usrnm"
          ></input>
          <input
            type="text"
            id="pswd"
            name="pswd"
            placeholder={t("login.form.pswd")}
            className="login-input pswd"
          ></input>
          <input
            type="submit"
            className="login-submit"
            value={t("login.button")}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
