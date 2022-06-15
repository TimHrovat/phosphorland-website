import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function ErrorPage() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <Navbar />
      <div className="title-slide">
        <div className="title">
          <h1 className="home-heading">{t("error.title")}</h1>
          <Link to="/home">
            <button className="contact-us-button">{t("error.button")}</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
