import Image from "next/image"
import Link from "next/link"
import Style from '@/app/style/bigLeftContainer.module.css'
import { useAppContext } from "@/app/context/appContext";
export default function BigLeftNavBar() {
    const { isLeftNavHidden, toggleLeftNav } = useAppContext();
    return (
        <div className={`${isLeftNavHidden ? Style.hidden : Style.container}`}>
            <div className={`${Style.logo}`} onClick={toggleLeftNav}><Image className={Style.icon} src='/assets/images/hamburger.png' width={50} height={50} alt='' priority /> <p className={`${Style.text}`}>Navbar</p> </div>
            <div className={Style.navList}>
            <Link className={`${Style.navMenu}`} href='/'><Image className={Style.icon} src='/assets/images/homeIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Home</p> </Link>
            <Link href='/shorts/orghybv2748' onClick={toggleLeftNav} className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Shorts</p> </Link>
            <Link href='/subscription' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/subscribeIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Subscriptions</p> </Link>
            <span className={`${Style.divider}`}></span>
            {/* <hr className={Style.divider}/> */}
            <Link href='/library' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/libraryIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Library</p> </Link>
            <Link href='/history' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/historyIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>History</p> </Link>
            {/* <hr className={Style.divider}/> */}
            <span className={`${Style.divider}`}></span>
            <div className={Style.srgfr45}>
                <p className={`${Style.navList}`}>Sign in to like videos, command and Follow</p>
                <button className={`${Style.signInBtn}`}>Sign in</button>
            </div>
            {/* <hr className={Style.divider}/> */}
            <span className={`${Style.divider}`}></span>
            <Link href='/trending' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trendingIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Trending</p> </Link>
            <Link href='/music' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/musicIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Music</p> </Link>
            <Link href='/movie' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Movie</p> </Link>
            <Link href='/gaming' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/consoleIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Gaming</p> </Link>
            <Link href='/news' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/newsIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>News</p> </Link>
            <Link href='/sport' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trophyIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Sport</p> </Link>
            <Link href='/education' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/ideaIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Learning</p> </Link>
            <Link href='/fasion' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/beautyIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Fasion & Beauty</p> </Link>


            <Link href='/gaming' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/consoleIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Gaming</p> </Link>
            <Link href='/news' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/newsIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>News</p> </Link>
            <Link href='/sport' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/trophyIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Sport</p> </Link>
            <Link href='/education' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/ideaIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Learning</p> </Link>
            <Link href='/fasion' className={`${Style.navMenu}`}><Image className={Style.icon} src='/assets/images/beautyIcon.png' width={50} height={50} alt='' priority /> <p className={`${Style.navList}`}>Fasion & Beauty</p> </Link>
            </div>
        </div>
    )
}