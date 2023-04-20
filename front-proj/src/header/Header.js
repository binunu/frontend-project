import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <header
      className={scrollPosition < 120 ? "original_header" : "change_header"}
    >
      <ul className="category">
        <li>
          <Link to={"/"}>
            <img className="mini-logo" src="img/minilogo.png" />
          </Link>
        </li>
        <li>
          <Link to={"/schedule"}>행사일정</Link>
        </li>
        <li>
          <Link to={"/galary"}>갤러리</Link>
        </li>
        <li>
          <Link to={"/community"}>커뮤니티</Link>
        </li>
      </ul>
    </header>

    //
  );
};
export default Header;
