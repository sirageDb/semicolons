import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./mainLayout.module.scss";
export default function MainLayout({ children, pageTitle }: any): JSX.Element {
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
    <div>
      <section className={styles.container}>
        <div>
          <NavLink to={"/"}>Homepage</NavLink>
        </div>
        <div>
          <NavLink to={"/projects"}>Projects</NavLink>
        </div>
        <div>
          <NavLink to={"/posts"}>Posts</NavLink>
        </div>
        <div>
          <NavLink to={"/Contacts"}>Contacts</NavLink>
        </div>
        <div>
          <button className={styles.logoutButton} onClick={logout}>
            Logout
          </button>
        </div>
      </section>
      <div className={styles.mainContentContainer}>
        <h2>{pageTitle}</h2>
        {children}</div>
    </div>
  );
}
