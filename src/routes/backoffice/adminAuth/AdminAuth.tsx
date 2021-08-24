import React, { SyntheticEvent } from "react";
import { useState } from "react";
import styles from "./adminAuth.module.scss";
import apiEndPoint from "../../../lib/apiEndPoint";
import { useHistory } from "react-router";

export default function AdminAuth(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    history.push("/backoffice/projects");
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div>
          <input
            className={styles.textInput}
            id={"emailInput"} 
            type={"text"}
            placeholder={"Email"} 
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className={styles.textInput}
            id={"password"}
            type={"text"}
            placeholder={"password"}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <input
          className={styles.signinButton}
          type={"submit"}
          value={"Sign in"}
        />
      </form>
    </main>
  );
}
