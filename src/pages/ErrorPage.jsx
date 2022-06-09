import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ErrorPage() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="title-slide">
        <div className="title">
          <h1 className="home-heading">{t("error.title")}</h1>
          <Link to="/home">
            <button className="contact-us-button">{t("error.button")}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
