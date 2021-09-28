import React, { useEffect } from "react";
import styles from "./projectCell.module.scss";
import testProject from "../../../assets/testproject.png";
import apiEndPoint from "../../../config/apiEndPoint";
import { useHistory } from "react-router";

interface IProjectCellProps {
  project_id: string;
  image: any;
  name: string;
  description: string;
  usedLanguages: string[];
  publish: boolean;
}

export default function ProjectCell({
  project_id,
  image,
  name,
  description,
  publish,
}: IProjectCellProps): JSX.Element {
  const history = useHistory();

  const editProject = () => {
    history.push("/backoffice/projecteditor/"+project_id);
  };
  

  const publishProject = async () => {
    await fetch(apiEndPoint + "project/publishproject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project_id: project_id }),
    });
  };
  const unpublishProject = async () => {
    await fetch(apiEndPoint + "project/privitiseproject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project_id: project_id }),
    });
  };

  const StatusPublished = ({ isPublished }: any) => {
    return (
      <div className={styles.statusContainer}>
        <div
          className={
            styles.circlePublishStatus +
            " " +
            (isPublished
              ? styles.circlePublishedTrue
              : styles.circlePublishedFalse)
          }
        />
        <div>{isPublished ? "Public" : "Private"}</div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.projectInfoContainer}>
        <div className={styles.nameDescriptionBlock}>
          <div className={styles.name}>{name}</div>
          <div>{description}</div>
        </div>
        <div className={styles.actionsContainer}>
          <StatusPublished isPublished={publish} />
          <button className={styles.actionButton} onClick={editProject}>
            Edit
          </button>
          {publish ? (
            <button className={styles.actionButton} onClick={unpublishProject}>
              Unpublish
            </button>
          ) : (
            <button className={styles.actionButton} onClick={publishProject}>
              Publish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
