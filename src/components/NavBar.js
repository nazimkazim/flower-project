import React, { Component } from "react";
//import logo from "../images/logo.svg";
//import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {/* <img src={logo} width="112" height="28" alt="" /> */}
            FL-HOUSE
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/flowers">
              Цветы
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="">
                Бизнес
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="">
                  Свадьбы
                </Link>
                <Link className="navbar-item" to="">
                  Торжества
                </Link>
                <Link className="navbar-item" to="">
                  День рождения
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="">
                  Праздники
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <>
                <div
                  className="navbar-item"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    +7-777-348-6518
                  </span>
                </div>
              </>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
