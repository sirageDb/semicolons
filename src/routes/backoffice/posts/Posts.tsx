import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "./posts.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import { GET_POSTS } from "../../../lib/endpoints";
import { IPost } from "../../../lib/types";
import PostCell from "../../../components/backoffice/postCell/PostCell";
import { AuthContext } from "../../../lib/AuthContext";

export default function Projects(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>();
  const {getToken} = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const apiResponse = await fetch(GET_POSTS, {headers : {authorization : getToken()}});
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
        {(posts && posts.length > 0) && posts.map((post: IPost, i: number) => {
          return <PostCell key={i} post_id={post._id} publish={post.publish} title={post.title} />;
        })}
      </div>
    </MainLayoutBackoffice>
  );
}
