/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import styles from "./postEditor.module.scss";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import TagsOrganizer from "../../../components/backoffice/tagsOrganizer/TagsOrganizer";
import addIcon from "../../../assets/addIcon.svg";
import apiEndPoint from "../../../config/apiEndPoint";
import { useParams } from "react-router";
import { CREATE_POST, GET_POST_BY_ID, UPDATE_POST } from "../../../lib/endpoints";
import PostSDK from "../../../SDK/postSDK";
import ReactMarkdown from "react-markdown";
import remarkGemoji from "remark-gemoji";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { IPost } from "../../../lib/types";

export default function PostEditor(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [singleTag, setSingleTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [thrillDescription, setThrillDescription] = useState<string>("");
  const [readometer, setReadometer] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<any>();
  const [imageALT, setImageALT] = useState<string>("");
  const [imagePreviewSrc, setImagePreviewSrc] = useState<any>();
  const [imagePath, setImagePath] = useState<string>("");
  const [publish, setPublish] = useState<boolean>(false);

  interface IParams {
    post_id: string | any;
  }

  const { post_id } = useParams<IParams>();
  const postSDK = new PostSDK();
  useEffect(() => {
    if (post_id) {
      getPost(post_id);
    }
  }, []);

  //=========================================================
  const getPost = async (post_id: string) => {
    const apiResponse = await fetch(GET_POST_BY_ID(post_id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data : IPost = await apiResponse.json();
    console.log(data);
    setTitle(data.title);
    setThrillDescription(data.thrillDescription);
    setTags(data.tags);
    setImageALT(data.image.alt);
    setImagePath(data.image.path);
    setContent(data.content);
    setPublish(data.publish);
    setReadometer(data.readometer.toString());
  };

  // Create post
  //===================================================
  const createPost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("alt", imageALT);
    formData.append("image", imageFile);
    formData.append("thrillDescription", thrillDescription);
    formData.append("content", content);
    formData.append("readometer", readometer.toString());
    for (let i = 0; i < tags.length; i++) {
      formData.append("tags", tags[i]);
    }

    const apiResponse = await fetch(CREATE_POST, {
      method: "POST",
      body: formData,
    });
    if (apiResponse.status === 200) {
      window.alert("Post saved successfully");
      window.location.reload();
    } else if (apiResponse.status !== 200) {
      window.alert("Error saving post");
    }
  };

  // save post
  //===================================================
  const savePost = async () => {
    const isConfirmed = window.confirm("Save post ?");
    if (isConfirmed) {
      const formData = new FormData();
      formData.append("post_id", post_id);
      formData.append("title", title);
      formData.append("alt", imageALT);
      formData.append("image", imageFile);
      formData.append("thrillDescription", thrillDescription);
      formData.append("content", content);
      formData.append("readometer", readometer.toString());
      for (let i = 0; i < tags.length; i++) {
        formData.append("tags", tags[i]);
      }

      const apiResponse = await fetch(UPDATE_POST, {
        method: "PUT",
        body: formData,
      });
      if (apiResponse.status === 200) {
        window.alert("Post updated successfully");
        window.location.reload();
      } else if (apiResponse.status !== 200) {
        window.alert("Error updating post");
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

  // publish post
  //===================================================
  const publishPost = async () => {
    postSDK.publishPost(post_id);
  };
  // unpublish post
  //===================================================
  const unpublishPost = async () => {
    postSDK.unpublishPost(post_id);
  };

  // delete post
  //===================================================
  const deletePost = async () => {
    postSDK.deletePost(post_id);
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

  //===================================================

  return (
    <MainLayout pageTitle={"Post editor"}>
      <div>
        <form>
          <div className={styles.inputContainer}>
            <div>
              <label htmlFor={"title"}>Title</label>
            </div>
            <input
              name={"title"}
              type={"text"}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              <label htmlFor={"readometer"}>Readometer</label>
            </div>
            <input
              name={"readometer"}
              type={"text"}
              onChange={(e) => setReadometer(e.target.value)}
              value={readometer}
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <div>
              <label>Thrill description</label>
            </div>
            <textarea
              onChange={(e) => setThrillDescription(e.target.value)}
              value={thrillDescription}
              className={styles.textArea}
            />
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGemoji]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    PreTag="div"
                    style={atomOneDark}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
          <div className={styles.inputContainer}>
            <div>
              <label>Content</label>
            </div>
            <textarea onChange={(e) => setContent(e.target.value)} value={content} className={styles.textArea} />
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
      <button onClick={post_id ? savePost : createPost} className={styles.actionButton}>
        Save
      </button>
      {post_id && (
        <>
          {publish === false ? (
            <button onClick={publishPost} className={styles.actionButton}>
              Publish
            </button>
          ) : (
            <button onClick={unpublishPost} className={styles.actionButton}>
              Unpublish
            </button>
          )}
        </>
      )}

      {post_id && (
        <button onClick={deletePost} className={styles.actionButtonDelete}>
          Delete
        </button>
      )}
    </MainLayout>
  );
}
