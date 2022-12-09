import React from "react";


function VoteButton({ upvotes, setUpvotes, downvotes, setDownvotes }){


    function upvoteHandler(){
        setUpvotes(upvotes+1);
    }
    function downvoteHandler(){
        setDownvotes(downvotes+1);
    }

    return (
        <div id="voteButtons">
            <button 
                onClick= {upvoteHandler} 
                id = "upvoteBtn"
            >{upvotes} 👍
            </button>
            <button 
                onClick= {downvoteHandler} 
                id = "downvoteBtn"
            >{downvotes} 👎
            </button>
        </div>
    )
}

export default VoteButton;