import React from "react";
import apiEndPoint from "../../../config/apiEndPoint";
import dateFormatter from "../../../lib/dateFormatter";

import styles from "./contactCell.module.scss";

interface IProps {
  contact_id: string;
  fullname: string;
  email: string;
  message: string;
  subject: string;
  dateContacted: any;
  isNewContact: boolean;
  updateStatusCallback: CallableFunction;
}

export default function ContactCell({
  contact_id,
  fullname,
  email,
  message,
  subject,
  dateContacted,
  isNewContact,
  updateStatusCallback,
}: IProps): JSX.Element {
  //===============================================
  const updateStatus = async() => {
    const apiResponse = await fetch(apiEndPoint+"/contact/updatestatus",{
      "method" : "PUT",
      "headers" : {
        "Content-type" : "application/json"
      },
      "body" : JSON.stringify({contact_id : contact_id})
    })
    await apiResponse.json()

    if(apiResponse.status !== 200){
      window.alert("ERROR UPDATING REPROT");
    }

    await updateStatusCallback();
  };
  //===============================================

  const ViewStatusButton = () => {
    return (
      <button
        onClick={() => updateStatus()}
        className={
          styles.statusButton +
          " " +
          (isNewContact === true && styles.statusButtonIsNew)
        }
      >
        <div>{isNewContact ? "New" : "viewed"}</div>
      </button>
    );
  };
  //===============================================

  return (
    <div
      className={
        styles.container + " " + (isNewContact === true && styles.isNew)
      }
    >
      <div>{dateFormatter(dateContacted)}</div>
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
