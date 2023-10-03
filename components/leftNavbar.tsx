import Style from '@/app/style/leftnav.module.css'
import Image from 'next/image'
import { useAppContext } from "@/app/context/appContext";

export default function leftNavbar(){
    const { isLeftNavHidden} = useAppContext();
    return (
        <div className={Style.container}>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/home.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Home</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Shorts</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/subscribeIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Subscriptions</p> </span>
            <span className={Style.divider}></span>
            {/* <hr className={Style.divider}/> */}
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/libraryIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Library</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/historyIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>History</p> </span>
            {/* <hr className={Style.divider}/> */}
            <span className={Style.divider}></span>
            <div className={Style.srgfr45}>
            <p >Sign in to like videos, command and Follow</p>
            <button className={Style.signInBtn}>Sign in</button>
            </div>
            {/* <hr className={Style.divider}/> */}
            <span className={Style.divider}></span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/trendingIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Music</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/musicIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Films</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Live</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/consoleIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Gaming</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/newsIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>News</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/trophyIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Sport</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/ideaIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Learning</p> </span>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/beautyIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Fasion & Beauty</p> </span>
        </div>
    )
}