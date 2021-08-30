import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./posts.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";

export default function Projects(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // const apiResponse = await fetch(apiEndPoint + "posts/getposts");
  };

  const newProject = () => {
    history.push("/backoffice/newpost")
  };

  return (
    <MainLayoutBackoffice pageTitle={"Posts"}>
      <button onClick={newProject} className={styles.newPostButton}>
        New Post
      </button>
    </MainLayoutBackoffice>
  );
}
