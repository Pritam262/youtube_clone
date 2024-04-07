"use client"
import Styles from "@/app/style/dashboard.module.css";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const navOption = [
        {
            name: "Upload video",
            link: "/uploadvideo"
        },
        {
            name: "Your Posts",
            link: "/posts"
        },
        {
            name: 'Community post',
            link: "/Community"
        },
        {
            name: "Subscriber",
            link: "/scriber"
        }
    ];

    const router= useRouter();

    return (
        <div className={Styles.page}>

            {/* Left navigation */}


            <div className={Styles.leftNavBar}>
                {navOption.map((item,index)=>{return(

                <span className={Styles.navOption} key={index} onClick={()=>router.push(`/dashboard${item.link}`)}>
                    <p>{item.name}</p>
                </span>
                )})}
            </div>
        </div>
    )
}