import React, { useState, useEffect } from "react";
import styles from "./projectEditor.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import TagsOrganizer from "../../../components/backoffice/tagsOrganizer/TagsOrganizer";
import addIcon from "../../../assets/addIcon.svg";
import apiEndPoint from "../../../config/apiEndPoint";
import { useHistory, useParams } from "react-router";

export default function ProjectEditor(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [sourceCodeLink, setSourceCodeLink] = useState<string>("");
  const [singleLanguage, setSingleLanguages] = useState<string>("");
  const [languages, setLanguages] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [imagePreviewSrc, setImagePreviewSrc] = useState<any>();
  const [publish, setPublish] = useState<boolean>(false);
  const { project_id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    if (project_id) {
      getProject(project_id);
    }
  }, []);

  const getProject = async (project_id: string) => {
    const apiResponse = await fetch(apiEndPoint + "project/getsingleproject/?project_id=" + project_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await apiResponse.json();
    setName(data.name);
    setProjectLink(data.projectLink);
    setSourceCodeLink(data.sourceCodeLink);
    setDescription(data.description);
    setLanguages(data.usedLanguages);
    setImage(data.image);
    setPublish(data.publish);
    // imagePreview(data.image);
    console.log(data);
  };

  const imagePreview = (imageFile: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImagePreviewSrc(reader.result);
    };
  };

  const onFileChange = (uploadedImage: any) => {
    imagePreview(uploadedImage);
    setImage(uploadedImage);
  };

  // Create projecct
  //===================================================
  const createProject = async () => {
    const formData = new FormData();
    formData.append(image.name, image);
    for (const pair of formData.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }

    const apiResponse = await fetch(apiEndPoint + "project/createproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: ,
    });
    apiResponse;


/*     const imageData = new FormData();
    imageData.append(image.name, image);
    for (const pair of imageData.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }

    const apiResponse = await fetch(apiEndPoint + "project/createproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        projectLink: projectLink,
        sourceCodeLink: sourceCodeLink,
        image: imageData,
        description: description,
        usedLanguages: languages,
      }),
    });
    apiResponse; */
  };

  // save projecct
  //===================================================
  const saveProject = () => {
    window.alert("save project");
  };

  // publish projecct
  //===================================================
  const publishProject = async () => {
    await fetch(apiEndPoint + "project/publishproject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: project_id,
      }),
    });
  };
  // unpublish projecct
  //===================================================
  const unpublishProject = async () => {
    await fetch(apiEndPoint + "project/privitiseproject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: project_id,
      }),
    });
  };

  // delete projecct
  //===================================================
  const deleteProject = async () => {
    const isConfirmed = window.confirm("Delete project ?");
    if (isConfirmed) {
      const apiResponse  = await fetch(apiEndPoint + "project/deleteproject", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_id: project_id,
        }),
      });
      if(apiResponse.status === 200){
        history.push("/backoffice/projects")
      }
    }
  };

  // add language callbacck
  //===================================================
  const addLanguage = () => {
    if (singleLanguage !== "") {
      setLanguages([...languages, singleLanguage]);
      setSingleLanguages("");
    }
  };

  // remove tag callback
  //===================================================
  const removeTag = (text: string) => {
    const index = languages.indexOf(text);
    if (index > -1) {
      setLanguages(languages.filter((language) => language !== text));
    }
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
            <TagsOrganizer removeTagCallback={removeTag} tags={languages} />
            <div className={styles.languagesInput}>
              <input
                value={singleLanguage}
                onChange={(event) => setSingleLanguages(event.target.value)}
                type={"text"}
                className={styles.input}
              />
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
            <input type={"file"} onChange={(e) => onFileChange(e?.target?.files?.[0])} />
            <div>{image && <img src={imagePreviewSrc} />}</div>
          </div>
        </form>
      </div>

      <button onClick={project_id ? saveProject : createProject} className={styles.actionButton}>
        Save
      </button>
      {publish === false ? (
        <button onClick={publishProject} className={styles.actionButton}>
          Publish
        </button>
      ) : (
        <button onClick={unpublishProject} className={styles.actionButton}>
          Unpublish
        </button>
      )}

      {project_id && (
        <button onClick={deleteProject} className={styles.actionButtonDelete}>
          Delete
        </button>
      )}
    </MainLayout>
  );
}
