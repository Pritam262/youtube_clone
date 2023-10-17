'use client'
// import Image from "next/image"
// import Style from "@/app/style/watchComponent.module.css"
// import { useState, useEffect } from "react";
// interface Video {
//   _id: string;
//   user: string;
//   title: string;
//   description:string;
//   coverImage: string;
//   videoFile:string;
//   views: number;
//   date: string;
// }

// export default function WatchComponent({ params }: { params: { watch: string } }){
//   const [video, setVideo] = useState<Video[]>([]);
//   const [isLoading, setIsLoading] = useState(false);


//   const calculateRelativeTime = (uploadDate: Date) => {
//     const currentDate = new Date();
//     const timeDifference = Math.floor((currentDate.getTime() - uploadDate.getTime()) / 1000);

//     if (timeDifference < 60) {
//         return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
//     } else if (timeDifference < 3600) {
//         const minutes = Math.floor(timeDifference / 60);
//         return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//     } else if (timeDifference < 86400) {
//         const hours = Math.floor(timeDifference / 3600);
//         return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//     } else if (timeDifference < 2592000) { // 30 days
//         const days = Math.floor(timeDifference / 86400);
//         return `${days} day${days !== 1 ? 's' : ''} ago`;
//     } else if (timeDifference < 31536000) { // 365 days
//         const months = Math.floor(timeDifference / 2592000); // Average month length
//         return `${months} month${months !== 1 ? 's' : ''} ago`;
//     } else {
//         const years = Math.floor(timeDifference / 31536000); // Average year length
//         return `${years} year${years !== 1 ? 's' : ''} ago`;
//     }
// };
//   const fetchData = async () => {

//     try {
//       const headers = new Headers();
//       headers.append('videoid', params.watch);
//         const response = await fetch(`http://localhost:3000/api/video/getvideo`,{
//           method:'GET',
//           headers:headers,
//         } );
//         const data = await response.json();

//         if (data.list && data.list.items) {
//             const videos = data.list.items.map((video: { date: string | number | Date; }) => {
//                 const uploadDate = new Date(video.date);
//                 video.date = calculateRelativeTime(uploadDate);
//                 return video;
//             });
//             setVideo((prevVideoList) => [...prevVideoList, ...videos]);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// useEffect(() => {
// fetchData()
// }, []);
//     return(
//         <div className={Style.hhftrf214}>

//         <div className={Style.videoContainer}>
//           <video src={video.videoFile}></video>
//         </div>
//         {/* Video details */}
//         <div>
//           {/* Video title, and other stuf */}
//           <div className={`${Style.flex}  ${Style.fd_c} ${Style.video_details}`}>
//             {/* Video title */}
//             <h2>{video.title}</h2>
//             <div className={Style.awer21}>
//               {/* Channel name */}
//               <div className={`${Style.channelDetails} ${Style.at_c}`}>
//                 <Image className={`${Style.userImage} ${Style.mr_10}`} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
//                 <div className={`${Style.mr_10}`}>
//                   {/* Channel name */}
//                   <h4>Think Music India</h4>
//                   <p className={Style.text}>14.2M Subscriber</p>
//                 </div>
//                 <button className={Style.subButton}>Subcribe</button>
//               </div>  {/* Channel details div end*/}
//               <div className={`${Style.flex} ${Style.at_c} ${Style.optionBtn}`}>  {/* Button start*/}

//                 {/* Like and dislike button */}
//                 <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}>
//                   {/* Like Button */}
//                   <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10}`}>
//                     <Image className={Style.mr_10} src="/assets/images/likeIcon.png" width={20} height={20} alt="" priority />
//                     321K
//                   </div>
//                   {/* Dislike Button */}
//                   <div className={`${Style.flex} ${Style.at_c} `}>
//                     <Image className={Style.mr_10} src="/assets/images/dislikeIcon.png" width={20} height={20} alt="" priority />
//                   </div>

//                 </div> {/* Like and Dislike button end*/}


//                 <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Share button */}
//                   <Image className={Style.mr_10} src="/assets/images/sendIcon.png" width={20} height={20} alt="" priority />
//                   Share
//                 </div>

//                 <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Download button*/}
//                   <Image className={Style.mr_10} src="/assets/images/downloadIcon.png" width={20} height={20} alt="" priority />
//                   Download
//                 </div> {/*Download button end*/}

//                 <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Save button*/}
//                   <Image className={Style.mr_10} src="/assets/images/saveIcon.png" width={20} height={20} alt="" priority />
//                   Save
//                 </div>


//               </div>
//             </div>
//             {/* Video description */}
//             <div className={Style.videoDescription}>
//               <p className={Style.text}>{video.sescription}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }


import Image from "next/image";
import Style from "@/app/style/watchComponent.module.css";
import { useState, useEffect } from "react";

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
      const videoresponse = await fetch(`http://localhost:3000/api/video/getvideo`, {
        method: 'GET',
        headers: headers,
      });
      const data = await videoresponse.json();
      // console.log(data.user);

      if (data._id) { // Fixed the check for _id property
        // Create a new video object with the desired properties
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
          date: data.date,
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
      const likeResponse = await fetch('http://localhost:3000/api/video/getlike', {
        method: 'GET',
        headers: headers
      })

      const like = await likeResponse.json();
      console.log(like)
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
      {/* <div className={Style.videoContainer}> */}
      <video className={Style.video} src={video[0]?.videoFile} controls autoPlay width={1200} height={650}></video>
      {/* </div> */}
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
                  <Image className={Style.mr_10} src="/assets/images/likeIcon.png" width={20} height={20} alt="" priority />
                  { count[0]?.likeCount}
                </div>
                {/* Dislike Button */}
                <div className={`${Style.flex} ${Style.at_c} `}>
                  <Image className={Style.mr_10} src="/assets/images/dislikeIcon.png" width={20} height={20} alt="" priority />
                </div>
              </div> {/* Like and Dislike button end */}
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Share button */}
                <Image className={Style.mr_10} src="/assets/images/sendIcon.png" width={20} height={20} alt="" priority />
                Share
              </div>
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Download button */}
                <Image className={Style.mr_10} src="/assets/images/downloadIcon.png" width={20} height={20} alt="" priority />
                Download
              </div> {/* Download button end */}
              <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/* Save button */}
                <Image className={Style.mr_10} src="/assets/images/saveIcon.png" width={20} height={20} alt="" priority />
                Save
              </div>
            </div>
          </div>
          {/* Video description */}
          <div className={Style.videoDescription}>
            <p className={Style.text}>{video[0]?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}