import React from 'react'
import './App.css'
import Video from './Video'
import Video1 from './video.mp4'

function App() {
  return (
    // BEN naming convension
    <div className="app">
      <div className="app__videos">
        <Video
          url={Video1}
          channel="kapil"
          description="wow tiktok clone using Mern"
          song="99 problems with react js"
          likes={110}
          shares={200}
          messages={348}
        />
        <Video
          url={Video1}
          channel="kapil"
          description="wow tiktok clone using Mern"
          song="19 problems with react js"
          likes={130}
          shares={230}
          messages={248}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
    </div>
  )
}

export default App
