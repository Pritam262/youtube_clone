
'use client'
import Style from '@/app/style/signup.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAppContext } from "@/app/context/appContext";
export default function Login() {
    const [isPasshidden, setisPasshidden] = useState(true);
    const router = useRouter();
    const { setIsLogin, serverIp } = useAppContext();
    const handlePassHidden = () => {
        setisPasshidden((prev) => !prev);
        console.log(isPasshidden);
    }
    const [credencial, setcredencial] = useState({ 'fname': '', 'lname': '', 'email': '', 'password': '', 'conpassword': '', 'countryCode': '91', 'country': 'India', 'phone': '9278954872' });
    const [errorText, seterrorText] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setcredencial({
            ...credencial,
            [name]: value,
        });
    };
    // Check if the confirm password matches the password
    const isConfirmPasswordValid = !credencial.password || credencial.password === credencial.conpassword;

    const handleSubmit = async () => {
        const response = await fetch(`${serverIp}/api/auth/register`, {
            method: 'POST',
            credentials:'include',
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
                <h4 className={Style.logo}>Sign Up</h4>
                {/* Username field */}
                <h4 className={`${Style.t_center}`}>Create your Account</h4>
                {/* <p className={`${Style.t_center}`}>Use your Google Account</p> */}
                {/* Container */}
                <div className={Style.formField}>

                    <input className={Style.textInput} type="text" name="fname" id="fname" value={credencial.fname} onChange={onChange} placeholder='Enter your First name' />
                    <input className={Style.textInput} type="text" name="lname" id="lname" value={credencial.lname} onChange={onChange} placeholder='Enter your last name' />
                    <input className={Style.textInput} type="email" name="email" id="email" value={credencial.email} onChange={onChange} placeholder='Enter your Email' />
                    <input className={Style.textInput} type={isPasshidden ? 'password' : 'text'} value={credencial.password} onChange={onChange} name="password" id="password" placeholder='Enter your password' />


                    <input className={Style.textInput} type={isPasshidden ? 'password' : 'text'} name="conpassword" id="conpassword" value={credencial.conpassword} onChange={onChange} placeholder='Enter your confirm password' />
                    <span className={Style.passCheck}><input type="checkbox" name="" id="" className={Style.checkBox} onClick={handlePassHidden} />
                        <p>{isPasshidden ? 'Show password' : 'Hide password'}</p> </span>
                    <p style={{ fontSize: '12px', 'color': 'red', 'marginTop': '10px' }}>{`*${errorText}`}</p>
                    <div className={Style.dhrg12}>
                        <button className={Style.btn} onClick={handleSubmit} disabled={!isConfirmPasswordValid}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}