'use client'
import Style from '@/app/style/userOption.module.css';
import { useAppContext } from "@/app/context/appContext";
import Link from 'next/link';
export default function UserOptionCard(params: any) {
    const { isLogin, logOut} = useAppContext();
    const isModelHidden = params.params;
    return (
        // <div className={`${isModelHidden?Style.conHidden:Style.container}`}>
        //     <span>{isLogin ? <p onClick={logOut}>Log out</p> : ''}</span>
        // </div>
        <div className={`${isModelHidden?Style.conHidden:Style.container}`}>
            <p className={Style.dfetr23}><Link href='/dashboard'>Dashboard</Link></p>
            <p className={Style.dfetr23}>Theme</p>
            <p className={Style.dfetr23}>Language</p>
            <span>{isLogin ? <p className={Style.dfetr23} onClick={logOut}>Log out</p> : ''}</span>
        </div>
    )
}