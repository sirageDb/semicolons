import React, { useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import styles from "./contact.module.scss";

export default function Contact(): JSX.Element {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onContactFormSubmit = (event: any) => {
    event.preventDefault();
    window.alert("Submit contact form");
  };

  return (
    <PageLayout contentMaxWidth={1100}>
      <div className={styles.pageSubContainer}>
        <div className={styles.pageExplanation}>
          <div>Interested in collaborating with Semicolons ?</div>
          <div>OR you simply appreciate my work and want to support me ?</div>
        </div>
        <h1 className={styles.pageTitle}>Contact Semicolons</h1>
        <form onSubmit={onContactFormSubmit}>
          <input
            className={styles.formtextInput}
            placeholder={"Your full name"}
            type={"text"}
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <input
            className={styles.formtextInput}
            placeholder={"Email"}
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={styles.formtextInput}
            placeholder={"Subject"}
            type={"text"}
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <textarea
            className={styles.formtextInput}
            placeholder={"Message"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{resize : "vertical"}}
          />
          <input className={styles.submitButton} type={"submit"} value={"Send"}/>
        </form>
      </div>
    </PageLayout>
  );
}
