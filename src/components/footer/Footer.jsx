import React, { Component } from "react";
import { SocialMediaItems } from "./SocialMediaItems";

import "./Footer.css";
// eslint-disable-next-line
import { t } from "i18next";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
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
          {t("footer.title.left-paragraph")}
          <strong>Phosphorland</strong>
          {t("footer.title.right-paragraph")}
        </div>
        <div className="powered-by">
          {t("footer.subtitle.paragraph")}
          <a
            className="phosphor-green"
            href="https://www.linkedin.com/in/tim-hrovat-4255b61a6/"
          >
            @TimHrovat
          </a>
        </div>
      </footer>
    );
  }
}

export default withTranslation("common")(Footer);
