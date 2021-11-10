import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { Link } from "react-router-dom";
import PostCell from "../../components/postCell/PostCell";
import apiEndPoint from "../../config/apiEndPoint";
//images
//====================
import blob from "../../assets/blob.svg";
import wavyHomePageBackground from "../../assets/wavyHomePageBackground.svg";
import headIllustration from "../../assets/headIllustration.svg";
import { IPost } from "../../lib/types";
import dateFormatter from "../../lib/dateFormatter";

//TODO an astroid from the sky when scrolling ...
export default function HomePage(): JSX.Element {
  const [postData, setPostData] = useState<IPost>();

  useEffect(() => {
    getLastPost();
  }, []);

  const getLastPost = async () => {
    const apiResponse = await fetch(apiEndPoint + "/post/getposts?latest=true");
    const extractedData = await apiResponse.json();
    setPostData(extractedData);
  };

  const Tag = ({ text }: any) => {
    return <div className={styles.singleTag}>#&nbsp; {text}</div>;
  };

  return (
    <PageLayout>
      <div className={styles.pageHeadingContainer} style={{ backgroundImage: `url(${wavyHomePageBackground})` }}>
        <div className={styles.pageHeading}>
          <div className={styles.pageSloganContainer + " " + styles.rainbow}>
            <h1 className={styles.pageSlogan}>
              Hey !, I am Sirage, welcome to Semicolons zone where i share my tech knowledge
            </h1>
            <div className={styles.pageExpanation}>
              As a full stack web developer i work on various stages of a web or a mobile app development as well as
              their full development lifecycle,
            </div>
          </div>
          <div className={styles.contactWidgetsContainer}>
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
      </div>
      {/* ============================================================================= */}
      <section className={styles.sectionPost}>
        <div className={styles.sectionPostData}>
          <div>
            <div>
              <h2 className={styles.sectionPostTitle}>Latest post</h2>
            </div>
            {postData && (
              <PostCell
                _id={postData._id}
                imagePath={postData.image.path}
                imageAlt={postData.image.alt}
                title={postData.title}
                tags={postData.tags}
                loveInteractions={postData.interactions.love}
                ideaInteractions={postData.interactions.idea}
                slug={postData.slug}
                thrillDescription= {postData.thrillDescription}
              />
            )}
          </div>
          <div className={styles.sectionPostSloganContainer}>
            <img
              className={styles.headIllustration}
              src={headIllustration}
              alt={"read my posts and tutorials"}
            />
            <h2>In Semicolons blog you can find posts about various subjects in the tech industry</h2>
            <div className={styles.postsButtonContainer}>
              <Link to={"/posts"}>
                <button className={styles.postsButton}>All my posts</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* style={{ backgroundImage: `url(${blob})` }} */}
      {/* ============================================================================= */}

      <section className={styles.projectSection} style={{ backgroundImage: `url(${blob})` }}>
        <div>
          <h2 className={styles.projectSectionTitle}>Technologies and languages</h2>
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
            <button className={styles.projectsButton}>Projects zone</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
