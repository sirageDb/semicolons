import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./mainLayoutBackoffice.module.scss";


interface IProps {
  children : any ,
  pageTitle : string
}

export default function MainLayout({ children, pageTitle }: IProps): JSX.Element {
  const history = useHistory();

  const logout = () => {
    const isConfirmedLogout = window.confirm(
      "Are You sure you want to logout ?"
    );
    if (isConfirmedLogout) {
      history.push("/auth");
    }
  };

  return (
    <div className={styles.mainLayoutContainer}>
      <section className={styles.sidenav}>
        <div className={styles.link}>
          <NavLink to={"/backoffice/projects"}>Projects</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to={"/backoffice/posts"}>Posts</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to={"/backoffice/contacts"}>Contacts</NavLink>
        </div>
        <div>
          <button className={styles.logoutButton} onClick={logout}>
            Logout
          </button>
        </div>
      </section>
      <div className={styles.mainContentContainer}>
        <div className={styles.mainContent}>
          <h2 className={styles.pageTitle}>{pageTitle}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
