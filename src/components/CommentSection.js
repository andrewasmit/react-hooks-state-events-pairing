import React from "react";
import Comment from "./Comment";

function CommentSection({ 
    data, 
    showComments, 
    setShowComments, 
}){

    // .MAP iteration of what comments to display
    const commentsToDisplay= data.comments.map(c=>{
        if (showComments === true){
        return <Comment 
                    key ={c.id}
                    user = {c.user}
                    comment = {c.comment}
                /> 
        }
    })




    // The return of JSX elements
    return (
        <div id = "commentSection">
            <button 
                onClick={()=>setShowComments(!showComments)}
                id="commentToggle"
            >Show/Hide Comments
            </button>
            {commentsToDisplay}
        </div>
    )
}

export default CommentSection;