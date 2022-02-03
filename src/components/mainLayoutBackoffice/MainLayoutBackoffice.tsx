import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../lib/AuthContext";
import styles from "./mainLayoutBackoffice.module.scss";


interface IProps {
  children : any ,
  pageTitle : string
}

export default function MainLayout({ children, pageTitle }: IProps): JSX.Element {

  const {logOut} = useContext(AuthContext);

  const logOutClick = async () => {
    await logOut();
  }


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
          <button className={styles.logoutButton} onClick={() => logOutClick()}>
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
