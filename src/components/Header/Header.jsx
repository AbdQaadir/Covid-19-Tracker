import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import LogoIcon from "./logo-icon.svg";
import LogoText from "./logo-text.svg";

import "./Header.css";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeNav: "HOME",
    };
  }
  handleActive = (e) => {
    this.setState({
      activeNav: e.target.innerHTML,
    });
  };
  render() {
    const { currentDate } = this.props;
    let date = new Date(currentDate);
    const matchDate = {
      1: "January",
      2: "Febuary",
      3: "March",
      5: "April",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    return (
      <Router>
        <div className="row justify-content-start align-items-center py-1 px-5 nav">
          <div className="col-3">
            <p className="py-3">
              <img src={LogoIcon} className=" mr-2" alt="" />
              <img src={LogoText} className="" alt="" />
            </p>
          </div>

          <div className="col-3">
            <ul className="list-unstyled nav-ul d-flex">
              <li
                className={this.state.activeNav === "HOME" ? "active" : null}
                onClick={(e) => this.handleActive(e)}
              >
                <Link smooth to="/">
                  HOME
                </Link>
              </li>
              <li
                className={
                  this.state.activeNav === "SYMPTOMS" ? "active" : null
                }
                onClick={(e) => this.handleActive(e)}
              >
                <Link smooth to="#symptoms">
                  SYMPTOMS
                </Link>
              </li>
              <li
                className={
                  this.state.activeNav === "PROTECTION" ? "active" : null
                }
                onClick={(e) => this.handleActive(e)}
              >
                <Link to="#protection">PROTECTION</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <p className="updated-time">
              Updated: {matchDate[date.getMonth() + 1] || "MM"}{" "}
              {date.getDay() || "DD"}, {date.getFullYear() || "YYYY"}
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;
