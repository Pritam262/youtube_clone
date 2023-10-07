"use client";
import Style from "@/app/style/shortPage.module.css";
import Image from "next/image";
import Watchcomment from "../../../../../components/watchComment";
import VideoSuggest from "../../../../../components/watchVideoSuggest"
import { Bai_Jamjuree } from "next/font/google";
import WatchComponent from "../../../../../components/watchComponents";
import BigLeftNavBar from "../../../../../components/bigNavLeftbar";
import { useAppContext } from "@/app/context/appContext";
import ShortVideo from "../../../../../components/shortVideo";
export default function page({ params }: { params: { shorts: string } }) {
  const { isLeftNavHidden} = useAppContext();
  return (
    <div className={Style.container}>
      
      <BigLeftNavBar/>
      <div className={`${Style.main}`}>
        <ShortVideo params={params}/>
      </div>
      <div className={`${isLeftNavHidden? '':Style.hredq1}`}></div>
    </div>
  );
}
