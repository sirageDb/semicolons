import React from "react";
import PageLayout from "../../components/pageLayout/PageLayout";
import ProjectCell from "../../components/projectCell/ProjectCell";
import spacemanProjects from "../../assets/spacemanProjects.svg";
import styles from "./projects.module.scss";
import testProject from "../../assets/testproject.png";

export default function Projects(): JSX.Element {
  return (
    <PageLayout contentMaxWidth={900}>
      <div className={styles.headingContainer}>
        <div className={styles.pageHeadingContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>Posts and articles zone</h1>
            <div className={styles.pageExplanation}>
              Here is the portfolio of my personal finished or in progress projects , some of them are also opensource.<br /> i work on various stages of projects lifecycle, starting from defining projects roadmap, UI/UX development, coding and testing till the deployment and maintenance
            </div>
          </div>
          <div>
            <img src={spacemanProjects} alt={"posts and articles page"} />
          </div>
        </div>
      </div>


      <div className={styles.projectsContainer}>
          <ProjectCell
            image={testProject}
            imageAlt={"this is project image"}
            name={"this is project title"}
            tags={["javascript", "devops", "backend", "frontend"]}
            projectLink={"https://www.google.com"}
            sourceCodeLink={"https://www.github.com"}
            description={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It ha  s roots in a piece of classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin professor at  ampden-Sydney  College in Virginia"
            }
          />
        <ProjectCell
          image={testProject}
          imageAlt={"this is project image"}
          name={"this is project title"}
          tags={["javascript", "devops", "backend", "frontend"]}
          projectLink={"https://www.google.com"}
          sourceCodeLink={"https://www.github.com"}
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It ha  s roots in a piece of classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin professor at  ampden-Sydney  College in Virginia"
          }
        />
      </div>
    </PageLayout>
  );
}
