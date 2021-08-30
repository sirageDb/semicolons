import React from "react";
import styles from "./newPost.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";

export default function NewPost(): JSX.Element {
  return (
    <MainLayout pageTitle={"New Post"}>
      <div>
        <div>New post page</div>
      </div>
    </MainLayout>
  );
}
