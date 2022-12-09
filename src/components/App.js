import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoDetails from "./VideoDetails.js";
import CommentSection from "./CommentSection.js";

function App() {
  console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(true)
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  return (
    <div className="App">
      <Video />
      <VideoDetails 
          data={video}
          upvotes={upvotes}
          setUpvotes={setUpvotes}
          downvotes={downvotes}
          setDownvotes={setDownvotes}
      />
      <CommentSection 
          data= {video}
          showComments={showComments}
          setShowComments={setShowComments}
          
      />
    </div>
  );
}

export default App;
