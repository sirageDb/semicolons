import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./mainLayout.module.scss";
export default function MainLayout({ children }: any): JSX.Element {
  const history = useHistory();

  const logout = () => {
    history.push("/auth");
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
          <NavLink to={"/Contacts"}>Contact</NavLink>
        </div>
        <div>
          <button className={styles.logoutButton} onClick={logout}>Logout</button>
        </div>
      </section>
      <div className={styles.mainContentContainer}>
        {children}
      </div>
    </div>
  );
}
