import React, { useEffect, useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import PostCell from "../../components/postCell/PostCell";
import spaceshipIllustration from "../../assets/spaceshipIllustration.svg";
import styles from "./posts.module.scss";
import { IPost } from "../../lib/types";
import { GET_POSTS_PUBLISHED } from "../../lib/endpoints";
import Masonry from "react-masonry-css";

export default function Posts(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const apiResponse = await fetch(GET_POSTS_PUBLISHED);
    const data = await apiResponse.json();
    // setPosts([data[0]]);
    setPosts(data);
  };

  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.headingContainer}>
        <div className={styles.pageHeadingContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>Posts and articles zone</h1>
            <h2 className={styles.pageExplanation}>
{/*               While working on my projects, i will simply make sidenotes about problems i encounter as a developer or
              problems i believe any programmer of any knowledge level might encounter, then i develop these sidenotes
              into posts that i can sahre them with you ! */}
              My posts are some well developed sidenotes that I simply took while working on my real life projects in order to share the problem as well as the solution with you (plus how i found a solution! ).
            </h2>
          </div>
          <div>
            <img className={styles.postsImage} src={spaceshipIllustration} alt={"posts and articles page"} />
          </div>
        </div>
      </div>
      <div className={styles.postsContainer}>
        <Masonry breakpointCols={2} className={styles.myMasonryGrid} columnClassName={styles.myMasonryGridColumn}>
          {posts?.map((post: IPost, i: number) => {
            return (
              <div className={styles.singlePostCellContainer} key={i}>
                <PostCell
                  _id={post?._id}
                  imagePath={post?.image?.path}
                  imageAlt={post?.image?.alt}
                  title={post.title}
                  tags={post.tags}
                  loveInteractions={post.interactions.love}
                  ideaInteractions={post.interactions.idea}
                  slug={post.slug}
                  thrillDescription={post.thrillDescription}
                  fetchCallback={fetchPosts}
                />
              </div>
            );
          })}
        </Masonry>
      </div>
    </PageLayout>
  );
}
