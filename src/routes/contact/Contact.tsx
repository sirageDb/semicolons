import React, { useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import apiEndPoint from "../../config/apiEndPoint";
import styles from "./contact.module.scss";

export default function Contact(): JSX.Element {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isErroredSubmit, setIsErroredSubmit] = useState<boolean>(false);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState<boolean>(false);

  const onContactFormSubmit = (event: any) => {
    event.preventDefault();
    if (fullName !== "" && email !== "" && subject !== "" && message !== "") {
      sendForm();
    } else {
      setIsErroredSubmit(true);
      setIsSuccessfullSubmit(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendForm = async () => {
    const apiRequest = await fetch(apiEndPoint + "/contact/newcontact", {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if (apiRequest.status === 200) {
      setIsErroredSubmit(false);
      setIsSuccessfullSubmit(true);
      resetForm();
    } else {
      setIsErroredSubmit(true);
      setIsSuccessfullSubmit(false);
    }
  };

  const SubmitConfirmation = (): JSX.Element => {
    return (
      <div className={styles.submitNotification + " " + styles.confirmation}>
        Thank you for getting in touch !, will get back to you soon :)
      </div>
    );
  };

  const SubmitError = (): JSX.Element => {
    return (
      <div className={styles.submitNotification + " " + styles.error}>
        Sorry an error has occured, your message was not sent, please try again.
      </div>
    );
  };

  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.pageSubContainer}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Contact Semicolons</h1>
          <div className={styles.pageExplanation}>
            <div>Interested in collaborating with Semicolons ?</div>
            <div>OR you simply appreciate my work and want to support me ?</div>
          </div>
        </div>
        <form onSubmit={onContactFormSubmit}>
          {isErroredSubmit === true && <SubmitError />}
          {isSuccessfullSubmit === true && <SubmitConfirmation />}
          <input
            className={styles.formtextInput}
            placeholder={"Your full name (required)"}
            type={"text"}
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <input
            className={styles.formtextInput}
            placeholder={"Email (required)"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={styles.formtextInput}
            placeholder={"Subject (required)"}
            type={"text"}
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <textarea
            className={styles.formtextInput}
            placeholder={"Message (required)"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{ resize: "vertical" }}
          />
          <input className={styles.submitButton} type={"submit"} value={"Send"} />
        </form>
      </div>
    </PageLayout>
  );
}
