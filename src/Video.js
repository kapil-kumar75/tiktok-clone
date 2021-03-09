import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar'

const Video = ({url,channel,description,song, likes,shares,messages}) => {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src={url}
        controls="controls"
      ></video>
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares  } />
    </div>
  );
};

export default Video;
