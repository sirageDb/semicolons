import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import styles from "./about.module.scss";
import meCircle from "../../assets/meCircle.png";
import brand from "../../assets/brand.png";
import logo from "../../assets/logo.svg";

export default function About(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>About me</h1>
        <div className={styles.contentContainer}>
          <div className={styles.contentText}>
            <div className={styles.section}>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionTitle}>Who am i...Simple question...complicated answer(s)</span>
              </div>
              <p className={styles.sectionExplanation}>
                My name is Sirage Al dbiyat, and I work at KOLABS as a full stack web developer. Interested in
                developing the DEV community by sharing my knowledge, writing posts, and sharing my opensource projects,
                as well as creating new solutions to existing problems using the power I have as a developer.
              </p>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionTitle}>Why semicolons</span>
              <p className={styles.sectionExplanation}>
                I originally named this website iLoveSemiColon because, obviously, as a former C++ programmer, I am a
                big fan of semicolons, but it was time for a change, and I came up with the idea to simply call it
                Semicolons :)
              </p>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionTitle}>A company ?, web agency ? , then what ?</span>
              <p className={styles.sectionExplanation}>
                No, as I previously stated, I already work at KOLABS. Semicolons is neither a company nor a web agency;
                it is simply my dev blog where I can share my experience and knowledge with others.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={meCircle} alt={"sirage al dbiyat image personal website blog"} />
        </div>
        <img src={logo} className={styles.brand} alt={"Logo semicolons"} />
      </div>
    </PageLayout>
  );
}
