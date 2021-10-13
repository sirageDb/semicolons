import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageLayout from "../../components/pageLayout/PageLayout";
import postData from "../../lib/postTest.json";
import ReactMarkdown from "react-markdown";
import styles from "./post.module.scss";
// ICONS =====================================
import eyeIcon from "../../assets/eyeIcon.svg";
import loveInteractionIcon from "../../assets/loveInteractionIcon.svg";
import ideaInteractionIcon from "../../assets/ideaInteractionIcon.svg";
import timIcon from "../../assets/timeIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import testPostImage from "../../assets/testpostcellimage.svg";

interface IPostData {
  title: string;
}

export default function Post(): JSX.Element {
  // const [postData, setPostData] = useState<IPostData>();
  const params = useParams();
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    /*         const apiResponse = await fetch("../../lib/postTest.json");
        const data = await apiResponse.json();
        console.log(data) */
    // setPostData(postTest);
  };

  //https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents/33433098#paragraph1
  //https://github.com/remarkjs/react-markdown

  const goToContent = (name: string) => {
    console.log(name);
    const wantedElement = document.querySelector(`[data-name='${name}']`);
    console.log(wantedElement);

    if (wantedElement instanceof HTMLElement) {
      const elOffsetTop = wantedElement.offsetTop;
      window.scrollTo(0, elOffsetTop);
    }
  };




  const TagsOrganizer = (tags : string[]) => {
    return (
      tags.map((tag : string, i : number) => {
        return <div className={styles.singleTag} key={i}>#{tag}</div>
      })
    )
  }



  return (
    <PageLayout contentMaxWidth={1100}>
      <div className={styles.postContainer}>
        <div className={styles.tableOfContentContainer}>
          {postData.tableOfContents.map((sinlgeTOC: any, i: number) => {
            return (
              <div key={i} onClick={() => goToContent(sinlgeTOC.url)}>
                {sinlgeTOC.name}
              </div>
            );
          })}
        </div>
        <div className={styles.datesContainer}>
          
        </div>
        <div className={styles.postContent}>
          <img className={styles.postImage} src={testPostImage} />
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.tagsContainer}>
            {
              TagsOrganizer(postData.tags)
            }
          </div>

          <div className={styles.postStats}></div>
          <div className={styles.socialContainer}></div>

          <div className={styles.postText}>
            <ReactMarkdown>{postData.textContent}</ReactMarkdown>
          </div>
        </div>

        {/*         {postData.content.map((singleContentSection, i) => {
          return (
            <div key={i} data-name={singleContentSection.name}>
              <ReactMarkdown>{singleContentSection.text}</ReactMarkdown>
            </div>
          );
        })} */}
      </div>
    </PageLayout>
  );
}
