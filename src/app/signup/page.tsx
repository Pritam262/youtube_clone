
'use client'
import Style from '@/app/style/signup.module.css'
import Image from 'next/image'
import { useState } from 'react'
export default function Login() {
const [isPasshidden, setisPasshidden] = useState(true);


const handlePassHidden = ()=>{
    setisPasshidden((prev) => !prev);
    console.log(isPasshidden);
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

                    <input className={Style.textInput} type="text" name="fname" id="fname" placeholder='Enter your First name' />
                    <input className={Style.textInput} type="text" name="lname" id="lname" placeholder='Enter your last name' />
                    <input className={Style.textInput} type="email" name="email" id="email" placeholder='Enter your Email' />
                    <input className={Style.textInput} type={ isPasshidden?'password':'text'} name="password" id="password" placeholder='Enter your password' />

            
                    <input className={Style.textInput} type={isPasshidden?'password':'text'} name="conpassword" id="conpassword" placeholder='Enter your confirm password' />
                    <span className={Style.passCheck}><input type="checkbox" name="" id="" className={Style.checkBox} onClick={handlePassHidden}/>
                    <p>{isPasshidden ? 'Show password':'Hide password'}</p> </span>
                        <div className={Style.dhrg12}>
                            <button className={Style.btn}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            )
}