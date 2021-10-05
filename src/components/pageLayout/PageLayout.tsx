import React, { ReactNode } from "react";
import styles from "./pagelayout.module.scss";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

interface IPageLayoutProps {
  children: ReactNode;
  contentMaxWidth? : number
}

export default function PageLayout({ children, contentMaxWidth }: IPageLayoutProps): JSX.Element {
  return (
    <div className={styles.mainLayoutContainer}>
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
      <main style={{maxWidth : contentMaxWidth && contentMaxWidth}} className={styles.mainContent}>{children}</main>
      <footer className={styles.footerContainer}>
        <div className={styles.footer}>
          <img alt={"Semicolons website"} src={logo} className={styles.logo} />
          <div className={styles.footerUtils}>
            <div>&copy; Semicolons.dev 2021</div>
            <NavLink to={"www.google.com"}>Terms and conditions</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
