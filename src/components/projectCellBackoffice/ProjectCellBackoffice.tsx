import React from "react";
import styles from "./projectCell.module.scss";

interface IProjectCell {
  usedLanguages: string[];
  project_id: string;
  name: string;
  projectLink: string;
  sourceCodeLink: string;
  description: string;
  creationDate: string;
  lastModificationDate: string;
  publish: boolean;
}

export default function ProjectCell({
  usedLanguages,
  project_id,
  name,
  projectLink,
  sourceCodeLink,
  description,
  creationDate,
  lastModificationDate,
  publish,
}: IProjectCell): JSX.Element {
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <div>{description}</div>
      <div>
        {usedLanguages.map((usedLanguage: string) => {
          <div>{usedLanguage}</div>;
        })}
      </div>
    </div>
  );
}
