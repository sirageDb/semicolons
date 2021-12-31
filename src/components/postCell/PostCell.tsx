import React from "react";
import { Link } from "react-router-dom";
import styles from "./postCell.module.scss";
import { IPostCellProps, ITagProps } from "../../lib/types";
import apiEndPoint from "../../config/apiEndPoint";
import wavyPostCellbackground from "../../assets/wavesNegativePostCell.svg";
//ICONS ======
import loveInteractionIcon from "../../assets/loveInteractionIcon.svg";
import ideaInteractionIcon from "../../assets/ideaInteractionIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import arrowForward from "../../assets/arrowForward.svg";
import PostSDK from "../../SDK/postSDK";

export default function PostCell({
  _id,
  imagePath,
  imageAlt,
  title,
  tags,
  loveInteractions,
  ideaInteractions,
  slug,
  thrillDescription,
  fetchCallback,
}: IPostCellProps): JSX.Element {
  const Tag = ({ text }: ITagProps) => {
    return <div className={styles.tag}># {text}</div>;
  };

  const postSDK = new PostSDK();

  //TODO post slug in amdin mode
  return (
    <div className={styles.container}>
      <div className={styles.postCellDataContainer}>
        <div className={styles.titleContainer}>
          <Link to={"/posts/" + slug}>
            <div className={styles.title}>{title}</div>
          </Link>
        </div>
        <div className={styles.thrillDescriptionContainer}>
          <div>{thrillDescription}</div>
          <div className={styles.tagsContainer}>
            {tags.map((tag, i) => {
              return <Tag key={i} text={tag} />;
            })}
          </div>
        </div>
        <div className={styles.interactionContainer}>
          <div className={styles.socialInteractionContainer}>
            <div>
              <button onClick={() => postSDK.sharePost()} className={styles.button + " " + styles.shareButton}>
                <img src={shareIcon} alt={"share post"} />
                <span>Share</span>
              </button>
            </div>
            <div>
              <button className={styles.interactionButton} onClick={() => postSDK.loveInteractionController(_id, fetchCallback)}>
                <div>{loveInteractions}</div>
                <img src={loveInteractionIcon} alt={"interact with love"} />
              </button>
            </div>
            <div>
              <button className={styles.interactionButton} onClick={() =>  postSDK.ideaInteractionController(_id ,fetchCallback)}>
                <div>{ideaInteractions}</div>
                <img src={ideaInteractionIcon} alt={"interact with idea"} />
              </button>
            </div>
          </div>
          <Link to={`/posts/${slug}`}>
            <button className={styles.button + " " + styles.readButton}>
              <span>Read</span>
              <img src={arrowForward} alt={"share post"} />
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.postImageContainer}>
        <img className={styles.postImageWavy} src={wavyPostCellbackground} alt={"ok"} />
        <img className={styles.postImage} src={apiEndPoint + "/" + imagePath} alt={imageAlt} />
      </div>
    </div>
  );
}
