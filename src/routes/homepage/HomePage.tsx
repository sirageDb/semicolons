import React from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import emailIcon from "../../assets/emailIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { NavLink } from "react-router-dom";
import universe from "../../assets/universe.svg";
import wavyHomepageBackground from "../../assets/wavyHomePageBackground.svg";

export default function HomePage(): JSX.Element {
  return (
    <PageLayout>
      <div className={styles.pageHeading} style={{ backgroundImage: `url(${wavyHomepageBackground})` }}>
        <div className={styles.pageSloganContainer}>
          <h1 className={styles.pageSlogan}>
            My dev blog <br />A travel in the universe of a programmer
          </h1>
          <img src={universe} />
        </div>
      </div>
      My dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of a
      programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of
      a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe
      of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the
      universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in
      the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel
      in the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A
      travel in the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />
      A travel in the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog{" "}
      <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev
      blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy
      dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of a
      programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe of
      a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the universe
      of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in the
      universe of a programmerMy dev blog <br />A travel in the universe of a programmerMy dev blog <br />A travel in
      the universe of a programmerMy dev blog <br />A travel in the universe of a programmer
      <div className={styles.contactWidgetsContainer}>
        <div className={styles.contactWidget}>
          <a href={"http://github.com"}>
            <img className={styles.contatWidgetIcon} src={githubIcon} alt={"sirage al dbiyat twitter account"} />
          </a>
        </div>
        <div className={styles.contactWidget}>
          <a href={"http://twitter.com"}>
            <img className={styles.contatWidgetIcon} src={twitterIcon} alt={"sirage al dbiyat twitter account"} />
          </a>
        </div>
        <div className={styles.contactWidget}>
          <a href={"http://linkedin.com"}>
            <img className={styles.contatWidgetIcon} src={linkedinIcon} alt={"sirage al dbiyat linkedin account"} />
          </a>
        </div>
        <div className={styles.contactWidget}>
          <a href={"http://google.com"}>
            <img
              className={styles.contatWidgetIcon}
              src={emailIcon}
              alt={"sirage al dbiyat email address and contact"}
            />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
