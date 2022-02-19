import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { Link } from "react-router-dom";
import PostCell from "../../components/postCell/PostCell";
//images
//====================
import blob from "../../assets/blob.svg";
import wavyHomePageBackground from "../../assets/wavyHomePageBackground.svg";

import headIllustration from "../../assets/headIllustration.svg";
import { IPost } from "../../lib/types";
import { GET_POST_PUBLISHED_LATEST } from "../../lib/endpoints";
import Seo from "../../components/seo/seo";

//TODO an astroid from the sky when scrolling ...
export default function HomePage(): JSX.Element {
  const [postData, setPostData] = useState<IPost>();

  useEffect(() => {
    getLastPost();
  }, []);

  const getLastPost = async () => {
    const apiResponse = await fetch(GET_POST_PUBLISHED_LATEST);
    const extractedData = await apiResponse.json();
    setPostData(extractedData[0]);
  };

  const Tag = ({ text }: any) => {
    return <div className={styles.singleTag}>#&nbsp;{text}</div>;
  };

  return (
    <PageLayout>
      <Seo
        robots="index,follow"
        ogType="website"
        title="Semicolons azdazodazd"
        imagePath="d"
        path=""
        keywards="Semicolons, Sirage, AL DBIYAT, sirage al dbiyat, fullstack development, blog, opensource, open source, projects, best projects, french tech, lyon, france"
        description="Welcome to Semicolons zone where I share my Tech knowledge."
      />
      <div className={styles.pageHeadingContainer}>
        <div className={styles.secondaryBackground} style={{ backgroundImage: `url(${wavyHomePageBackground})` }}>
          <div className={styles.pageHeading}>
            <div className={styles.pageSloganContainer + " " + styles.rainbow}>
              <h1 className={styles.pageSlogan}>Hey !, welcome to Semicolons zone where I share my Tech knowledge.</h1>
              <div className={styles.pageExpanation}>
                As a full stack web developer I work on the full development lifecycle of web and mobile apps with a
                vision that allows me to have a full control over my projects.
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
      </div>
      {/* ============================================================================= */}
      <section className={styles.sectionPost}>
        <div className={styles.sectionPostData}>
          <div>
            <div className={styles.sectionPostTitleContainer}>
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
                thrillDescription={postData.thrillDescription}
                fetchCallback={getLastPost}
              />
            )}
          </div>
          <div className={styles.sectionPostSloganContainer}>
            <img className={styles.headIllustration} src={headIllustration} alt={"read my posts and tutorials"} />
            <h2>In Semicolons blog you can find posts about various subjects in the Tech industry</h2>
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
          <h2 className={styles.projectSectionTitle}>Technologies i work on...</h2>
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
            <Tag text={"Node"} />
            <Tag text={"Express"} />
            <Tag text={"React"} />
            <Tag text={"React Native"} />
            <Tag text={"SQL"} />
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
          </div>
          <Link to={"/projects"}>
            <button className={styles.projectsButton}>Projects zone</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
