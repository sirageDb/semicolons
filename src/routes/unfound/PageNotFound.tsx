import React from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../components/pageLayout/PageLayout";
import styles from "./pageNotFound.module.scss";
import pageNotFoundIllustration from "../../assets/pageNotFound.svg";

export default function PageNotFound(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={1100}>
      <div className={styles.pageContent}>
        <img className={styles.illustration} src={pageNotFoundIllustration} alt={"404 page not found"} />
        <h1 className={styles.pageTitle}>404 ... page not found</h1>
        <NavLink className={styles.homepageButton} to={"/"}>
          Go back to homepage
        </NavLink>
      </div>
    </PageLayout>
  );
}
