import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./projects.module.scss";
import MainLayoutBackoffice from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ProjectCell from "../../../components/backoffice/projectCell/ProjectCell";
import apiEndPoint from "../../../config/apiEndPoint";

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState([])
  
  const history = useHistory();


  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const apiResponse = await fetch(apiEndPoint + "project/getprojects");
    const data = await apiResponse.json();
    setProjects(data);
    console.log(data);
  };

  const newProject = () => {
    history.push("/backoffice/projecteditor");
  };

  return (
    <MainLayoutBackoffice pageTitle={"Projects"}>
      <button onClick={newProject} className={styles.newProjectButton}>
        New Project
      </button>
      <div className={styles.projectsContainer}>
        {
          projects.map((project : any) => {
            return <ProjectCell
            key = {project._id}
            project_id={project._id}
            image={project.image}
            name={project.name}
            description={project.description}
            usedLanguages={project.useLanguages}
            publish={project.publish}
          />
          })
        }

      </div>
    </MainLayoutBackoffice>
  );
}
