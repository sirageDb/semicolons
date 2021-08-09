import React, { SyntheticEvent } from "react";
import { useState } from "react";
import styles from "./adminAuth.module.scss";
import AlertBox from "../../components/alertBox/AlertBox";
import apiEndPoint from "../../lib/apiEndPoint";
import { useHistory } from "react-router";

export default function AdminAuth(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibleAlertBox, setIsVisibleAlertBox] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <main>
      <AlertBox
        alertText={"Error Email or password"}
        isVisible={isVisibleAlertBox}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div>
          <label htmlFor={"emailInput"}>Email</label>
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
          <label htmlFor={"password"}>Password</label>
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
