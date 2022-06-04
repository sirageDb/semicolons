import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./projectCell.module.scss";
import codeIcon from "../../assets/codeIcon.svg";
import viewIcon from "../../assets/viewIcon.svg";
import apiEndPoint from "../../config/apiEndPoint";

interface IProjectCellProps {
  name: string;
  tags: string[];
  projectLink?: string;
  sourceCodeLink?: string;
  description: string;
  image: any;
  imageAlt: string;
  projectType : "opensource" | null;
  isInDevelopment : "inDevelopment" | null;
}

interface ITagProps {
  text: string;
}

export default function ProjectCell({
  name,
  tags,
  projectLink,
  sourceCodeLink,
  description,
  image,
  imageAlt,
  projectType,
  isInDevelopment,
}: IProjectCellProps): JSX.Element {
  const Tag = ({ text }: ITagProps) => {
    return <div className={styles.tag}>#{text}</div>;
  };

  return (
    <div className={styles.container}>
      { projectType &&
        <div className={styles.projectTypebanner}> {projectType === "opensource" && "Opensource"}</div>
      }

      {
        isInDevelopment &&
        <div className={styles.inDevelopmentBanner}>PROJECT IN DEVELOPMENT</div>
      }
      <img className={styles.image} src={apiEndPoint + "/" + image} alt={imageAlt} />
      <div className={styles.projectDataContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, i) => {
            return <Tag key={i} text={tag} />;
          })}
        </div>
        <div className={styles.buttonsContainer}>
          {sourceCodeLink && (
            <NavLink className={styles.button + " " + styles.sourceCodeLinkButton} to={{ pathname: sourceCodeLink }} target="_blank">
              <img src={codeIcon} alt={"project source code"} />
              <div>Source code</div>
            </NavLink>
          )}
          {projectLink && (
            <NavLink className={styles.button + " " + styles.projectLinkButton} to={{ pathname: projectLink }} target="_blank">
              <img src={viewIcon} alt={"Project demonstration"} />
              <div>Project</div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
