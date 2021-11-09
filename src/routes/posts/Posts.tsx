import React, { useEffect, useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import PostCell from "../../components/postCell/PostCell";
import spaceshipIllustration from "../../assets/spaceshipIllustration.svg";
import styles from "./posts.module.scss";
import apiEndPoint from "../../config/apiEndPoint";
import { IPost } from "../../lib/types";
import dateFormatter from "../../lib/dateFormatter";

export default function Posts(): JSX.Element {
  const BACKEND_POSTS_ENDPOINT = "/post/getposts";

  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const apiResponse = await fetch(apiEndPoint + BACKEND_POSTS_ENDPOINT);
    const data = await apiResponse.json();
    console.log(data);
    setPosts(data);
  };

  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.headingContainer}>
        <div className={styles.pageHeadingContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>Posts and articles zone</h1>
            <h2 className={styles.pageExplanation}>
              While working on my projects, i will simply make sidenotes about problems i encounter as a developer or
              problems i believe any programmer of any knowledge level might encounter, then i develop these sidenotes
              into posts that i can sahre them with you !
            </h2>
          </div>
          <div>
            <img src={spaceshipIllustration} alt={"posts and articles page"} />
          </div>
        </div>
      </div>
      <div className={styles.postsContainer}>
        {posts?.map((post: IPost, i: number) => {
          return (
            <PostCell
              key={i}
              _id={post?._id}
              imagePath={post?.image?.path}
              imageAlt={post?.image?.alt}
              title={post.title}
              tags={post.tags}
              creationDate={dateFormatter(post.creationDate)}
              lastModificationDate={dateFormatter(post.lastModificationDate)}
              views={post.views}
              readometer={post.readometer}
              loveInteractions={post.interactions.love}
              ideaInteractions={post.interactions.idea}
              slug={post.slug}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}
