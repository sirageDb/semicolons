import React from "react";
import styles from "./contactCell.module.scss";

interface IProps {
  fullname: string;
  email: string;
  message: string;
  subject: string;
  dateContacted: any;
  isNew: boolean;
}

export default function ContactCell({
  fullname,
  email,
  message,
  subject,
  dateContacted,
  isNew,
}: IProps): JSX.Element {


  
  const changeContactStatus = () => {
    window.alert("a");
  }

  const ViewStatusButton = () => {
    return (
      <button onClick={changeContactStatus} className={styles.statusButton + " " + (isNew  === true && styles.statusButtonIsNew)}>
        <div>{isNew ? "New" : "viewed"}</div>
      </button>
    );
  };

  return (
    <div className={styles.container + " " + (isNew === true && styles.isNew)}>
      <div>{dateContacted}</div>
      <div>
        <ViewStatusButton />
      </div>
      <div>{fullname}</div>
      <div>{email}</div>
      <div>{subject}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
}
