import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="video__footer">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description} </p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {({index})=>(
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
        </div>
    )
}
export default VideoFooter
