'use client'
import Style from '@/app/style/shortVideo.module.css'
import Image from 'next/image'
import { useAppContext } from "@/app/context/appContext";
export default function ShortVideo({ params }: { params: { shorts: string } }){
    const {isShortCommentHidden, shortToggle} = useAppContext();
    return (
        <div className={`${isShortCommentHidden?Style.hiddenContainer:Style.container}`}>
            <h1>Video play now: {params.shorts} </h1>
            {/* Like, dislike btn */}
            <div className={`${Style.option}`}>
                <Image src='/assets/images/likeIcon.png' width={20} height={20} alt='' property=''/>
                <Image src='/assets/images/dislikeIcon.png' width={20} height={20} alt='' property=''/>
                <Image src='/assets/images/' width={20} height={20} alt='' property='' onClick={shortToggle}/>
                <Image src='/assets/images/sendIcon.png' width={20} height={20} alt='' property=''/>
                <Image src='/assets/images/' width={20} height={20} alt='' property=''/>
            </div>
        </div>
    )
}