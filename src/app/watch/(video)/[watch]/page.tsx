"use client";
import Style from "@/app/style/watchpage.module.css";
import Image from "next/image";
import Watchcomment from "../../../../../components/watchComment";
import VideoSuggest from "../../../../../components/watchVideoSuggest"
import { useEffect } from "react";
export default function page({ params }: { params: { watch: string } }) {
  
  return (
    <div className={Style.container}>
      <div className={`${Style.main}`}>
        <div className={`${Style.leftContainer}`}>
          <div className={Style.videoContainer}>

          </div>
          <Watchcomment />
        </div> {/*Left container end */}

        <VideoSuggest params={params} />
      </div>
    </div>
  );
}

// import { FC } from "react"
// interface pageProps {
//   params: { watch: string };
// }

// const page: FC<pageProps> = ({ params })=> {
//   return <div>
//     <h1>The video is now plaing : { params.watch}</h1>
//   </div>
// }

// export default page;
