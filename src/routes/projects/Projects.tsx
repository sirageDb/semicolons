import React, { useEffect, useState } from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import ProjectCell from "../../components/projectCell/ProjectCell";
import styles from "./projects.module.scss";
import { IProject } from "../../lib/types";
import { GET_PROJECTS_PUBLISHED } from "../../lib/endpoints";
import brand from "../../assets/brand.png";

export default function Projects(): JSX.Element {
  const [projects, setProject] = useState<IProject[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const apiResponse = await fetch(GET_PROJECTS_PUBLISHED);
    const data = await apiResponse.json();
    setProject(data);
  };

  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.pageHeadingContainer}>
        <div className={styles.pageTitleContainer}>
          <img className={styles.brand} src={brand} alt={"semicolons projects and use case"} />
          <h1>Projects and case study</h1>
        </div>
        <h2 className={styles.pageExplanation}>
          Dive in case studies of our projects, side projects and some opensource.
        </h2>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index: number) => {
          return (
            <ProjectCell
              key={index}
              image={project.image.path}
              imageAlt={project.image.alt}
              name={project.name}
              tags={project.tags}
              projectLink={project.projectLink}
              sourceCodeLink={project.sourceCodeLink}
              description={project.description}
              projectType = {"opensource"}
              isInDevelopment = {true}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}
