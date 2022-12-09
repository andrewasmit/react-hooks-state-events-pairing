import React from "react";

function Video(){
    return(
        <div id = "videoDiv">
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allowFullScreen
                title="Thinking in React"
            />
        </div>
    )
}

export default Video