import React from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import emailIcon from "../../assets/emailIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { Link } from "react-router-dom";
import universe from "../../assets/universe.svg";
import wavyHomepageBackground from "../../assets/wavyHomePageBackground.svg";
import PostCell from "../../components/postCell/PostCell";
//images
//====================
import testpostcellimage from "../../assets/testpostcellimage.svg";
import spaceshipIllustration from "../../assets/spaceshipIllustration.svg";
import spaceHomepageBackground from "../../assets/spaceHomepageBackground.svg";

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
      {/* ============================================================================= */}
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
      {/* ============================================================================= */}
      <section className={styles.sectionPost}>
        <h2 className={styles.sectionPostTitle}>Lastest post</h2>
        <div className={styles.sectionPostExplanation}>Evolve your technical knowledge</div>

        <div className={styles.sectionPostData}>
          <div className={styles.sectionPostLeftContainer}>
            <div>
              <img src={spaceshipIllustration} alt={"Get new dev knowledge"} />
            </div>
            <Link to={"/posts"}>
              <button className={styles.postsButton}>All my posts</button>
            </Link>
          </div>

          <PostCell
            image={testpostcellimage}
            imgaeAlt = {"this is image alt"}
            title={"this is post cell title"}
            tags={["javascript", "devos", "frontend", "devos", "frontend"]}
            publishDate={"08/10/2021"}
            updatedDate={"08/10/2021"}
            views={22}
            readingTime={20}
            likeInteractions={15}
            ideaIneractions={15}
            postSlug={"this-is-post-cell"}
          />
        </div>
      </section>
      {/* ============================================================================= */}
      <section className={styles.projectSection} style={{ backgroundImage: `url(${spaceHomepageBackground})` }}>
        <div className={styles.projectSectionDataContainer}>
          <p className={styles.projectSectionExplanation}>
            Navigate to my orbit, check my projects, some of them are also open source !, <br />I mostly work on
            javascript technologies, web development, mobile development, devops and cloud technologies
          </p>
          <Link to={"/projects"}>
              <button className={styles.projectsButton}>All my projects</button>
            </Link>
        </div>
      </section>
    </PageLayout>
  );
}
