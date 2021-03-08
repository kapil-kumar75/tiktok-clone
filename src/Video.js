import React, { useRef, useState } from "react";
import "./Video.css";
import Video1 from "./video.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar'

const Video = () => {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src={Video1}
        controls="controls"
      ></video>
      <VideoFooter/>
      <VideoSidebar/>
    </div>
  );
};

export default Video;
