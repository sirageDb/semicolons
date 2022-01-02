import { useHistory } from "react-router";
import apiEndPoint from "../config/apiEndPoint";
import { POSTS_BO } from "../lib/appRouting";
import { ADD_VIEW, DELETE_POST, INTERACT } from "../lib/endpoints";


export default class PostSDK {

    private setInteraction = (localStorageName: string, post_id: string, storage: [any]): void => {
        storage.push(post_id);
        window.localStorage.setItem(localStorageName, JSON.stringify(storage));
    }
    //===================================================================================
    private removeInteraction = (localStorageName: string, post_id: string, storage: any) => {
        const index = storage.indexOf(post_id);
        storage.splice(index, 1);
        window.localStorage.setItem(localStorageName, JSON.stringify(storage));
    }

    //===================================================================================

    private setView = (post_id: string, storage: [any]): void => {
        storage.push(post_id);
        window.localStorage.setItem("views", JSON.stringify(storage));
    }

    //===================================================================================
    private fetchInteractionEndPoint = async (post_id: string, action: "add" | "remove", type: "love" | "idea"): Promise<Response> => {
        const apiResponse = await fetch(INTERACT(type, action), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_id: post_id
            })
        })
        return apiResponse;
    }

    //===================================================================================

    public unpublishPost = async (post_id: string): Promise<void> => {
        const apiResponse = await fetch(apiEndPoint + "/post/privatizepost", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_id: post_id,
            }),
        });
        if (apiResponse.status === 200) {
            window.alert("Post unpublished successfully");
            window.location.reload();
        } else {
            window.alert("Error unpublishing post");
        }
    }
    //===================================================================================
    public publishPost = async (post_id: string): Promise<void> => {
        const apiResponse = await fetch(apiEndPoint + "/post/publishpost", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_id: post_id,
            }),
        });

        if (apiResponse.status === 200) {
            window.alert("Post published successfully");
            window.location.reload();
        }
        else {
            window.alert("Error publishing post")
        }
    }
    //===================================================================================
    public deletePost = async (post_id: string): Promise<void> => {
        const isConfirmed = window.confirm("Delete post ?");
        if (isConfirmed) {
            const apiResponse = await fetch(DELETE_POST, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    post_id: post_id,
                }),
            });
            if (apiResponse.status === 200) {
                window.alert("post deleted successfully");
                window.location.href = POSTS_BO;
            } else {
                window.alert("Error deleting post");
            }
        }
    }

    //===================================================================================
    public loveInteractionController = async (postId: string, callback: CallableFunction): Promise<void> => {
        const loveInteractionsStorage = window.localStorage.getItem("loveInteractions");
        let stored_id: any | string[] = [];
        if (!loveInteractionsStorage) {
            const apiResposne = await this.fetchInteractionEndPoint(postId, "add", "love");
            if (apiResposne.status === 200) {
                localStorage.setItem("loveInteractions", JSON.stringify(stored_id));
                this.setInteraction("loveInteractions", postId, stored_id);
            }
        }
        else if (loveInteractionsStorage) {
            stored_id = JSON.parse(loveInteractionsStorage);
            if (stored_id.includes(postId)) {
                const apiResposne = await this.fetchInteractionEndPoint(postId, "remove", "love");
                if (apiResposne.status === 200) {
                    this.removeInteraction("loveInteractions", postId, stored_id)
                }
            }
            else if (!stored_id.includes(postId)) {
                const apiResposne = await this.fetchInteractionEndPoint(postId, "add", "love");
                if (apiResposne.status === 200) {
                    this.setInteraction("loveInteractions", postId, stored_id)
                }
            }
        }
        callback();
    };

    //===================================================================================

    public ideaInteractionController = async (postId: string, callback: CallableFunction): Promise<void> => {
        const ideaInteractionsStorage = window.localStorage.getItem("ideaInteractions");
        let stored_id: any | string[] = [];
        if (!ideaInteractionsStorage) {
            const apiResposne = await this.fetchInteractionEndPoint(postId, "add", "idea");
            if (apiResposne.status === 200) {
                localStorage.setItem("ideaInteractions", JSON.stringify(stored_id));
                this.setInteraction("ideaInteractions", postId, stored_id);
            }
        }
        else if (ideaInteractionsStorage) {
            stored_id = JSON.parse(ideaInteractionsStorage);
            if (stored_id.includes(postId)) {
                const apiResposne = await this.fetchInteractionEndPoint(postId, "remove", "idea");
                if (apiResposne.status === 200) {
                    this.removeInteraction("ideaInteractions", postId, stored_id)
                }
            }
            else if (!stored_id.includes(postId)) {
                const apiResposne = await this.fetchInteractionEndPoint(postId, "add", "idea");
                if (apiResposne.status === 200) {
                    this.setInteraction("ideaInteractions", postId, stored_id)
                }
            }
        }
        callback();
    };
    //==================================================================================
    public fetchAddView = async (post_id: string): Promise<Response> => {
        console.log(ADD_VIEW);
        const apiResponse = await fetch(ADD_VIEW, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_id: post_id
            })
        })
        return apiResponse;
    }

    //==================================================================================
    public addView = async (post_id: string): Promise<void> => {
        const viewInteractionStorage = window.localStorage.getItem("views");
        let stored_id: any | string[] = [];
        if (!viewInteractionStorage) {
            const apiResposne = await this.fetchAddView(post_id);
            if (apiResposne.status === 200) {
                localStorage.setItem("views", JSON.stringify(stored_id));
                this.setView(post_id, stored_id);
            }
        }
        else if (viewInteractionStorage) {
            stored_id = JSON.parse(viewInteractionStorage);
            if (!stored_id.includes(post_id)) {
                const apiResposne = await this.fetchAddView(post_id);
                if (apiResposne.status === 200) {
                    this.setView(post_id, stored_id)
                }
            }
        }

    }


    public sharePost = () => {
        window.alert("share");
    };


    public readPost = () => {
        window.alert("read");
    }
}

















