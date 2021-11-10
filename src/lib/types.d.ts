export interface IImage {
    path : string,
    alt : string
}
export interface IProject {
    name: string,
    projectLink: string,
    sourceCodeLink: string,
    description : string,
    image: IImage,
    publish : boolean,
    usedLanguages: string[], 
} 

//========================================

export interface IInteraction {
    love : number, 
    idea : number
} 

export interface IPost {
    private _id: string;
    title: string,
    content: string,
    tags: string[],
    publish: boolean,
    creationDate: Date,
    lastModificationDate: Date,
    image: IImage,
    interactions : Interaction,
    readometer : number,
    views : number,
    slug : string,
    thrillDescription : string

}



export interface ITagProps {
    text : string
  }
  
  
export interface IPostCellProps {
    _id : string
    title : string,
    tags : string[],
    slug: string,
    imagePath : string,
    imageAlt : string,
    loveInteractions : number,
    ideaInteractions : number,
    thrillDescription : string
  }
  


//========================================

export interface IUser {
    username : string,
    email : string,
    password : string
}

//========================================

export interface IContact {
    fullname : string,
    email : string,
    message : string,
    subject : string,
    dateContacted : Date,
    isNewContact: boolean
}