"use client"
import Styles from "@/app/style/watchComponent.module.css";
interface Props{
    url:string,
}
export default function WatchVideo(props:Props){

    return(
        <video className={Styles.video} src={props?.url} controls autoPlay ></video>
    )
}