import React from "react";
import styles from "./CompetenceBock.module.scss";

interface ICompetenceBlockProps {
  title: string;
  contentText: string;
  titleColor: string;
  svgImage: any;
}

export default function CompetenceBlock({
  title,
  titleColor,
  contentText,
  svgImage,
}: ICompetenceBlockProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{svgImage}</span>
      <div className={styles.content}>
        <div className={styles.competenceTitle} style={{ color: `${titleColor}` }}>
          {title}
        </div>
        <p className={styles.competenceText}>{contentText}</p>
      </div>
    </div>
  );
}
