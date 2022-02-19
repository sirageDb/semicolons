import React from "react";
import styles from "./projectCell.module.scss";
import apiEndPoint from "../../../config/apiEndPoint";
import { useHistory } from "react-router";
import ProjectSDK from "../../../SDK/projectSDK";


interface IImage {
  alt : string;
  path : string
}

interface IProjectCellProps {
  project_id: string;
  image: IImage;
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
  const projectSDK = new ProjectSDK();

  const publishProject = async () => {
    projectSDK.publishProject(project_id);
  };
  const unpublishProject = async () => {
    projectSDK.unpublishProject(project_id);
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
      <img className={styles.image} src={apiEndPoint + "/" + image.path} alt={image.alt} />
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
