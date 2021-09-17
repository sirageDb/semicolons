import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./projects.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ProjectCell from "../../../components/backoffice/projectCell/ProjectCell";

export default function Projects(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    // const apiResponse = await fetch(apiEndPoint + "project/getprojects");
  };

  const newProject = () => {
    history.push("/backoffice/newproject");
  };

  return (
    <MainLayoutBackoffice pageTitle={"Projects"}>
      <button onClick={newProject} className={styles.newProjectButton}>
        New Project
      </button>
      <div>
        <ProjectCell
          project_id={"id project"}
          image={"image"}
          title={"this si the title"}
          description={"this is the descriptnion"}
          usedLanguages={["javascript", "java"]}
          publish={false}
        />
      </div>
    </MainLayoutBackoffice>
  );
}
