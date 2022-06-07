import React, { Component } from "react";
import { SocialMediaItems } from "./SocialMediaItems";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="socials-list">
          {SocialMediaItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <img
                    className="social-icon"
                    src={item.icon}
                    alt={item.title}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="copyright">
          © Copyright <strong>Phosphorland</strong>. All Rights Reserved{" "}
        </div>
        <div className="powered-by">
          Powered by&nbsp;
          <a
            className="phosphor-green"
            href="https://www.linkedin.com/in/tim-hrovat-4255b61a6/"
          >
            @TimHrovat
          </a>
          &nbsp; & &nbsp;
          <a
            className="phosphor-green"
            href="https://www.linkedin.com/in/mark-ilovar-771566220/"
          >
            @MarkIlovar
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
