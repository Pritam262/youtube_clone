"use client";
import Style from "@/app/style/shortPage.module.css";
import BigLeftNavBar from "../../../../../components/bigNavLeftbar";
import { useAppContext } from "@/app/context/appContext";
import ShortVideo from "../../../../../components/shortVideo";
import ShortVideoCommand from "../../../../../components/shortVideoCommant";
export default function page({ params }: { params: { shorts: string } }) {
  const { isLeftNavHidden} = useAppContext();
  return (
    <div className={Style.container}>
      
      <BigLeftNavBar/>
      <div className={`${Style.main}`}>
        <ShortVideo params={params}/>
        <ShortVideoCommand params={params}/>
      </div>
      <div className={`${isLeftNavHidden? '':Style.hredq1}`}></div>
    </div>
  );
}
