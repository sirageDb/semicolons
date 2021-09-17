import React from "react";
import styles from "./projectCell.module.scss";

interface IProjectCellProps {
  project_id: string;
  image: any;
  title: string;
  description: string;
  usedLanguages: string[];
  publish: boolean;
}

export default function ProjectCell({
  project_id,
  image,
  title,
  description,
  usedLanguages,
  publish,
}: IProjectCellProps): JSX.Element {
  return (
    <div>
      <div></div>
    </div>
  );
}
