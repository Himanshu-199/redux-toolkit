import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header_outer">
      <div className="header_inner">
        <div className="nav_header_outer">
          <div className="nav_logo">
            <a className="logo_link" href="/">
              <h2>Toolkit</h2>
            </a>
          </div>
          <section className="nav_middle">
            <div className="nav_links">
              <ul className="nav_ul">
                <li className="nav_li">
                  <Link className="link" to="/employees">
                    Employees
                  </Link>
                </li>
                <li className="nav_li">
                  <Link className="link" to="/counter">
                    Counter
                  </Link>
                </li>
                <li className="nav_li">
                  <Link className="link" to="/user">
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;
