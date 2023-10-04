'use client'
import Image from "next/image"
import Style from '@/app/style/navbar.module.css'
import { useContext, useState } from "react"
import { useSelector } from "react-redux";
// import { addHidden, addShow } from "@/redus/store/leftSide";
// import {isLeftNavHidden} from '@/app/context/appState'
import { useAppContext } from "@/app/context/appContext";
export default function Navbar() {
    const {toggleLeftNav } = useAppContext();
    return (
        <div className={`${Style.navbar} ${Style.flex}`}>
            {/* Left nav menu */}
            <div className={`${Style['flex']} ${Style.leftMenu}`}>
                {/* Humbergur icon */}
                <div className={`${Style.inIcon}`}>
                    <Image src='/assets/images/hamburger.png' className={Style.icon} width={50} height={50} alt="" priority  onClick={toggleLeftNav}/>
                </div>
                <p className={Style.text}>Navbar</p>

            </div>
            {/* Center nav menu */}
            <div className={`${Style.centerContainer} ${Style.flex}`}>
                <div className={`${Style.flex} ${Style.searchContainer}`}>
                    {/* Search field */}
                    <input className={`${Style.searchField}`} type="text" placeholder="Search" />
                    <Image src="/assets/images/search.png" className={`${Style.icon} ${Style.searchBarIcon}`} width={50} height={50} alt="" priority />
                </div>
                <div className={`${Style.inIcon} ${Style.micIcon}`}>
                    <Image src='/assets/images/microphone.png' className={`${Style.icon} ${Style.searchBarIcon} `} width={50} height={50} alt="" priority />
                </div>
            </div>
            {/* Right nav menu */}
            <div className={`${Style.rightContainer} ${Style.flex}`}>
                {/* Login Button */}
                <Image src='/assets/images/setting.png' className={Style.settingIcon} width={50} height={50} priority alt="" />
                {/* Login Button */}
                <div className={`${Style.flex} ${Style.loginBtn}`}>
                    <Image src='/assets/images/user.png' className={Style.icon} width={30} height={30} alt="" priority />
                    <p className={Style.text}>Log in</p>
                </div>


            </div>
        </div>
    )
}