import React from "react";
import "./styles/contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="title-slide-mobile-expand">
        <div className="sections-contact">
          <ul className="contact-info">
            <li className="info-card">
              <i class="fa-solid fa-location-dot"></i>
              <div className>
                <h1>{t("contact.section.1.title")}</h1>
                <p>{t("contact.section.1.description.1")}</p>
                <p>{t("contact.section.1.description.2")}</p>
                <p>{t("contact.section.1.description.3")}</p>
              </div>
            </li>
            <li className="info-card">
              <i class="fa-solid fa-phone"></i>
              <div>
                <h1>{t("contact.section.2.title")}</h1>
                <p>{t("contact.section.2.description")}</p>
              </div>
            </li>
            <li className="info-card">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h1>{t("contact.section.3.title")}</h1>
                <p>{t("contact.section.3.description")}</p>
              </div>
            </li>
          </ul>
          <div className="contact-form">
            <div>
              <h1>{t("contact.section.4.title")}</h1>
              <form id="contact">
                <div>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder={t("contact.section.4.description.1")}
                  ></input>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder={t("contact.section.4.description.2")}
                  ></input>
                  <textarea
                    id="message"
                    form="contact"
                    name="message"
                    placeholder={t("contact.section.4.description.3")}
                  ></textarea>
                  <input
                    type="submit"
                    value={t("contact.button")}
                    className="submit-contact"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        title="gogle maps phosphorland location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11931.303570624848!2d-8.4328008!3d41.6162765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27dcf97d57f9ada2!2sPhosphorland%20Escrit%C3%B3rio!5e0!3m2!1spt-PT!2spt!4v1621012779667!5m2!1spt-PT!2spt"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Contact;
