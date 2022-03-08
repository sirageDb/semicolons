import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <img alt={"Semicolons website"} src={logo} className={styles.logo} />
        <div>&copy;Semicolons.dev 2022</div>
      </div>
    </footer>
  );
}
