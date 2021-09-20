import React from "react";
import styles from "./tagsOrganizer.module.scss";
import removeIcon from "../../../assets/removeIcon.svg";



interface ITagsOrganizer {
  tags: string[];
}


export default function TagsOrganizer({ tags }: ITagsOrganizer): JSX.Element {
  const removeTag = (text : any)=> {
    console.log(text);
    
  }


  const Tag = ({text} : any) => {
    return (
      <div className={styles.singleTagContainer}>
        <div className={styles.singleTag}>
          <div>{text}</div>
          <img className={styles.removeIcon} onClick={e => removeTag(e)} src={removeIcon} alt={"azeze"} />
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
