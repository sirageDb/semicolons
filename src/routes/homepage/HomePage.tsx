import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import PageLayout from "../../components/pageLayout/PageLayout";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import { Link } from "react-router-dom";
import PostCell from "../../components/postCell/PostCell";

//images
//======================================
import blob from "../../assets/blob.svg";
import wavyHomePageBackground from "../../assets/wavyHomePageBackground.svg";
//======================================

import headIllustration from "../../assets/headIllustration.svg";
import { IPost } from "../../lib/types";
import { GET_POST_PUBLISHED_LATEST } from "../../lib/endpoints";
import CompetenceBlock from "../../components/competenceBlock/CompetenceBlock";

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
      <div className={styles.pageHeadingContainer}>
        <div className={styles.secondaryBackground} style={{ backgroundImage: `url(${wavyHomePageBackground})` }}>
          <div className={styles.pageHeading}>
            <div className={styles.pageSloganContainer + " " + styles.rainbow}>
              <h1 className={styles.pageSlogan}>Hey !, welcome to Semicolons zone where I share my Tech knowledge.</h1>
              <div className={styles.pageExpanation}>
                As a full stack web developer, I work on the entire development lifecycle of web and mobile apps with
                the goal of having complete control over my projects.
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

      <section className={styles.sectionCompetences}>
        <div className={styles.sectionCompetenceTitleContainer}>
          <h2 className={styles.sectionCompetenceTitle}>SKILLS</h2>
        </div>
        <div className={styles.competencesContainer}>
          <CompetenceBlock
            title="Development"
            contentText="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ing, remaining essentially unchanged"
            titleColor={"#0067FF"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
              </svg>
            }
          />
          <CompetenceBlock
            title="Project management"
            contentText="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ing, remaining essentially unchanged"
            titleColor={"#FF886F"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z" />
              </svg>
            }
          />
          <CompetenceBlock
            title="Devops"
            contentText="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ing, remaining essentially unchanged"
            titleColor={"#707070"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" />
              </svg>
            }
          />
          <CompetenceBlock
            title="Design & UI/UX"
            contentText="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ing, remaining essentially unchanged"
            titleColor={"#FFC356"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M492.7 42.75C517.7 67.74 517.7 108.3 492.7 133.3L436.3 189.7L322.3 75.72L378.7 19.32C403.7-5.678 444.3-5.678 469.3 19.32L492.7 42.75zM44.89 353.2L299.7 98.34L413.7 212.3L158.8 467.1C152.1 473.8 143.8 478.7 134.6 481.4L30.59 511.1C22.21 513.5 13.19 511.1 7.03 504.1C.8669 498.8-1.47 489.8 .9242 481.4L30.65 377.4C33.26 368.2 38.16 359.9 44.89 353.2zM249.4 103.4L103.4 249.4L16 161.9C-2.745 143.2-2.745 112.8 16 94.06L94.06 16C112.8-2.745 143.2-2.745 161.9 16L181.7 35.76C181.4 36.05 181 36.36 180.7 36.69L116.7 100.7C110.4 106.9 110.4 117.1 116.7 123.3C122.9 129.6 133.1 129.6 139.3 123.3L203.3 59.31C203.6 58.99 203.1 58.65 204.2 58.3L249.4 103.4zM453.7 307.8C453.4 308 453 308.4 452.7 308.7L388.7 372.7C382.4 378.9 382.4 389.1 388.7 395.3C394.9 401.6 405.1 401.6 411.3 395.3L475.3 331.3C475.6 330.1 475.1 330.6 476.2 330.3L496 350.1C514.7 368.8 514.7 399.2 496 417.9L417.9 496C399.2 514.7 368.8 514.7 350.1 496L262.6 408.6L408.6 262.6L453.7 307.8z" />
              </svg>
            }
          />
          <CompetenceBlock
            title="Open-source & writing"
            contentText="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ing, remaining essentially unchanged"
            titleColor={"#6D37DA"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M8 266.44C10.3 130.64 105.4 34 221.8 18.34c138.8-18.6 255.6 75.8 278 201.1 21.3 118.8-44 230-151.6 274-9.3 3.8-14.4 1.7-18-7.7q-26.7-69.45-53.4-139c-3.1-8.1-1-13.2 7-16.8 24.2-11 39.3-29.4 43.3-55.8a71.47 71.47 0 0 0-64.5-82.2c-39-3.4-71.8 23.7-77.5 59.7-5.2 33 11.1 63.7 41.9 77.7 9.6 4.4 11.5 8.6 7.8 18.4q-26.85 69.9-53.7 139.9c-2.6 6.9-8.3 9.3-15.5 6.5-52.6-20.3-101.4-61-130.8-119-24.9-49.2-25.2-87.7-26.8-108.7zm20.9-1.9c.4 6.6.6 14.3 1.3 22.1 6.3 71.9 49.6 143.5 131 183.1 3.2 1.5 4.4.8 5.6-2.3q22.35-58.65 45-117.3c1.3-3.3.6-4.8-2.4-6.7-31.6-19.9-47.3-48.5-45.6-86 1-21.6 9.3-40.5 23.8-56.3 30-32.7 77-39.8 115.5-17.6a91.64 91.64 0 0 1 45.2 90.4c-3.6 30.6-19.3 53.9-45.7 69.8-2.7 1.6-3.5 2.9-2.3 6q22.8 58.8 45.2 117.7c1.2 3.1 2.4 3.8 5.6 2.3 35.5-16.6 65.2-40.3 88.1-72 34.8-48.2 49.1-101.9 42.3-161-13.7-117.5-119.4-214.8-255.5-198-106.1 13-195.3 102.5-197.1 225.8z" />
              </svg>
            }
          />
          <CompetenceBlock
            title="innovation"
            contentText="of type and scrambled it to make a type aepjgap efjapeojfpoaie foaein funchanged"
            titleColor={"#58E1A5"}
            svgImage={
              <svg fill="#FFC356" fillOpacity={"0.4"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* ============================================================================= */}
      <section className={styles.sectionPost}>
        <div className={styles.sectionPostData}>
          <div>
            <div className={styles.sectionPostTitleContainer}>
              <h2 className={styles.sectionPostTitle}>LATEST POST</h2>
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

      {/* ============================================================================= */}

      <section className={styles.projectSection} style={{ backgroundImage: `url(${blob})` }}>
        <div>
          <h2 className={styles.projectSectionTitle}>Technologies</h2>
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
