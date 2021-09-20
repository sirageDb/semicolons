import React, { ReactElement } from "react";
import styles from "./pagelayout.module.scss";
import logo from "../../assets/logo.png";
import { NavLink, Link} from "react-router-dom";

interface IPageLayoutProps {
  children: ReactElement;
}

export default function PageLayout({
  children,
}: IPageLayoutProps): JSX.Element {
  return (
    <div className={styles.mainLayoutContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          {/* TODO SEO for image here */}
          <Link to={"/"}>
            <img
              alt={"Semicolons website"}
              src={logo}
              className={styles.logo}
            />
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
      {children}
      <footer className={styles.footer}>
        <img alt={"Semicolons website"} src={logo} className={styles.logo} />
      </footer>
    </div>
  );
}
