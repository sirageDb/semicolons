import apiEndPoint from "../config/apiEndPoint";


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
    private fetchInteractionEndPoint = async (post_id: string, action: "add" | "remove", type: "love" | "idea"): Promise<Response> => {
        const apiResponse = await fetch(apiEndPoint + `/post/interact?type=${type}&action=${action}`, {
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
    public loveInteractionController = async (postId: string): Promise<void> => {
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
    };

    public ideaInteractionController = async (postId: string): Promise<void> => {
        const ideaInteractionsStorage = window.localStorage.getItem("ideaInteractions");
        let stored_id: any | string[] = [];
        if (!ideaInteractionsStorage) {
            localStorage.setItem("ideaInteractions", JSON.stringify(stored_id));
            this.setInteraction("ideaInteractions", postId, stored_id);
        }
        else if (ideaInteractionsStorage) {
            stored_id = JSON.parse(ideaInteractionsStorage);
            if (stored_id.includes(postId)) {
                this.removeInteraction("ideaInteractions", postId, stored_id)
            }
            else if (!stored_id.includes(postId)) {
                this.setInteraction("ideaInteractions", postId, stored_id)
            }
        }
    };


    public sharePost = () => {
        window.alert("share");
    };


    public readPost = () => {
        window.alert("read");
    }
}

















