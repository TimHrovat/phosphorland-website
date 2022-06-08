import React from "react";
import "./styles/contact.css";

function Contact() {
  return (
    <div className="title-slide-mobile-expand">
      <div className="sections-contact">
        <ul className="contact-info">
          <li className="info-card">
            <i class="fa-solid fa-location-dot"></i>
            <div className>
              <h1>Address</h1>
              <p>R. do Conhecimento no10,</p>
              <p>Braga, Portugal</p>
              <p>4730-575</p>
            </div>
          </li>
          <li className="info-card">
            <i class="fa-solid fa-phone"></i>
            <div>
              <h1>Phone</h1>
              <p>+351 966 586 020</p>
            </div>
          </li>
          <li className="info-card">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <h1>Email</h1>
              <p>Info@phosphorland.pt</p>
            </div>
          </li>
        </ul>
        <div className="contact-form">
          <div>
            <h1>Contact Us</h1>
            <form id="contact">
              <div>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Full Name"
                ></input>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></input>
                <textarea
                  id="message"
                  form="contact"
                  name="message"
                  placeholder="Enter Message"
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  className="submit-contact"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
