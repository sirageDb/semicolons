import apiEndPoint from "../config/apiEndPoint";

export const CREATE_POST = apiEndPoint + "/post/createpost";
export const GET_POSTS = apiEndPoint + "/post/getposts";
export const GET_POSTS_PUBLISHED = apiEndPoint + "/post/getpostspublished";

export const GET_POST_BY_SLUG = (slug: string): string => {
    return `${apiEndPoint}/post/getpost?slug=${slug}`;
}

export const GET_POST_BY_ID = (post_id: string): string => {
    return `${apiEndPoint}/post/getpostbyid?post_id=${post_id}`;

}
export const DELETE_POST = apiEndPoint + "/post/deletepost";
export const UPDATE_POST = apiEndPoint + "/post/updatepost";
export const PUBLISH_POST = apiEndPoint + "/post/publishpost";
export const PRIVATIZE_POST = apiEndPoint + "/post/privatizepost";
export const ADD_VIEW = apiEndPoint + "/post/addView";
export const INTERACT = (type: string, action: string): string => {
    return `${apiEndPoint}/post/interact?type=${type}&action=${action}`
}

//=====================================
export const CREATE_PROJECT = apiEndPoint + "/post/createproject"
export const GET_PROJECT = apiEndPoint + "/project/getprojects"
export const GET_SINGLE_PROJECT = (project_id : string) : string => {
    return `${apiEndPoint}/project/getsingleproject/?project_id=${project_id}`
}
export const GET_PROJECTS_PUBLISHED = apiEndPoint + "/project/getprojectspublished";
export const DELETE_PROJECT = apiEndPoint + "/project/deleteproject";
export const UPDATE_PROJECT = apiEndPoint + "/project/deleteproject";
export const PUBLISH_PROJECT = apiEndPoint + "/project/publishproject";
export const PRIVIISE_PROJECT = apiEndPoint + "/project/privitiseproject";