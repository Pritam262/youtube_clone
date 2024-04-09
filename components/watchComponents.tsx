'use client'
import Image from "next/image";
import Style from "@/app/style/watchComponent.module.css";
import { useState, useEffect } from "react";
import { useAppContext } from "@/app/context/appContext";
import { Video } from "../utils/types";
import { calculateRelativeTime } from "../lib/gettimestring";
import WatchComponentOption from "./watchComponentOption";
import WatchVideo from "./watchVideo";
import WatchVideoDescription from "./watchVideoDescription";

// const URLLink = `http://192.168.50.14:3000`;


// interface LikeDislike {
//   likeCount: number;
//   user:boolean;
// }


export default function WatchComponent({ params }: { params: { watch: string } }) {
  const [video, setVideo] = useState<Video>();

  const { serverIp } = useAppContext();

  // const videoDescription = video?.description;
  // const truncatedDescription = videoDescription?.substring(0, 20);




  const fetchData = async () => {
    try {
      const headers = new Headers();
      headers.append('videoid', params.watch);
      const videoresponse = await fetch(`${serverIp}/api/video/getvideo`, {
        method: 'GET',
        headers: headers,
      });
      const data: Video = await videoresponse.json();

      if (data.id) { // Fixed the check for _id property
        // Create a new video object with the desired properties
        const uploadDate = new Date(data.date);
        const newVideo: Video = {
          id: data.id,
          user: data.user,
          title: data.title,
          description: data.description, // Fixed the typo here
          coverImage: data.coverImage,
          videoFile: data.videoFile,
          views: data.views,
          date: calculateRelativeTime(uploadDate),
          chanelName: data.chanelName
        };

        setVideo(newVideo);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className={Style.hhftrf214}>
      <div className={Style.videoContainer}>

        <WatchVideo url={String(video?.videoFile)} />
        {/* <video className={Style.video} src={video?.videoFile} controls autoPlay ></video> */}
      </div>
      {/* Video details */}
      <div>
        {/* Video title, and other stuff */}
        <div className={`${Style.flex} ${Style.fd_c} ${Style.video_details}`}>
          {/* Video title */}
          <h2>{video?.title}</h2>
          <div className={Style.awer21}>
            {/* Channel name */}
            <div className={`${Style.channelDetails} ${Style.at_c}`}>
              <Image className={`${Style.userImage} ${Style.mr_10}`} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
              <div className={`${Style.mr_10}`}>
                {/* Channel name */}
                <h4>{video?.chanelName}</h4>
                <p className={Style.text}>14.2M Subscriber</p>
              </div>
              <button className={Style.subButton}>Subscribe</button>
            </div>
            {/* Channel details div end */}

            {/* Option */}

            <WatchComponentOption id={params.watch} />



          </div>
          {/* Video description */}

          <WatchVideoDescription date={video?.date} description={String(video?.description)} />

        </div>
      </div>
    </div>
  );
}