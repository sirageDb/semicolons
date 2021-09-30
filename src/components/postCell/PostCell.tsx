import React from "react";
import { Link } from "react-router-dom";
import styles from "./postCell.module.scss";
import eyeIcon from "../../assets/eyeIcon.svg";
import timeIcon from "../../assets/timeIcon.svg";
import loveInteractionIcon from "../../assets/loveInteractionIcon.svg";
import ideaInteractionIcon from "../../assets/ideaInteractionIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import testPostCellImage from "../../assets/testpostcellimage.svg";

interface IPostCellProps {
  image: string;
  title: string;
  tags: string[];
  publishDate: string;
  updatedDate?: string;
  views: number;
  readingTime: number;
  likeInteractions: number;
  ideaIneractions: number;
  postSlug: string;
}

interface ITagProps {
  text: string;
}

export default function PostCell({
  image,
  title,
  tags,
  publishDate,
  updatedDate,
  views,
  readingTime,
  likeInteractions,
  ideaIneractions,
  postSlug,
}: IPostCellProps): JSX.Element {
  const Tag = ({ text }: ITagProps) => {
    return <div className={styles.tag}>#{text}</div>;
  };

  const loveInteract = () => {
    window.alert("like post");
  };

  const ideaInteract = () => {
    window.alert("idea interact");
  };

  const sharePost = () => {
    window.alert("share");
  };

  //TODO post slug in amdin mode
  return (
    <div className={styles.container}>
      <img src={image} alt={"Post image"} />
      <div className={styles.postCellDataContainer}>
        <div className={styles.titleContainer}>
          <Link to={"./" + postSlug}>
            <div className={styles.title}>{title}</div>
          </Link>
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, i) => {
            return <Tag key={i} text={tag} />;
          })}
        </div>
        <div className={styles.dateContainer}>Publish date : {publishDate}</div>
        {updatedDate && <div className={styles.dateContainer}>Updated : {updatedDate}</div>}
        <div className={styles.postReaderInfo}>
          <img src={eyeIcon} alt={"number of post views"} className={styles.postReaderInfoIcon} />
          <span>{views}</span>
        </div>
        <div className={styles.postReaderInfo}>
          <img src={timeIcon} alt={"post reading time"} className={styles.postReaderInfoIcon} />
          <span>{readingTime} minutes read</span>
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
              <div>{likeInteractions}</div>
              <img src={loveInteractionIcon} alt={"interact with love"} />
            </button>
          </div>
          <div>
            <button className={styles.interactionButton} onClick={ideaInteract}>
              <div>{ideaIneractions}</div>
              <img src={ideaInteractionIcon} alt={"interact with idea"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
