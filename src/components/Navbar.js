import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="Nav-items">
        <h1 className="Nav-logo">Anguiano</h1>
        <div className="Menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, i) => {
            return (
              <li key={i}>
                <Link key={i} className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
