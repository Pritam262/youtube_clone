'use client'
import Style from '@/app/style/leftnav.module.css'
import Image from 'next/image'
import { useAppContext } from "@/app/context/appContext";
export default function homeleftNavbar(){
    const { isLeftNavHidden} = useAppContext();
    return (
        <div className={`${isLeftNavHidden?Style.w_5:Style.container}`}>
            <span className={`${isLeftNavHidden?Style.onHide:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/homeIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.textSmall:Style.navList}`}>Home</p> </span>
            <span className={`${isLeftNavHidden?Style.onHide:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.textSmall:Style.navList}`}>Shorts</p> </span>
            <span className={`${isLeftNavHidden?Style.onHide:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/subscribeIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.textSmall:Style.navList}`}>Subscriptions</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.divider}`}></span>
            {/* <hr className={Style.divider}/> */}
            <span className={`${isLeftNavHidden?Style.onHide:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/libraryIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.textSmall:Style.navList}`}>Library</p> </span>
            <span className={`${isLeftNavHidden?Style.onHide:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/historyIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.textSmall:Style.navList}`}>History</p> </span>
            {/* <hr className={Style.divider}/> */}
            <span className={`${isLeftNavHidden?Style.none:Style.divider}`}></span>
            <div className={Style.srgfr45}>
            <p  className={`${isLeftNavHidden?Style.none:Style.navList}`}>Sign in to like videos, command and Follow</p>
            <button className={`${isLeftNavHidden?Style.none:Style.signInBtn}`}>Sign in</button>
            </div>
            {/* <hr className={Style.divider}/> */}
            <span className={`${isLeftNavHidden?Style.none:Style.divider}`}></span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trendingIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Music</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/musicIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Films</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Live</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/consoleIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Gaming</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/newsIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>News</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trophyIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Sport</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/ideaIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Learning</p> </span>
            <span className={`${isLeftNavHidden?Style.none:Style.navMenu}`}><Image className={Style.icon} src='/assets/images/beautyIcon.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Fasion & Beauty</p> </span>
        </div>
    )
}