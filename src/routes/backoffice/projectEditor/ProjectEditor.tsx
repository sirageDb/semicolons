import React, { useState, useEffect, useContext } from "react";
import styles from "./projectEditor.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import TagsOrganizer from "../../../components/backoffice/tagsOrganizer/TagsOrganizer";
import addIcon from "../../../assets/addIcon.svg";
import apiEndPoint from "../../../config/apiEndPoint";
import { useParams } from "react-router";
import ProjectSDK from "../../../SDK/projectSDK";
import { AuthContext } from "../../../lib/AuthContext";

export default function ProjectEditor(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [sourceCodeLink, setSourceCodeLink] = useState<string>("");
  const [singleTag, setSingleTag] = useState<string>("");
  const [tags, setTags] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [imageFile, setImageFile] = useState<any>();
  const [imageALT, setImageALT] = useState<string>("");
  const [imagePreviewSrc, setImagePreviewSrc] = useState<any>();
  const [imagePath, setImagePath] = useState<string>("");
  const [publish, setPublish] = useState<boolean>(false);

  interface IParams {
    project_id: string | any;
  }

  const { project_id } = useParams<IParams>();
  const { getToken } = useContext(AuthContext);
  const projectSDK = new ProjectSDK();
  useEffect(() => {
    if (project_id) {
      getProject(project_id);
    }
  }, []);

  //=========================================================
  const getProject = async (project_id: string) => {
    const apiResponse = await fetch(apiEndPoint + "/project/getsingleproject/?project_id=" + project_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: getToken(),
      },
    });
    const data = await apiResponse.json();

    setName(data.name);
    setProjectLink(data.projectLink);
    setSourceCodeLink(data.sourceCodeLink);
    setDescription(data.description);
    setTags(data.tags);
    setImageALT(data.image.alt);
    setImagePath(data.image.path);
    setPublish(data.publish);
  };

  // Create projecct
  //===================================================
  const createProject = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("alt", imageALT);
    formData.append("image", imageFile);
    formData.append("description", description);
    for (let i = 0; i < tags.length; i++) {
      formData.append("tags", tags[i]);
    }
    formData.append("projectLink", projectLink);
    formData.append("sourceCodeLink", sourceCodeLink);

    const apiResponse = await fetch(apiEndPoint + "/project/createproject", {
      method: "POST",
      body: formData,
      headers: { authorization: getToken() },
    });
    if (apiResponse.status === 200) {
      window.alert("Project saved successfully");
      window.location.reload();
    } else if (apiResponse.status !== 200) {
      window.alert("Error saving project");
    }
  };

  // save projecct
  //===================================================
  const saveProject = async () => {
    const isConfirmed = window.confirm("Save project ?");
    if (isConfirmed) {
      const formData = new FormData();
      formData.append("project_id", project_id);
      formData.append("name", name);
      formData.append("alt", imageALT);
      formData.append("image", imageFile);
      formData.append("description", description);
      for (let i = 0; i < tags.length; i++) {
        formData.append("tags", tags[i]);
      }
      formData.append("projectLink", projectLink);
      formData.append("sourceCodeLink", sourceCodeLink);

      const apiResponse = await fetch(apiEndPoint + "/project/updateproject", {
        method: "PUT",
        body: formData,
        headers: { authorization: getToken() },
      });
      if (apiResponse.status === 200) {
        window.alert("Project updated successfully");
        window.location.reload();
      } else if (apiResponse.status !== 200) {
        window.alert("Error updating project");
      }
    }
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
    setImageFile(uploadedImage);
  };

  // publish projecct
  //===================================================
  const publishProject = async () => {
    projectSDK.publishProject(project_id);
  };
  // unpublish projecct
  //===================================================
  const unpublishProject = async () => {
    projectSDK.unpublishProject(project_id);
  };

  // delete projecct
  //===================================================
  const deleteProject = async () => {
    projectSDK.deleteProject(project_id);
  };

  // add tag callbacck
  //===================================================
  const addTag = () => {
    if (singleTag !== "") {
      setTags([...tags, singleTag]);
      setSingleTag("");
    }
  };

  // remove tag callback
  //===================================================
  const removeTag = (text: string) => {
    const index = tags.indexOf(text);
    if (index > -1) {
      setTags(tags.filter((tag) => tag !== text));
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
              <label>Tags</label>
            </div>
            <TagsOrganizer removeTagCallback={removeTag} tags={tags} />
            <div className={styles.languagesInput}>
              <input
                value={singleTag}
                onChange={(event) => setSingleTag(event.target.value)}
                type={"text"}
                className={styles.input}
              />
              <img alt={"Add tag"} src={addIcon} onClick={addTag} />
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
            <div>
              <label>Image ALT</label>
            </div>
            <input
              type={"text"}
              onChange={(e) => setImageALT(e.target.value)}
              value={imageALT}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <input type={"file"} onChange={(e) => onFileChange(e?.target?.files?.[0])} />
            <div>{imageFile ? <img src={imagePreviewSrc} /> : <img src={apiEndPoint + "/" + imagePath} />}</div>
          </div>
        </form>
      </div>

      <button onClick={project_id ? saveProject : createProject} className={styles.actionButton}>
        Save
      </button>
      {project_id && (
        <>
          {publish === false ? (
            <button onClick={publishProject} className={styles.actionButton}>
              Publish
            </button>
          ) : (
            <button onClick={unpublishProject} className={styles.actionButton}>
              Unpublish
            </button>
          )}
        </>
      )}

      {project_id && (
        <button onClick={deleteProject} className={styles.actionButtonDelete}>
          Delete
        </button>
      )}
    </MainLayout>
  );
}
