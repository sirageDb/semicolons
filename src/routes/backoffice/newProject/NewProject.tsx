import React, { useState } from "react";
import styles from "./newProject.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import TagsOrganizer from "../../../components/backoffice/tagsOrganizer/TagsOrganizer";
import addIcon from "../../../assets/addIcon.svg";



export default function newProject(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [sourceCodeLink, setSourceCodeLink] = useState<string>("");
  const [singleLanguage, setSingleLanguages] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File>();

  const onFileChange = (file: any) => {
    setImage(file);
    console.log(file);
  };

  const submitForm = () => {
    window.alert("submit form");
  };

  const saveProject = () => {
    window.alert("save project");
  };

  const publishProject = () => {
    window.alert("publish project");
  };

  const addLanguage = () => {
    setLanguages([...languages, singleLanguage]);
    setSingleLanguages("");
  };

  return (
    <MainLayout pageTitle={"Project editor"}>
      <div>
        <form>
          <div className={styles.inputContainer}>
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
          <div className={styles.inputContainer}>
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
          <div className={styles.inputContainer}>
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
          <div className={styles.inputContainer}>
            <div>
              <label>Languages</label>
            </div>
            <TagsOrganizer tags={languages}/>
            <div className={styles.languagesInput}>
              <input value={singleLanguage} onChange={(event) => setSingleLanguages(event.target.value)} type={"text"} className={styles.input} />
              <img alt={"Add language"} src={addIcon} onClick={addLanguage} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div>
              <label>Description</label>
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className={styles.textArea}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type={"file"}
              onChange={(e) => onFileChange(e.target.value[0])}
            />
            <div>{image}</div>
          </div>
        </form>
      </div>

      <button onClick={saveProject} className={styles.actionButton}>
        Save
      </button>
      <button onClick={publishProject} className={styles.actionButton}>
        Publish
      </button>
    </MainLayout>
  );
}
