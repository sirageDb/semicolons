import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageLayout from "../../components/pageLayout/PageLayout";
import postData from "../../lib/postTest.json";
import ReactMarkdown from "react-markdown";
import styles from "./post.module.scss";
import PostSDK from "../../SDK/postSDK";

// ICONS =====================================
import eyeIcon from "../../assets/eyeIcon.svg";
import loveInteractionIcon from "../../assets/loveInteractionIcon.svg";
import ideaInteractionIcon from "../../assets/ideaInteractionIcon.svg";
import timeIcon from "../../assets/timeIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import dateIcon from "../../assets/dateIcond.svg";
import dateFormatter from "../../lib/dateFormatter";
import testProjectIllustration from "../../assets/testproject.png";

interface IPostData {
  title: string;
}


interface IPostParams {
  slug : string
}

export default function Post(): JSX.Element {
  // const [postData, setPostData] = useState<IPostData>();
  const params = useParams<IPostParams>();

  const postSDK = new PostSDK();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    /*         const apiResponse = await fetch("../../lib/postTest.json");
        const data = await apiResponse.json();
        console.log(data) */
    // setPostData(postTest);
  };

  const TagsOrganizer = (tags: string[]) => {
    return tags.map((tag: string, i: number) => {
      return (
        <div className={styles.singleTag} key={i}>
          # {tag}
        </div>
      );
    });
  };

  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.postContainer}>
        <div className={styles.datesContainer}></div>
        <div className={styles.postContent}>
          <img className={styles.postImage} src={testProjectIllustration} />
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.tagsContainer}>{TagsOrganizer(postData.tags)}</div>
          <div className={styles.postStatsContainer}>
            <div className={styles.datesContainer}>
              <img className={styles.postStatIcon} src={dateIcon} alt={"post publish date"} />
              <div>{dateFormatter(postData.creationDate)}</div>
              <div>{postData.lastModificationDate && <span>Last mofidication : {dateFormatter(postData.lastModificationDate)}</span>}</div>
            </div>
            <div className={styles.readometerContainer}>
              <img className={styles.postStatIcon} src={timeIcon} alt={"minutes to read the post"} />
              <div>{postData.readometer}</div>
            </div>
            <div className={styles.viewsContainer}>
              <img className={styles.postStatIcon} src={eyeIcon} alt={"post views counter"} />
              <div>{postData.views}</div>
            </div>
          </div>
          <div className={styles.socialInteractionContainer}>
            <div className={styles.shareButtonContainer}>
              <button onClick={() => postSDK.sharePost()} className={styles.shareButton}>
                <img src={shareIcon} alt={"share post"} />
                <span className={styles.shareText}>Share</span>
              </button>
            </div>
            <div>
              <button className={styles.interactionButton} onClick={() => postSDK.loveInteractionController("a")}>
                <img src={loveInteractionIcon} alt={"interact with love"} />
                <div>{postData.interactions.love}</div>
              </button>
            </div>
            <div>
              <button className={styles.interactionButton} onClick={() => postSDK.ideaInteractionController("a")}>
                <img src={ideaInteractionIcon} alt={"interact with idea"} />
                <div>{postData.interactions.idea}</div>
              </button>
            </div>
          </div>
          <div className={styles.postText}>
            <ReactMarkdown>{postData.textContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
