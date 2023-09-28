import Image from "next/image"
import Style from '@/app/style/navbar.module.css'
export default function Navbar() {
    return (
        <div className={`${Style.navbar} ${Style.flex}`}>
            {/* Left nav menu */}
            <div className={`${Style['flex']} ${Style.leftMenu}`}>
                {/* Humbergur icon */}
                <Image src='/hamburger.png' className={Style.icon} width={50} height={50} alt="" priority />
                <p>Navbar</p>

            </div>
            {/* Center nav menu */}
            <div className={`${Style.centerContainer} ${Style.flex}`}>
                <div className={`${Style.flex} ${Style.searchContainer}`}>
                    {/* Search field */}
                    <input className={`${Style.searchField}`} type="text" placeholder="Search" />
                    <Image src="/search.png" className={`${Style.icon} ${Style.searchBarIcon}`} width={50} height={50} alt="" priority />
                </div>
                <Image src='/microphone.png' className={`${Style.icon} ${Style.searchBarIcon} ${Style.micIcon}`} width={50} height={50} alt="" priority />
            </div>
            {/* Right nav menu */}
            <div className={`${Style.rightContainer} ${Style.flex}`}>
                {/* Login Button */}
           
                    <Image src='/setting.png' className={Style.settingIcon} width={50} height={50} priority alt="" />
                    {/* Login Button */}
                    <div className={`${Style.flex} ${Style.loginBtn}`}>
                        <Image src='/user.png' className={Style.icon} width={30} height={30} alt="" priority />
                        <p className={Style.text}>Log in</p>
                    </div>
           

            </div>
        </div>
    )
}