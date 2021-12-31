import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/logo.png";

export default function Header(): JSX.Element {
  const [headerColor, setHeaderColor] = useState("#0067FF");

  const changeColor = () => {
    const colors = ["#0067FF", "#FFC356", "#58E1A5", "#6D37DA", "#d35757"];
    const randomIndex = Math.random() * colors.length;
    setHeaderColor(colors[Math.floor(randomIndex)]);
  };

  return (
    <header onMouseEnter={changeColor} className={styles.headerContainer} style={{ borderBottomColor: headerColor }}>
      <div className={styles.header}>
        {/* TODO SEO for image here */}
        <Link to={"/"}>
          <img alt={"Semicolons website"} src={logo} className={styles.logo} />
        </Link>
        <div>
          <NavLink className={styles.pageLink} to={"/posts"}>
            Posts
          </NavLink>
          <NavLink className={styles.pageLink} to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className={styles.pageLink} to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className={styles.pageLink} to={"/about"}>
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
}
