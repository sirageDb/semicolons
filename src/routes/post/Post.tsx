/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
import { GET_POST_BY_SLUG } from "../../lib/endpoints";
import { IPost } from "../../lib/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGemoji from "remark-gemoji";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import apiEndPoint from "../../config/apiEndPoint";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

interface IPostParams {
  slug: string;
}

export default function Post(): JSX.Element {
  const [postData, setPostData] = useState<IPost>();
  const { slug } = useParams<IPostParams>();

  const postSDK = new PostSDK();

  useEffect(() => {
    // getPost();
    getPost();
  }, []);

  useEffect(() => {
    if(postData){
      postSDK.addView(postData?._id);      
    }
  }, [postData])

  const getPost = async () => {
    const apiResponse = await fetch(GET_POST_BY_SLUG(slug));
    const data = await apiResponse.json();
    setPostData(data);
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
    <div className={styles.postPageContentContainer}>
      <Header />
      <main className={styles.postPageContent}>
        <div className={styles.postContainer}>
          <div className={styles.datesContainer}></div>
          <div className={styles.postContent}>
            <img
              className={styles.postImage}
              alt={postData && postData.image.alt}
              src={apiEndPoint + "/" + (postData && postData.image.path)}
            />
            <h1 className={styles.title}>{postData && postData.title}</h1>
            <div className={styles.tagsContainer}>{postData && TagsOrganizer(postData.tags)}</div>
            <div className={styles.postStatsContainer}>
              <div className={styles.datesContainer}>
                <img className={styles.postStatIcon} src={dateIcon} alt={"post publish date"} />
                <div>{postData && dateFormatter(postData.creationDate)}</div>
{/*                 <div>
                  {postData && postData.lastModificationDate && (
                    <span>Last mofidication : {dateFormatter(postData.lastModificationDate)}</span>
                  )}
                </div> */}
              </div>
              <div className={styles.readometerContainer}>
                <img className={styles.postStatIcon} src={timeIcon} alt={"minutes to read the post"} />
                <div>{postData && postData.readometer}</div>
              </div>
              <div className={styles.viewsContainer}>
                <img className={styles.postStatIcon} src={eyeIcon} alt={"post views counter"} />
                <div>{postData && postData.views}</div>
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
                <button
                  className={styles.interactionButton}
                  onClick={postData && (() => postSDK.loveInteractionController(postData._id, getPost))}
                >
                  <img src={loveInteractionIcon} alt={"interact with love"} />
                  <div>{postData && postData.interactions.love}</div>
                </button>
              </div>
              <div>
                <button
                  className={styles.interactionButton}
                  onClick={postData && (() => postSDK.ideaInteractionController(postData._id, getPost))}
                >
                  <img src={ideaInteractionIcon} alt={"interact with idea"} />
                  <div>{postData && postData.interactions.idea}</div>
                </button>
              </div>
            </div>
            <div className={styles.postText}>
              {/* <ReactMarkdown>{postData && postData.content}</ReactMarkdown> */}
              {postData && (
                <ReactMarkdown
                  remarkPlugins={[remarkGemoji]}
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          PreTag="div"
                          style={atomOneDark}
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {postData.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
