import React from "react";
import { Button } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";

interface Props {}

const Navigation = () => (
  <div className="nav-container">
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link" href="/">
          My Car
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="/">
          My Home
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="/">
          Blog
        </a>
      </li>
      <li>
        <Button type="default" shape="round" />
      </li>
    </ul>
  </div>
);

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="clearfix bshadow0 pbs">
        <span className="icon-naked-wordmark"></span>
      </div>
      <div className="header__nav">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
