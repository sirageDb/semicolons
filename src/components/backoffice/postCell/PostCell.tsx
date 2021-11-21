import React from "react";
import { NavLink } from "react-router-dom";
import { POST_EDITOR_EXISTS_CONSUMED } from "../../../lib/appRouting";
import styles from "./postCell.module.scss"

interface IPostcellProps {
  title: string;
  post_id: string;
  publish: boolean;
}

export default function PostCell({ title, post_id, publish }: IPostcellProps): JSX.Element {
  return (
    <div className={styles.container + " " + (publish ? styles.isPublishedContainer : styles.isPrivateContainer)}>
      <h2>{title}</h2>
      <NavLink className={styles.button} to={POST_EDITOR_EXISTS_CONSUMED(post_id)}>
        Edit
      </NavLink>
    </div>
  );
}
