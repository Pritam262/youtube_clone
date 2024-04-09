"use client"

interface Props{
    date?:string,
    description:string,
}

import Styles from "@/app/style/watchComponent.module.css";
import { useState } from "react";

export default function WatchVideoDescription(props:Props){
    const [ismore, setIsmore] = useState(true); // Explicitly set the initial state to false


    const videoDescription = props.description;
    const truncatedDescription = videoDescription?.substring(0, 20);
  const handleClick = () => {
    setIsmore(!ismore); // Toggle the state when the button is clicked
  };
    return(
        <div className={Styles.videoDescription}>
        <p className={Styles.text}>{props.date}</p>
        {/* <p className={Styles.text}>{video[0]?.description.length >60 ? `${video[0]?.description.substring(0,20)}... more`: video[0]?.description}</p> */}
        <p className={Styles.text}>
          {ismore && videoDescription?.length > 60 ? `${truncatedDescription}... ` : `${videoDescription} `}
          {videoDescription?.length > 60 && <button className={Styles.showClick} onClick={handleClick}>{ismore ? 'Show More' : 'Show Less'}</button>}
        </p>
      </div>
    )
}