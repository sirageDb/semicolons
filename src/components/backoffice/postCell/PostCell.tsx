import React from "react";
import styles from "./postcell.module.scss"


interface IPostcellProps {
    
    image : any,
    title : string,
    description : string,
    usedLanguages : string[],
    publish : boolean
}



export default function PostCell() : JSX.Element {
    return (
        <div>
            <div>
                Post Cell
            </div>
        </div>
    )
}