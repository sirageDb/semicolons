import React from "react";
import { Link } from "react-router-dom";
import styles from "./postCell.module.scss";
import eyeIcon from "../../assets/eyeIcon.svg";
import timeIcon from "../../assets/timeIcon.svg";
import loveInteractionIcon from "../../assets/loveInteractionIcon.svg";
import ideaInteractionIcon from "../../assets/ideaInteractionIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import { sharePost, loveInteract, ideaInteract } from "../../SDK/postSDK";
import { IPostCellProps, ITagProps } from "../../lib/types";
import apiEndPoint from "../../config/apiEndPoint";



export default function PostCell({
  imagePath,
  imageAlt,
  title,
  tags,
  creationDate,
  lastModificationDate,
  views,
  readometer,
  loveInteractions,
  ideaInteractions,
  slug,
}: IPostCellProps): JSX.Element {
  const Tag = ({ text }: ITagProps) => {
    return <div className={styles.tag}>#{text}</div>;
  };



  //TODO post slug in amdin mode
  return (
    <div className={styles.container}>
      <img className ={styles.postImage} src={apiEndPoint + "/" + imagePath} alt={imageAlt} />
      <div className={styles.postCellDataContainer}>
        <div className={styles.titleContainer}>
          <Link to={"./posts/" + slug}>
            <div className={styles.title}>{title}</div>
          </Link>
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, i) => {
            return <Tag key={i} text={tag} />;
          })}
        </div>
        <div className={styles.dateContainer}>Publish date : {creationDate}</div>
        {lastModificationDate && <div className={styles.dateContainer}>Updated : {lastModificationDate}</div>}
        <div className={styles.postReaderInfo}>
          <img src={eyeIcon} alt={"number of post views"} className={styles.postReaderInfoIcon} />
          <span>{views}</span>
        </div>
        <div className={styles.postReaderInfo}>
          <img src={timeIcon} alt={"post reading time"} className={styles.postReaderInfoIcon} />
          <span>{readometer} minutes read</span>
        </div>

        <div className={styles.socialInteractionContainer}>
          <div className={styles.shareButtonContainer}>
            <button onClick={sharePost} className={styles.shareButton}>
              <img src={shareIcon} alt={"share post"} />
              <span className={styles.shareText}>Share</span>
            </button>
          </div>
          <div>
            <button className={styles.interactionButton} onClick={loveInteract}>
              <div>{loveInteractions}</div>
              <img src={loveInteractionIcon} alt={"interact with love"} />
            </button>
          </div>
          <div>
            <button className={styles.interactionButton} onClick={ideaInteract}>
              <div>{ideaInteractions}</div>
              <img src={ideaInteractionIcon} alt={"interact with idea"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
