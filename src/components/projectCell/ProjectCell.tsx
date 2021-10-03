import { title } from "process";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./projectCell.module.scss";
import codeIcon from "../../assets/codeIcon.svg";
import viewIcon from "../../assets/viewIcon.svg";

interface IProjectCellProps {
  name: string;
  tags: string[];
  projectLink?: string;
  sourceCodeLink?: string;
  description: string;
  image: any;
  imageAlt: string;
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
}: IProjectCellProps): JSX.Element {
  const Tag = ({ text }: ITagProps) => {
    return <div className={styles.tag}>#{text}</div>;
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={imageAlt} />
      <div>
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
