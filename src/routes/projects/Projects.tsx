import React,{useEffect, useState} from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import ProjectCell from "../../components/projectCell/ProjectCell";
import spacemanProjects from "../../assets/spacemanProjects.svg";
import styles from "./projects.module.scss";
import { IProject } from "../../lib/types";
import { GET_PROJECTS_PUBLISHED } from "../../lib/endpoints";

export default function Projects(): JSX.Element {


  const [projects, setProject] = useState<IProject[]>([]);
  
  useEffect(() => {
    fetchProjects();
  }, [])

  const fetchProjects = async () => {
    const apiResponse = await fetch(GET_PROJECTS_PUBLISHED);
    const data = await apiResponse.json();
    setProject(data);
  }
  
  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.headingContainer}>
        <div className={styles.pageHeadingContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>Posts and articles zone</h1>
            <h2 className={styles.pageExplanation}>
              Here is the portfolio of my personal finished or in progress projects , some of them are also opensource.<br /> i work on various stages of projects lifecycle, starting from defining projects roadmap, UI/UX development, coding and testing till the deployment and maintenance
            </h2>
          </div>
          <div>
            <img className={styles.projectsImage} src={spacemanProjects} alt={"posts and articles page"} />
          </div>
        </div>
      </div>


      <div className={styles.projectsContainer}>


        {
          projects.map((project, index : number) => {
            return (<ProjectCell 
              key={index}
              image={project.image.path}
              imageAlt={project.image.alt}
              name={project.name}
              tags={project.tags}
              projectLink={project.projectLink}
              sourceCodeLink={project.sourceCodeLink}
              description={project.description}
            />)
          })
        }
      </div>
    </PageLayout>
  );
}
