import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./projects.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ProjectCellBackoffice from "../../../components/projectCellBackoffice/ProjectCellBackoffice";

export default function Projects(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    // const apiResponse = await fetch(apiEndPoint + "project/getprojects");
  };

  const newProject = () => {
    history.push("/")
  };

  return (
    <MainLayoutBackoffice pageTitle={"Projects"}>
      <button onClick={newProject} className={styles.newProjectButton}>
        New Project
      </button>
    </MainLayoutBackoffice>
  );
}
