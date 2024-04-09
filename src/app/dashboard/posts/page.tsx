'use client'
import Styles from "@/app/style/post.module.css";
import { useAppContext } from "@/app/context/appContext";
import { useEffect, useState } from "react";
import Image from "next/image";

import { calculateRelativeTime } from "../../../../lib/gettimestring";

import { useRouter } from "next/navigation";
import{ allVideoInterface } from "../../../../utils/types";


export default function Post() {

    const { serverIp } = useAppContext();
    const [videos, setVideos] = useState<allVideoInterface>();
    const router = useRouter();

    const fetchPost = async () => {
        try {

            const response = await fetch(`${serverIp}/api/video/getallvideo`, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`
                }
            });

            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <div className={Styles.page}>
            {videos?.success && videos?.success.map(item => {
                return (
                    <div key={item?.id} className={Styles.container} onClick={()=>router.push(`/dashboard/posts/post?id=${item?.id}`)}>

                        <Image src={item?.coverImage} width={150} height={80} alt="" priority />
                        <div className={Styles.videoDetails}>

                            <p className={Styles.title}>{item?.title}</p>
                            <p className={Styles.desc}>{item?.description}</p>
                            <p className={Styles.time}>{calculateRelativeTime(item?.date)}</p>
                        </div>
                        <Image src='/assets/images/setting.png' className={Styles.settingIcon} width={50} height={50} priority alt="" />

                    </div>


                )
            })}
        </div>
    )
}