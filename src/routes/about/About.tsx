import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import styles from "./about.module.scss";
import meCircle from "../../assets/meCircle.png";
import brand from "../../assets/brand.png";
import logo from "../../assets/logo.png";

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
                My name is Sirage Al dbiyat, I am a full stack web developer at KOLABS. Interested in creating new
                solutions to existing problems using the power i have as a developer, also developing the DEV community
                by sharing my knowledge, writing posts, and sharing my opensource projects.{" "}
              </p>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionTitle}>Why semicolons</span>
              <p className={styles.sectionExplanation}>
                At the begining i named this website iLoveSemiColon, because obviously as a former C++ programmer i am
                so attached to semicolons, but then it was time for a better name and i got the idea to simply name it
                Semicolons :)
              </p>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionTitle}>A company ?, web agency ? , then what ?</span>
              <p className={styles.sectionExplanation}>
                Nope, as i said i already work at KOLABS, Semicolons is not a company, nor a web agency, it is only my
                dev blog where i can share with others my experience and knowledge.
              </p>
            </div>
          </div>
        </div>
        {/* <img src={brand} className={styles.brand} alt={"Logo semicolons"}/> */}
        <div className={styles.imageContainer}>
          <img className={styles.image} src={meCircle} alt={"sirage al dbiyat image personal website blog"} />
        </div>
        <img src={logo} className={styles.brand} alt={"Logo semicolons"} />
      </div>
    </PageLayout>
  );
}
