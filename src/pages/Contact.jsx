import React, { useRef, useState } from "react";
import "./styles/contact.css";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Contact() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  const fname = useRef();
  const email = useRef();
  const text = useRef();
  const [message, setMessage] = useState();

  // sends email when user submits the form
  function handleSubmit(e) {
    const data = {
      fullname: fname.current.value,
      email: email.current.value,
      text: "\n" + text.current.value,
    };
    console.log(JSON.stringify(data));

    // if backend runs on localhost use this code
    // fetch("http://127.0.0.1:8080/post", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     window.location.reload(false);
    //   })
    //   .catch((err) => console.log(err));

    // sends a post request to the NodeJS backend which sends an email using nodemailer
    fetch("https://pb.timhrovat.com/post", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setMessage("Message sent successfully");
        // clears the form --
        // shorter with window.location.reload() but netlify gave me an error everytime the page gets reloaded
        fname.current.value = "";
        email.current.value = "";
        text.current.value = "";
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <div className="title-slide-mobile-expand">
        <ul className="contact-info">
          <li className="info-card">
            <i className="fa-solid fa-location-dot"></i>
            <div className>
              <h1>{t("contact.section.1.title")}</h1>
              <p>{t("contact.section.1.description.1")}</p>
              <p>{t("contact.section.1.description.2")}</p>
              <p>{t("contact.section.1.description.3")}</p>
            </div>
          </li>
          <li className="info-card">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h1>{t("contact.section.2.title")}</h1>
              <p>{t("contact.section.2.description")}</p>
            </div>
          </li>
          <li className="info-card">
            <i className="fa-solid fa-envelope"></i>
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
                  ref={fname}
                  placeholder={t("contact.section.4.description.1")}
                ></input>
                <input
                  type="text"
                  id="email"
                  name="email"
                  ref={email}
                  placeholder={t("contact.section.4.description.2")}
                ></input>
                <textarea
                  id="message"
                  form="contact"
                  name="message"
                  ref={text}
                  placeholder={t("contact.section.4.description.3")}
                ></textarea>
              </div>
            </form>
            <p className="contact-message">{message}</p>
            <button
              type="submit"
              className="submit-contact"
              onClick={handleSubmit}
            >
              {t("contact.button")}
            </button>
          </div>
        </div>
      </div>
      <iframe
        title="gogle maps phosphorland location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11931.303570624848!2d-8.4328008!3d41.6162765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27dcf97d57f9ada2!2sPhosphorland%20Escrit%C3%B3rio!5e0!3m2!1spt-PT!2spt!4v1621012779667!5m2!1spt-PT!2spt"
        loading="lazy"
      ></iframe>
      <Footer />
    </>
  );
}

export default Contact;
