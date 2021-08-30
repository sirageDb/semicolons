import React from "react";
import styles from "./newPost.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";

export default function newProject(): JSX.Element {
  return (
    <MainLayout pageTitle={"New Project"}>
      <div>
        <div>New project page</div>
      </div>
    </MainLayout>
  );
}
