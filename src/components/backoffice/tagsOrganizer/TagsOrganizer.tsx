import React from "react";
import styles from "./tagsOrganizer.module.scss";
import removeIcon from "../../../assets/removeIcon.svg";



interface ITagsOrganizerProps {
  tags: string[];
  removeTagCallback : CallableFunction
}


export default function TagsOrganizer({ tags, removeTagCallback }: ITagsOrganizerProps): JSX.Element {


  const Tag = ({text} : any) => {
    return (
      <div className={styles.singleTagContainer}>
        <div className={styles.singleTag}>
          <div>{text}</div>
          <img className={styles.removeIcon} onClick={() => removeTagCallback(text)} src={removeIcon} alt={"azeze"} />
        </div>
      </div>
    );
  };

  return (
    <div>
      {tags.map((tag: string, i) => {
        return <Tag key={i} text={tag} />;
      })}
    </div>
  );
}
