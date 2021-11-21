import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./posts.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import { GET_POSTS } from "../../../lib/endpoints";
import { IPost } from "../../../lib/types";
import PostCell from "../../../components/backoffice/postCell/PostCell";

export default function Projects(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>();
  const history = useHistory();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const apiResponse = await fetch(GET_POSTS);
    const data = await apiResponse.json();
    setPosts(data);
  };

  const newPost = () => {
    history.push("/backoffice/posteditor");
  };

  return (
    <MainLayoutBackoffice pageTitle={"Posts"}>
      <button onClick={newPost} className={styles.newPostButton}>
        New Post
      </button>

      <div className={styles.postsContainer}>
        {posts?.map((post: IPost, i: number) => {
          return <PostCell key={i} post_id={post._id} publish={post.publish} title={post.title} />;
        })}
      </div>
    </MainLayoutBackoffice>
  );
}
