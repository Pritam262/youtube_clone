import Style from '@/app/style/login.module.css'
import Link from 'next/link'
export default function Signup() {
    return (
        <div className={Style.container}>
            <div className={Style.loginContainer}>
                <h4 className={Style.logo}>Login</h4>
                {/* Username field */}
                <h4 className={`${Style.t_center}`}>Sign in</h4>
                {/* <p className={`${Style.t_center}`}>Use your Google Account</p> */}
                {/* Container */}
                <div  className={Style.formField}>

                    <input className={Style.textInput} type="email" name="email" id="email" placeholder='Enter your Email' />
                    <input className={Style.textInput} type="password" name="password" id="password" placeholder='Enter your Password' />
                    <Link className={Style.link} style={{ marginTop: '5px' }} href='#'>Forgot email?</Link>

                    <span className={Style.textSpan}>Not use your computer? Use Guest mode to sign in privately <Link className={Style.link} href='#'>Learn more</Link></span>

                    <div className={Style.dhrg12}>
                        <Link className={Style.link} href='/signup'>Create account</Link>
                        <button  className={Style.btn}>Submit</button>
                    </div>

                </div >
            </div>
        </div>
    )
}