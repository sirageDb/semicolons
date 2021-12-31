import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/logo.png";


export default function Header() : JSX.Element {
    return (
        <header className={styles.headerContainer}>
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