import React, { useEffect, useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import PostCell from "../../components/postCell/PostCell";
import styles from "./posts.module.scss";
import { IPost } from "../../lib/types";
import { GET_POSTS_PUBLISHED } from "../../lib/endpoints";
import Masonry from "react-masonry-css";
import brand from "../../assets/brand.png";

// My posts are some well developed sidenotes I simply took while working on my real life projects in order to share the problem as well as the solution with you (plus how I found the solution! ).

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
      <div className={styles.pageHeadingContainer}>
        <div className={styles.pageTitleContainer}>
          <img className={styles.brand} src={brand} alt={"semicolons blog"} />
          <h1>Blog</h1>
        </div>
        <h2 className={styles.pageExplanation}>
          The posts on this page are about some well-developed sidenotes that have been made while working on real-life
          projects in order to share the problem, its solution, and how it was discovered with you!
        </h2>
      </div>
      <div className={styles.postsContainer}>
        <Masonry
          breakpointCols={{ default: 2, 576: 1 }}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
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
