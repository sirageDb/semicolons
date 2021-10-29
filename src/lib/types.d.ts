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
    slug : string
}



export interface ITagProps {
    text : string
  }
  
  
export interface IPostCellProps {
    title : string,
    tags : string[],
    creationDate : string
    lastModificationDate : string
    slug: string,
    imagePath : string,
    imageAlt : string,
    loveInteractions : number,
    ideaInteractions : number,
    readometer : number,
    views : number
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