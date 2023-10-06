import Style from '@/app/style/leftnav.module.css'
import Image from 'next/image'
import { useAppContext } from "@/app/context/appContext";
import Link from 'next/link';

export default function leftNavbar(){
    const { isLeftNavHidden} = useAppContext();
    const options = {
        item1:{
            name:'home',
            link:'/',
            icon:'/assets/images/home.png',
        },
        item2:{
            name:'shorts',
            link:'/short',
            icon:'/assets/images/short-filmIcon.png',
        },
        item3:{
            name:'subcription',
            link:'/',
            icon:'/assets/images/subscribIcon.png',
        },
        item4:{
            name:'library',
            link:'/library',
            icon:'/assets/images/libraryIcon.png',
        },
        item5:{
            name:'history',
            link:'/history',
            icon:'/assets/images/historyIcon.png',
        },
        item6:{
            name:'trending',
            link:'/trending',
            icon:'/assets/images/trendingIcon.png',
        },
        item7:{
            name:'music',
            link:'/music',
            icon:'/assets/images/musicIcon.png',
        },
        item8:{
            name:'movie',
            link:'/movie',
            icon:'/assets/images/short-filmIcon.png',
        },
        item9:{
            name:'gaming',
            link:'/gaming',
            icon:'/assets/images/consoleIcon.png',
        },
        item10:{
            name:'news',
            link:'/news',
            icon:'/assets/images/newsIcon.png',
        },
        item11:{
            name:'sport',
            link:'/sport',
            icon:'/assets/images/trophyIcon.png',
        },
        item12:{
            name:'learning',
            link:'/education',
            icon:'/assets/images/ideaIcon.png',
        },
        item13:{
            name:'fasion & Beauty',
            link:'/fasion',
            icon:'/assets/images/beautyIcon.png',
        },
    }
    return (
        <div className={Style.container}>

      
            <Link href=''>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/home.png' width={50} height={50} alt=''  priority /> <p className={`${isLeftNavHidden?Style.none:Style.navList}`}>Home</p> </span> </Link>
            <Link href='/short'>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/short-filmIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Shorts</p> </span> </Link>
            <Link href='/subcription'>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/subscribeIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Subscriptions</p> </span> </Link>
            <span className={Style.divider}></span>

            <Link href='/library'>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/libraryIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>Library</p> </span> </Link>
            <Link href='/history'>
            <span className={Style.navMenu}><Image className={Style.icon} src='/assets/images/historyIcon.png' width={50} height={50} alt=''  priority /> <p className={Style.navList}>History</p> </span> </Link>
  
            <span className={Style.divider}></span>
            <div className={Style.srgfr45}>
            <p >Sign in to like videos, command and Follow</p>
            <button className={Style.signInBtn}>Sign in</button>
            </div>
    
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