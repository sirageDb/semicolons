export const CREATE_POST = "/post/createpost";
export const GET_POSTS = "/post/getposts";
export const GET_POSTS_PUBLISHED = "/post/getpostspublished";
export const GET_POST = "/post/getpost?slug=";
export const DELETE_POST = "/post/deletepost";
export const UPDATE_POST = "/post/updatepost";
export const PUBLISH_POST = "/post/publishpost";
export const PRIVATIZE_POST = "/post/privatizepost";
export const ADD_VIEW = "/post/addView";
export const INTERACT = (type : string, action: string) : string => {
    return `/post/interact?type=${type}&action=${action}`
}