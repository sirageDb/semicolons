import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";

export default function Header(): JSX.Element {
  const [headerColor, setHeaderColor] = useState("#0067FF");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const changeColor = () => {
    const colors = ["#0067FF", "#FFC356", "#58E1A5", "#6D37DA", "#d35757"];
    const randomIndex = Math.random() * colors.length;
    setHeaderColor(colors[Math.floor(randomIndex)]);
  };

  const isCurrentWinodw = (path: string): boolean => {
    if (window.location.pathname === path) {
      return true;
    }
    return false;
  };


  return (
    <header className={styles.headerContainer}>
      <div
        onMouseEnter={changeColor}
        onMouseLeave={changeColor}
        className={styles.header}
        style={{ borderColor: headerColor }}
      >
        <Link to={"/"}>
          <img alt={"Semicolons website"} src={logo} className={styles.logo} />
        </Link>
        <div className={styles.linksContainer}>
          <NavLink
            className={styles.pageLink + " " + (isCurrentWinodw("/posts") && styles.isCurrentPageLink)}
            to={"/posts"}
          >
            Posts
          </NavLink>
          <NavLink
            className={styles.pageLink + " " + (isCurrentWinodw("/projects") && styles.isCurrentPageLink)}
            to={"/projects"}
          >
            Projects
          </NavLink>
          <NavLink
            className={styles.pageLink + " " + (isCurrentWinodw("/contact") && styles.isCurrentPageLink)}
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={styles.pageLink + " " + (isCurrentWinodw("/about") && styles.isCurrentPageLink)}
            to={"/about"}
          >
            About
          </NavLink>
        </div>
        {/* ======================================================= */}
        <div className={styles.mobileNavBar} style={{ display: isChecked ? "flex" : "none" }}>
          <NavLink
            className={styles.pageLinkMobile + " " + (isCurrentWinodw("/posts") && styles.isCurrentPageLink)}
            to={"/posts"}
          >
            Posts
          </NavLink>
          <NavLink
            className={styles.pageLinkMobile + " " + (isCurrentWinodw("/projects") && styles.isCurrentPageLink)}
            to={"/projects"}
          >
            Projects
          </NavLink>
          <NavLink
            className={styles.pageLinkMobile + " " + (isCurrentWinodw("/contact") && styles.isCurrentPageLink)}
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={styles.pageLinkMobile + " " + (isCurrentWinodw("/about") && styles.isCurrentPageLink)}
            to={"/about"}
          >
            About
          </NavLink>
        </div>
        <label htmlFor="check">
          <input onClick={() => setIsChecked(!isChecked)} checked={isChecked} type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
}
