'use client'
import Style from '@/app/style/login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/app/context/appContext";
export default function Signup() {
    const router = useRouter();
    const [credencial, setcredencial] = useState({ 'email': '', 'password': '' });
    const [errorText, seterrorText] = useState('');
    const { setIsLogin } = useAppContext();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setcredencial({
            ...credencial,
            [name]: value,
        });
    };
    const handleSubmit = async () => {
        const response = await fetch('http://192.168.50.14:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credencial),
        });

        if (response.status === 200) {
            const data = await response.json();
            const authToken = data.authtoken;
            localStorage.setItem('auth-token', authToken);
            router.push('/');
            setIsLogin(true);
        }
        else {
            const data = await response.json();
            seterrorText(data.error);
        }
    }
    return (
        <div className={Style.container}>
            <div className={Style.loginContainer}>
                <h4 className={Style.logo}>Login</h4>
                {/* Username field */}
                <h4 className={`${Style.t_center}`}>Sign in</h4>
                {/* <p className={`${Style.t_center}`}>Use your Google Account</p> */}
                {/* Container */}
                <div className={Style.formField}>

                    <input className={Style.textInput} type="email" name="email" id="email" onChange={onChange} value={credencial.email} placeholder='Enter your Email' />
                    <input className={Style.textInput} type="password" name="password" id="password" onChange={onChange} value={credencial.password} placeholder='Enter your Password' />
                    <Link className={Style.link} style={{ marginTop: '5px' }} href='#'>Forgot email?</Link>

                    <span className={Style.textSpan}>Not use your computer? Use Guest mode to sign in privately <Link className={Style.link} href='#'>Learn more</Link></span>

                    <div className={Style.dhrg12}>
                        <Link className={Style.link} href='/signup'>Create account</Link>
                        <button className={Style.btn} onClick={handleSubmit}>Submit</button>
                    </div>
                    <p style={{ fontSize: '12px', 'color': 'red', 'marginTop': '10px' }}>{`*${errorText}`}</p>
                </div >
            </div>
        </div>
    )
}