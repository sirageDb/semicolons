

const setInteraction = (localStorageName: string, post_id: string, storage: any): void => {
    storage.push(post_id);
    window.localStorage.setItem(localStorageName, JSON.stringify(storage));
    console.log(window.localStorage.getItem(localStorageName));
}

const removeInteraction = (localStorageName: string, post_id: string, storage: any) => {
    const index = storage.indexOf(post_id);
    storage.splice(index, 1);
    window.localStorage.setItem(localStorageName, JSON.stringify(storage));

    console.log(window.localStorage.getItem(localStorageName));
}



export const loveInteractionController = (postId: string): void => {
    const loveInteractionsStorage = window.localStorage.getItem("loveInteractions");
    let stored_id: any | string[] = [];
    if (!loveInteractionsStorage) {
        window.alert("here");
        localStorage.setItem("loveInteractions", JSON.stringify(stored_id));
        setInteraction("loveInteractions", postId, stored_id);
    }
    else if (loveInteractionsStorage) {
        stored_id = JSON.parse(loveInteractionsStorage);
        if (stored_id.includes(postId)) {
            removeInteraction("loveInteractions", postId, stored_id)
        }
        else if (!stored_id.includes(postId)) {
            setInteraction("loveInteractions", postId, stored_id)
        }
    }
};


export const ideaInteractionController = (postId: string): void => {
    const ideaInteractionsStorage = window.localStorage.getItem("ideaInteractions");
    let stored_id: any | string[] = [];
    if (!ideaInteractionsStorage) {
        localStorage.setItem("ideaInteractions", JSON.stringify(stored_id));
        setInteraction("ideaInteractions", postId, stored_id);
    }
    else if (ideaInteractionsStorage) {
        stored_id = JSON.parse(ideaInteractionsStorage);
        if (stored_id.includes(postId)) {
            removeInteraction("ideaInteractions", postId, stored_id)
        }
        else if (!stored_id.includes(postId)) {
            setInteraction("ideaInteractions", postId, stored_id)
        }
    }
};



export const sharePost = () => {
    window.alert("share");
};