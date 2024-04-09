"use client";
import Style from "@/app/style/watchpage.module.css";
import Image from "next/image";
import Watchcomment from "../../../../../components/watchComment";
import VideoSuggest from "../../../../../components/watchVideoSuggest"
import { Bai_Jamjuree } from "next/font/google";
import WatchComponent from "../../../../../components/watchComponents";
import BigLeftNavBar from "../../../../../components/bigNavLeftbar";
import { useAppContext } from "@/app/context/appContext";
import { useEffect } from "react";
export default function page({ params }: { params: { watch: string } }) {
  useEffect(() => {
  setisLeftNavHidden(true);
  }, [])
  const { isLeftNavHidden, setisLeftNavHidden} = useAppContext();
  
  return (
    <>
   
      <BigLeftNavBar/>
    <div className={`${isLeftNavHidden?Style.container:Style.hideContainer}`}>     
      <div className={`${Style.main}`}>
        <WatchComponent params={params}/>
        <VideoSuggest params={params} />
        <Watchcomment params={params}/>
      </div>
      <div className={`${isLeftNavHidden? '':Style.hredq1}`}></div>
    </div>
    </>
  );
}

