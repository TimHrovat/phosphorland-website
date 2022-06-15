import React from "react";
import FadeInOut from "../components/animations/FadeInOut";
import "./styles/cards.css";
import "./styles/small_cards.css";
import { Link } from "react-router-dom";
import { SmallCardsList } from "./SmallCardsList";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Home() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <Navbar />
      <div className="title-slide">
        <div className="title">
          <FadeInOut show={true} duration={800}>
            <h1 className="home-heading">{t("home.title")}</h1>
            <h2>{t("home.subtitle")}</h2>
          </FadeInOut>
        </div>
      </div>
      <div className="content">
        <div className="HomeCard">
          <h1 className="card-title">{t("home.content.main.title")}</h1>
          <p className="description">
            {t("home.content.main.description-first")}
          </p>
          <p className="description">
            {t("home.content.main.description-second")}
          </p>
          <div className="sections">
            <div>
              <h2 className="section-title">
                {t("home.content.main.list.title")}
              </h2>
              <ul>
                <li className="check-mark-list">
                  {t("home.content.main.list.item.1")}
                </li>
                <li className="check-mark-list">
                  {t("home.content.main.list.item.2")}
                </li>
                <li className="check-mark-list">
                  {t("home.content.main.list.item.3")}
                </li>
                <li className="check-mark-list">
                  {t("home.content.main.list.item.4")}
                </li>
                <li className="check-mark-list">
                  {t("home.content.main.list.item.5")}
                </li>
              </ul>
            </div>
            <div>
              <p className="description">
                {t("home.content.main.description-third")}
              </p>
              <Link to="/contact">
                <button className="contact-us-button">
                  {t("home.content.main.contact-button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="HomeCard">
          <h1 className="features-title">{t("home.content.cards.title")}</h1>
          <ul className="small-cards-list">
            {SmallCardsList.map((card, index) => {
              return (
                <li key={index} className="small-card">
                  <img
                    className="small-card-icon"
                    src={card.icon}
                    alt={card.title}
                  />
                  <h3 className="small-card-title">{t(card.title)}</h3>
                  <p className="small-card-description">
                    {t(card.description)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
