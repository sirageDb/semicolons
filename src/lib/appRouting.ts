

export const POST_EDITOR_NEW = "/backoffice/posteditor";
export const POST_EDITOR_EXISTS = "/backoffice/posteditor/:post_id"
export const POST_EDITOR_EXISTS_CONSUMED = (post_id : string) => {
    return(POST_EDITOR_NEW + "/" + post_id);
}
export const POSTS_BO = "/backoffice/posts";