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
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);
  const postSDK = new PostSDK();

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    if (postData) {
      postSDK.addView(postData?._id);
    }
  }, [postData]);

  const getPost = async () => {
    try {
      const apiResponse = await fetch(GET_POST_BY_SLUG(slug));
      const data = await apiResponse.json();
      if (apiResponse.status === 200) {
        setPostData(data);
        window.setTimeout(() => {
          setIsFetched(true);
          setIsErrored(false);
        }, 1000);
      }
      if (apiResponse.status != 200) {
        setIsFetched(false);
        setIsErrored(true);
      }
    } catch (error) {
      console.log(error);
    }
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

  const Suspense = () => {
    return (
      <div className={styles.postContent}>
        <div className={styles.postImageSuspense} />
        <div className={styles.titleContainer}>
          <h1 className={styles.titleSuspense} />
        </div>

        <div className={styles.tagsContainer}>
          <div className={styles.singleTagSuspense} />
          <div className={styles.singleTagSuspense} />
          <div className={styles.singleTagSuspense} />
          <div className={styles.singleTagSuspense} />
        </div>

        <div className={styles.postStatsContainer}>
          <div className={styles.datesContainerSuspense} />
          <div className={styles.readometerContainerSuspense} />
          <div className={styles.viewsContainerSuspense} />
        </div>
        <div className={styles.socialInteractionContainer}>
          <div className={styles.shareButtonSuspense} />
          <div className={styles.interactionButtonSuspense} />
          <div className={styles.interactionButtonSuspense} />
        </div>
        <div className={styles.postTextSuspense} />
        <div className={styles.postTextSuspense} />
      </div>
    );
  };

  const PostContent = () => {
    return (
      <div className={styles.postContent}>
        <img
          className={styles.postImage}
          alt={postData && postData.image.alt}
          src={apiEndPoint + "/" + (postData && postData.image.path)}
        />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{postData && postData.title}</h1>
        </div>
        <div className={styles.tagsContainer}>{postData && TagsOrganizer(postData.tags)}</div>
        <div className={styles.postStatsContainer}>
          <div className={styles.datesContainer}>
            <img className={styles.postStatIcon} src={dateIcon} alt={"post publish date"} />
            <div>{postData && dateFormatter(postData.creationDate)}</div>
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
          <button
            onClick={() => {
              postSDK.copy2Clipboard(window.location.href);
              setIsCopied(true);
            }}
            className={styles.shareButton}
          >
            <img src={shareIcon} alt={"share post"} />
            <span className={styles.shareText}>{isCopied ? "Copied !" : "Copy"}</span>
          </button>
          <button
            className={styles.interactionButton}
            onClick={postData && (() => postSDK.loveInteractionController(postData._id, getPost))}
          >
            <div>{postData && postData.interactions.love}</div>

            <img src={loveInteractionIcon} alt={"interact with love"} />
          </button>
          <button
            className={styles.interactionButton}
            onClick={postData && (() => postSDK.ideaInteractionController(postData._id, getPost))}
          >
            <div>{postData && postData.interactions.idea}</div>
            <img src={ideaInteractionIcon} alt={"interact with idea"} />
          </button>
        </div>
        <div className={styles.postText}>
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
    );
  };

  return (
    <div className={styles.postPageContentContainer}>
      <Header />
      <main className={styles.postPageContent}>
        {isFetched === false && isErrored === false ? <Suspense /> : <Suspense />}
      </main>
      <Footer />
    </div>
  );
}
