import React from "react";
import "./contactCell.module.scss";

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
  const ViewStatusButton = () => {
      return(
          <div>
              <div></div>
          </div>
      )
  };

  return (
    <div>
      <div>
        <div>{dateContacted}</div>
        <div><ViewStatusButton /></div>
      </div>
      <div>{fullname}</div>
      <div>{email}</div>
      <div>{subject}</div>
      <div>{message}</div>
    </div>
  );
}
