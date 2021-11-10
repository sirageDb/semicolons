import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import styles from "./about.module.scss";
import meCircle from "../../assets/meCircle.png";

export default function About(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={900}>
      <h1 className={styles.pageTitle}>About me</h1>
      <div className={styles.contentContainer}>
        <div className={styles.contentText}>
          <div className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionTitle}>Who am i .... Simple question …. complicated answer(s)</span>
            </div>
            <div className={styles.sectionExplanation}>
              My name isSirage Al dbiyat, I am a full stack web developer at KOLABS-STUDIO in Lyon, France. Also
              interested in developing the dev community by sharing my knowledge, writing posts, and sharing my
              opensource projects
            </div>
          </div>
          <div className={styles.section}>
            <span className={styles.sectionTitle}>Why semicolons</span>
            <div className={styles.sectionExplanation}>
              At the begining i named this website iLoveSemiColon, because obviously … i like semicolons, but then it
              was time for a better name and i got the idea to simply name it Semicolons :)
            </div>
          </div>
          <div className={styles.section}>
            <span className={styles.sectionTitle}>A company ?, web agency ? , then what ?</span>
            <div className={styles.sectionExplanation}>
              Nope, as i said i work at KOLABS-STUDIO, Semicolons is not a company, nor a web agency, it is only my dev
              blog where i can share with others my experience
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={meCircle} alt={"sirage al dbiyat image personal website blog"} />
        </div>
      </div>
    </PageLayout>
  );
}
