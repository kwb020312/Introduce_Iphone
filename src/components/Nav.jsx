import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled">스토어</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">iPhone</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">AirPods</a>
          </li>
          <li>
            <a className="link-styled">TV & Home</a>
          </li>
          <li>
            <a className="link-styled">엔터테인먼트</a>
          </li>
          <li>
            <a className="link-styled">악세사리</a>
          </li>
          <li>
            <a className="link-styled">지원</a>
          </li>
          <li>
            <img src={Search} alt="Search Button" />
          </li>
          <li>
            <img src={Store} alt="Store Button" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
