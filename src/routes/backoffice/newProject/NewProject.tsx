import React, { useState } from "react";
import styles from "./newProject.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import TagsOrganizer from "../../../components/backoffice/tagsOrganizer/TagsOrganizer";

export default function newProject(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [sourceCodeLink, setSourceCodeLink] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File>();

  const onFileChange = (file: any) => {
    setImage(file);
    console.log(file);
  };

  const submitForm = () => {
    window.alert("submit");
  };

  return (
    <MainLayout pageTitle={"New Project"}>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <div>
              <label htmlFor={"name"}>Name</label>
            </div>
            <input
              name={"name"}
              type={"text"}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={styles.input}
            />
          </div>
          <div>
            <div>
              <label>Project link</label>
            </div>
            <input
              type={"text"}
              onChange={(e) => setProjectLink(e.target.value)}
              value={projectLink}
              className={styles.input}
            />
          </div>
          <div>
            <div>
              <label>Source code link</label>
            </div>
            <input
              type={"text"}
              onChange={(e) => setSourceCodeLink(e.target.value)}
              value={sourceCodeLink}
              className={styles.input}
            />
          </div>
          <div>
            <div>
              <label>Languages</label>
            </div>
            <input type={"text"} className={styles.input} />
          </div>
          <div>
            <div>
              <label>Description</label>
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className={styles.textArea}
            />
          </div>
          <div>
            <input
              type={"file"}
              onChange={(e) => onFileChange(e.target.value[0])}
            />
            <div>{image}</div>
          </div>
        </form>
      </div>

      <button className={styles.actionButton}>Save</button>
      <button className={styles.actionButton}>Publish</button>
    </MainLayout>
  );
}
