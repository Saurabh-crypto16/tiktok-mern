import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, messages, shares}) {

    //false means video is not playing by default
    const[playing,setPlaying]=useState(false);

    //it is used to play the video at which the cursor points
    const videoRef = useRef(null);

    //when clicked on video
    const handleVideoPress=()=>{
        //if video is playing then stop it
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        //otherwise stop it
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        <div className="video">
            <video className="video__player"
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            src={url}>
            </video>

            <VideoFooter channel={channel} 
                description={description}
                song={song}/>

            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video;
