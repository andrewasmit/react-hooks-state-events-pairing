import React from "react";

function Comment({ user, comment, id }){
    return(
        <div id={id}>
            <h4>{user}</h4>
            <p> {comment}</p>
        </div>
    )
    }

    export default Comment;