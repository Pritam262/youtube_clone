'use client'
import Image from "next/image";
import Style from "@/app/style/watchComponent.module.css";
import { useState, useEffect } from "react";

const URLLink = `http://192.168.50.14:3000`;
interface Video {
  _id: string;
  user: string;
  fname: string;
  lname: string;
  title: string;
  description: string; // Fixed typo here
  coverImage: string;
  videoFile: string;
  views: number;
  date: string;
}

interface LikeDislike {
  likeCount: number;
}


export default function WatchComponent({ params }: { params: { watch: string } }) {
  const [video, setVideo] = useState<Video[]>([]);
  const [count, setcount] = useState<LikeDislike[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [ismore, setIsmore] = useState(true); // Explicitly set the initial state to false

  const videoDescription = video[0]?.description;
  const truncatedDescription = videoDescription?.substring(0, 20);


  const handleClick = () => {
    setIsmore(!ismore); // Toggle the state when the button is clicked
  };

  const calculateRelativeTime = (uploadDate: Date) => {
    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate.getTime() - uploadDate.getTime()) / 1000);

    if (timeDifference < 60) {
      return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 2592000) { // 30 days
      const days = Math.floor(timeDifference / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 31536000) { // 365 days
      const months = Math.floor(timeDifference / 2592000); // Average month length
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(timeDifference / 31536000); // Average year length
      return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
  };

  const fetchData = async () => {
    try {
      const headers = new Headers();
      headers.append('videoid', params.watch);
      const videoresponse = await fetch(`${URLLink}/api/video/getvideo`, {
        method: 'GET',
        headers: headers,
      });
      const data = await videoresponse.json();
      // console.log(data.user);

      if (data._id) { // Fixed the check for _id property
        // Create a new video object with the desired properties
        const uploadDate = new Date(data.date);
        const newVideo: Video = {

          _id: data._id,
          user: data.user,
          title: data.title,
          fname: data.user.fname,
          lname: data.user.lname,
          description: data.description, // Fixed the typo here
          coverImage: data.coverImage,
          videoFile: data.videoFile,
          views: data.views,
          date: calculateRelativeTime(uploadDate),
        };

        setVideo([newVideo]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchLikeDislike = async () => {
    try {
      const headers = new Headers();
      headers.append('videoid', params.watch);
      const likeResponse = await fetch(`${URLLink}/api/video/getlike`, {
        method: 'GET',
        headers: headers
      })

      const like = await likeResponse.json();
      // console.log(data.user);
      if (like) {
        const newLikeDislike: LikeDislike = {
          likeCount: like.likeCount
        }

        setcount([newLikeDislike]);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    fetchData();
    fetchLikeDislike();
  }, []);


  return (
    <div className={Style.hhftrf214}>
      <div className={Style.videoContainer}>
        <video className={Style.video} src={video[0]?.videoFile} controls autoPlay ></video>
      </div>
      {/* Video details */}
      <div>
        {/* Video title, and other stuff */}
        <div className={`${Style.flex} ${Style.fd_c} ${Style.video_details}`}>
          {/* Video title */}
          <h2>{video[0]?.title}</h2>
          <div className={Style.awer21}>
            {/* Channel name */}
            <div className={`${Style.channelDetails} ${Style.at_c}`}>
              <Image className={`${Style.userImage} ${Style.mr_10}`} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
              <div className={`${Style.mr_10}`}>
                {/* Channel name */}
                <h4>{video[0]?.fname} {video[0]?.lname}</h4>
                <p className={Style.text}>14.2M Subscriber</p>
              </div>
              <button className={Style.subButton}>Subscribe</button>
            </div>
            {/* Channel details div end */}
            <div className={`${Style.flex} ${Style.at_c} ${Style.optionBtn}`}> {/* Button start */}
              {/* Like and dislike button */}
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}>
                {/* Like Button */}
                <div className={`${Style.flex} ${Style.at_c}  ${Style.likeBtn}`}>
                  <Image className={`${Style.mr_10} ${Style.icon}`} src="/assets/images/likeIcon.png" width={20} height={20} alt="" priority />
                  {count[0]?.likeCount}
                </div>
                {/* Dislike Button */}
                <div className={`${Style.flex} ${Style.at_c} `}>
                  <Image className={`${Style.mr_10} ${Style.icon}`} src="/assets/images/dislikeIcon.png" width={20} height={20} alt="" priority />
                </div>
              </div> {/* Like and Dislike button end */}
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Share button */}
                <Image className={`${Style.mr_10} ${Style.icon}`} src="/assets/images/sendIcon.png" width={20} height={20} alt="" priority />
                Share
              </div>
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Download button */}
                <Image className={`${Style.mr_10} ${Style.icon}`} src="/assets/images/downloadIcon.png" width={20} height={20} alt="" priority />
                Download
              </div> {/* Download button end */}
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Save button */}
                <Image className={`${Style.mr_10} ${Style.icon}`} src="/assets/images/saveIcon.png" width={20} height={20} alt="" priority />
                Save
              </div>
            </div>
          </div>
          {/* Video description */}
          <div className={Style.videoDescription}>
            <p className={Style.text}>{video[0]?.date}</p>
            {/* <p className={Style.text}>{video[0]?.description.length >60 ? `${video[0]?.description.substring(0,20)}... more`: video[0]?.description}</p> */}
            <p className={Style.text}>
              {ismore && videoDescription?.length > 60 ? `${truncatedDescription}... ` : `${videoDescription} `}
              {videoDescription?.length > 60 && <button className={Style.showClick} onClick={handleClick}>{ismore ? 'Show More' : 'Show Less'}</button>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}