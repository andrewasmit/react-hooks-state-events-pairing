import React from "react";
import VoteButton from "./VoteButton";

function VideoDetails({ data, upvotes, setUpvotes, downvotes, setDownvotes }){
    return(
        <div id = "VideoDetails">
            <h2>{data.title}</h2>
            <h5>{data.views} views | Uploaded on {data.createdAt}</h5>
            <VoteButton 
                data={data}
                upvotes={upvotes}
                setUpvotes={setUpvotes}
                downvotes={downvotes}
                setDownvotes={setDownvotes}
            />
        </div>
    )
}

export default VideoDetails