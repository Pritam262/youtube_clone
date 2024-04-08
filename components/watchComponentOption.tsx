'use cliet'
import Styles from "@/app/style/watchComponent.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/appContext";
import { useRouter } from "next/navigation";

interface Params {
    id: string,
}
export default function WatchComponentOption(params: Params) {

    const { serverIp } = useAppContext()

    const router = useRouter();

    const [isLike, setisLike] = useState<boolean>();
    const [isLogin, setisLogin] = useState<boolean>();
    const [count, setcount] = useState<number>(0);

    const fetchLikeDislike = async () => {
        try {
            const headers = new Headers();
            headers.append('videoid', params.id);
            isLogin ? headers.append('auth-token', `${localStorage.getItem('auth-token')}`) : '';
            const likeResponse = await fetch(`${serverIp}/api/video/getlike`, {
                method: 'GET',
                headers: headers
            })

            const like = await likeResponse.json();

            if (like) {
                // const newLikeDislike: LikeDislike = {
                //   likeCount: like.likeCount,
                //   user:like.user
                // }
                setcount(like.likeCount);
                setisLike(like.user);
                // setcount([newLikeDislike]);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    const videoLike = async () => {
        try {
            const headers = new Headers();
            headers.append('videoid', params.id);
            // headers.append('auth-token',`${localStorage.getItem('auth-token')}`);
            // if (isLogin) {
            //   headers.append('auth-token', `${localStorage.getItem('auth-token')}`);
            // }

            isLogin ? headers.append('auth-token', `${localStorage.getItem('auth-token')}`) : router.push('/signin');

            const likeResponse = await fetch(`${serverIp}/api/video/like`, {
                method: 'POST',
                headers: headers
            })

            const like = await likeResponse.json();
            if (like) {
                // const newLikeDislike: LikeDislike = {
                //   likeCount: like.likeCount,
                //   user:like.user
                // }
                setcount(isLike ? count - 1 : count + 1);
                setisLike(isLike ? false : true);
                // setcount([newLikeDislike]);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchLikeDislike()
    }, [isLogin])
    useEffect(() => {
        setisLogin(localStorage.getItem('auth-token') ? true : false)
    }, [isLogin])


    return (
        <>
            <div className={`${Styles.flex} ${Styles.at_c} ${Styles.optionBtn}`}> {/* Button start */}
                {/* Like and dislike button */}
                <div className={`${Styles.flex} ${Styles.at_c} ${Styles.mr_10} ${Styles.btn}`}>
                    {/* Like Button */}
                    <div className={`${Styles.flex} ${Styles.at_c}  ${Styles.likeBtn}`}>
                        <Image className={`${Styles.mr_10} ${Styles.icon}`} src={`${isLike ? '/assets/images/likeFillIcon.png' : '/assets/images/likeIcon.png'}`} onClick={videoLike} width={20} height={20} alt="" priority />
                        {count}
                    </div>
                    {/* Dislike Button */}
                    <div className={`${Styles.flex} ${Styles.at_c} `}>
                        <Image className={`${Styles.mr_10} ${Styles.icon}`} src="/assets/images/dislikeIcon.png" width={20} height={20} alt="" priority />
                    </div>
                </div> {/* Like and Dislike button end */}
                <div className={`${Styles.flex} ${Styles.at_c} ${Styles.mr_10} ${Styles.btn}`}> {/* Share button */}
                    <Image className={`${Styles.mr_10} ${Styles.icon}`} src="/assets/images/sendIcon.png" width={20} height={20} alt="" priority />
                    Share
                </div>
                <div className={`${Styles.flex} ${Styles.at_c} ${Styles.mr_10} ${Styles.btn}`}> {/* Download button */}
                    <Image className={`${Styles.mr_10} ${Styles.icon}`} src="/assets/images/downloadIcon.png" width={20} height={20} alt="" priority />
                    Download
                </div> {/* Download button end */}
                <div className={`${Styles.flex} ${Styles.at_c} ${Styles.mr_10} ${Styles.btn}`}> {/* Save button */}
                    <Image className={`${Styles.mr_10} ${Styles.icon}`} src="/assets/images/saveIcon.png" width={20} height={20} alt="" priority />
                    Save
                </div>
            </div>
        </>
    )
}