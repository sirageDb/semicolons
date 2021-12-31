import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <img alt={"Semicolons website"} src={logo} className={styles.logo} />
        <div className={styles.footerUtils}>
          <div>&copy; Semicolons.dev 2022</div>
          <NavLink to={"www.google.com"}>Terms and conditions</NavLink>
        </div>
      </div>
    </footer>
  );
}
