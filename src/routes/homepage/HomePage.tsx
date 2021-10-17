import React from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { Link } from "react-router-dom";
import PostCell from "../../components/postCell/PostCell";
//images
//====================
import testpostcellimage from "../../assets/testpostcellimage.svg";
import blob from "../../assets/blob.svg";

//TODO an astroid from the sky when scrolling ...
export default function HomePage(): JSX.Element {
  const Tag = ({ text }: any) => {
    return <div className={styles.singleTag}># {text}</div>;
  };

  return (
    <PageLayout>
      <div className={styles.pageHeading}>
        <div className={styles.pageSloganContainer}>
          <h1 className={styles.pageSlogan}>
            Hey !, I am Sirage, welcome to my Semicolons zone where i share my tech knowledge
          </h1>
          <div className={styles.pageExpanation}>
            As a full stack web developer i can work on various stages of a web or a mobile app development as well as
            their full development lifecycle,
          </div>
        </div>
        <div className={styles.contactWidgetsContainer}>
          <div>
            <div className={styles.contactWidgetContainer + " " + styles.githubButton}>
              <a
                className={styles.contactWidget}
                href={"https://github.com/sirageDb"}
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className={styles.contatWidgetIcon}
                  src={githubIcon}
                  alt={"sirage al dbiyat semicolons github opensource account"}
                />
                <div className={styles.widgetText}>SirageDb</div>
              </a>
            </div>
          </div>
          <div>
            <div className={styles.contactWidgetContainer + " " + styles.twitterButton}>
              <a
                className={styles.contactWidget}
                href={"https://twitter.com/ilovesemicolon/"}
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className={styles.contatWidgetIcon}
                  src={twitterIcon}
                  alt={"sirage al dbiyat semicolons twitter account"}
                />
                <div className={styles.widgetText}>iLoveSemicolon</div>
              </a>
            </div>
          </div>
          <div className={styles.contactWidgetContainer + " " + styles.linkedinButton}>
            <a
              className={styles.contactWidget}
              href={"https://www.linkedin.com/in/sirage-al-dbiyat/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className={styles.contatWidgetIcon}
                src={linkedinIcon}
                alt={"sirage al dbiyat semicolons linkedin account"}
              />
              <div className={styles.widgetText}>Sirage Al Dbiyat</div>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================================= */}
      <section className={styles.sectionPost}>
        <div className={styles.sectionPostData}>
          <div className={styles.sectionPostSloganContainer}>
            <h2 className={styles.sectionPostSlogan}>
              In Semicolons blog you can find posts about various subjects in the tech industry
            </h2>
            <div className={styles.postsButtonContainer}>
              <Link to={"/posts"}>
                <button className={styles.postsButton}>All my posts</button>
              </Link>
            </div>
          </div>
          <div>
            <h2 className={styles.sectionPostTitle}>Lastest post</h2>
            <PostCell
              image={testpostcellimage}
              imgaeAlt={"this is image alt"}
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
        </div>
      </section>
      {/* ============================================================================= */}
      <section className={styles.projectSection} style={{ backgroundImage: `url(${blob})` }}>
        <div>
          <h2 className={styles.projectSectionTitle}>Technologies and languages i use the most <span className={styles.exeptionalText}>(beside english, french, arabic)</span></h2>
        </div>
        <div className={styles.projectSectionDataContainer}>
          <div className={styles.tagsContainer}>
            <Tag text={"Javascript"} />
            <Tag text={"Typescript"} />
            <Tag text={"Python"} />
            <Tag text={"Django"} />
            <Tag text={"Devops"} />
            <Tag text={"Docker"} />
            <Tag text={"GraphQl"} />
            <Tag text={"jQuery"} />
            <Tag text={"NodeJs"} />
            <Tag text={"React"} />
            <Tag text={"React Native"} />
            <Tag text={"MySQL"} />
            <Tag text={"Open Source"} />
            <Tag text={"Scrum"} />
            <Tag text={"MongoDb"} />
            <Tag text={"Testing"} />
            <Tag text={"React testing library"} />
            <Tag text={"Jest"} />
            <Tag text={"Google cloud platform"} />
            <Tag text={"Nginx"} />
            <Tag text={"Linux"} />
            <Tag text={"Git"} />
            <Tag text={"Github"} />
            <Tag text={"GitLab"} />
          </div>
          <Link to={"/projects"}>
            <button className={styles.projectsButton}>My projects zone</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
