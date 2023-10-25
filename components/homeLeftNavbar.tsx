'use client'
import Style from '@/app/style/leftnav.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useAppContext } from "@/app/context/appContext";
export default function homeleftNavbar() {
    const { isLeftNavHidden, toggleLeftNav, isLogin } = useAppContext();
    return (
        <div className={`${isLeftNavHidden ? Style.w_5 : Style.container}`}>
            <Link className={`${isLeftNavHidden ? Style.onHide : Style.navMenu}`} href='/'><Image className={Style.icon} src='/assets/images/homeIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.textSmall : Style.navList}`}>Home</p> </Link>
            <Link href='/shorts/hhweu24' onClick={toggleLeftNav} className={`${isLeftNavHidden ? Style.onHide : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.textSmall : Style.navList}`}>Shorts</p> </Link>
            <Link href='/subscription' className={`${isLeftNavHidden ? Style.onHide : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/subscribeIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.textSmall : Style.navList}`}>Subscriptions</p> </Link>
            <span className={`${isLeftNavHidden ? Style.none : Style.divider}`}></span>
            {/* <hr className={Style.divider}/> */}
            <Link href='/library' className={`${isLeftNavHidden ? Style.onHide : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/libraryIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.textSmall : Style.navList}`}>Library</p> </Link>
            <Link href='/history' className={`${isLeftNavHidden ? Style.onHide : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/historyIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.textSmall : Style.navList}`}>History</p> </Link>
            {/* <hr className={Style.divider}/> */}
            
            {isLogin? '':<><span className={`${isLeftNavHidden ? Style.none : Style.divider}`}></span>    <div className={Style.srgfr45}>
                <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Sign in to like videos, command and Follow</p>
                <button className={`${isLeftNavHidden ? Style.none : Style.signInBtn}`}>Sign in</button>
            </div></>}
        
            {/* <hr className={Style.divider}/> */}
            <span className={`${isLeftNavHidden ? Style.none : Style.divider}`}></span>
            <Link href='/trending' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trendingIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Trending</p> </Link>
            <Link href='/music' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/musicIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Music</p> </Link>
            <Link href='/movie' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Movie</p> </Link>
            <Link href='/gaming' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/consoleIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Gaming</p> </Link>
            <Link href='/news' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/newsIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>News</p> </Link>
            <Link href='/sport' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trophyIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Sport</p> </Link>
            <Link href='/education' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/ideaIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Learning</p> </Link>
            <Link href='/fasion' className={`${isLeftNavHidden ? Style.none : Style.navMenu}`}><Image className={Style.icon} src='/assets/images/beautyIcon.png' width={50} height={50} alt='' priority /> <p className={`${isLeftNavHidden ? Style.none : Style.navList}`}>Fasion & Beauty</p> </Link>
        </div>
    )
}