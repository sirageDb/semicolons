import React, { SyntheticEvent, useContext } from "react";
import { useState } from "react";
import styles from "./adminAuth.module.scss";
import { useHistory } from "react-router";
import { AuthContext } from "../../../lib/AuthContext";
import { PROJECTS_BO } from "../../../lib/appRouting";

export default function AdminAuth(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (email.length > 0 && password.length > 0) {
      signIn(email, password);
      history.push(PROJECTS_BO);
    } else {
      window.alert("Provide email and password");
    }
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
        <input className={styles.signinButton} type={"submit"} value={"Sign in"} />
      </form>
    </main>
  );
}
