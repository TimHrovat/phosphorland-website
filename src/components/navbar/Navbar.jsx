import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

class Navbar extends Component {
  state = { burgerActive: false, scrolled: false };

  // when burger is clicked the menu presents itself
  handleClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive });
  };

  render() {
    const { t } = this.props;

    //navbar background becomes darker on scroll for visibility purposes
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 100) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });

    return (
      <div>
        <div className={this.state.scrolled ? "nav-scrolled" : ""}></div>
        <nav className="navbar-items">
          <h1 className="navbar-logo">
            <Link to="/">{t("navbar.title")}</Link>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={
                this.state.burgerActive ? "fas fa-times" : "fas fa-bars "
              }
            ></i>
          </div>

          <ul
            className={this.state.burgerActive ? "nav-menu active" : "nav-menu"}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.link}>
                    {t(item.title)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation("common")(Navbar);
