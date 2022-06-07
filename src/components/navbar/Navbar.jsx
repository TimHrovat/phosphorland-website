import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { active: false, scrolled: false };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 300) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });

    return (
      <div>
        <div className={this.state.scrolled ? "nav" : ""}></div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link to="/">Smart Traps</Link>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.active ? "fas fa-times" : "fas fa-bars "}
            ></i>
          </div>

          <ul className={this.state.active ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.link}>
                    {item.title}
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

export default Navbar;
