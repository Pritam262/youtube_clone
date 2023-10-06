"use client";
import Style from "@/app/style/watchpage.module.css";
import Image from "next/image";
import Watchcomment from "../../../../../components/watchComment";
import VideoSuggest from "../../../../../components/watchVideoSuggest"
import { Bai_Jamjuree } from "next/font/google";
import WatchComponent from "../../../../../components/watchComponents";
import BigLeftNavBar from "../../../../../components/bigNavLeftbar";
import { useAppContext } from "@/app/context/appContext";
export default function page({ params }: { params: { watch: string } }) {
  const { isLeftNavHidden} = useAppContext();
  return (
    <>
   
      <BigLeftNavBar/>
    <div className={Style.container}>     
      <div className={`${Style.main}`}>
        <WatchComponent/>
        <VideoSuggest params={params} />
        <Watchcomment />
      </div>
      <div className={`${isLeftNavHidden? '':Style.hredq1}`}></div>
    </div>
    </>
  );
}






// unwanted code 

// {isScreenSmall? <><div className={`${Style.leftContainer}`}>
// <div className={Style.videoContainer}>

// </div>
// <VideoSuggest params={params} />

// </div> {/*Left container end */}
// <Watchcomment />
// </>
// : <> <div className={`${Style.leftContainer}`}>
// <div className={Style.videoContainer}>

// </div>
// <Watchcomment />
// </div> {/*Left container end */}
// <VideoSuggest params={params} /> </>
// }



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
