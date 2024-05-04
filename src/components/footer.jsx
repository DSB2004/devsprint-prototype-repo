import React from 'react'
import style from "../style/modules/home.module.css"
import Logo from "../assets/svg/logo.svg"
import Input from '../layouts/input/input';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import SlideTo from '../utils/slider';
export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className={`flex-even ${style.footer}`}>
            <div className={`flex-center flex-column ${style.footerDiv}`}>
                <img src={Logo} alt="" className={style.footerIcon} />
                <div className='flex-even'>
                    <FaLinkedinIn className={style.socialMediaIcon} />
                    <FaInstagram className={style.socialMediaIcon} />
                </div>
            </div>
            <div className={`flex-top flex-column ${style.footerDiv}`}>
                <h1>Quick Links</h1>
                <li onClick={() => navigate('/about')}>About Elderly Connect</li>
                <li onClick={() => SlideTo('contact-us')}>Contact Us</li>
                <li onClick={() => navigate('/programmes')}>View Programmes</li>
            </div>
            <div className={`flex-top flex-column ${style.footerDiv}`}>
                <h1>Resources</h1>
                <li onClick={() => navigate('/programmes')} > Government Policy</li>
                <li onClick={() => navigate('/programmes')} >Legal Aid</li>
                <li onClick={() => SlideTo('faq')}>FAQ's</li>
            </div>
            <div className={`flex-top flex-column ${style.footerDiv}`}>
                <h1>Get Info Now</h1>
                <div className={`flex-even ${style.sendDiv}`} >
                    <input type="text" className={style.sendInput} placeholder='Enter your email ...' />
                    <BiSolidSend className={style.sendBtn} />
                </div>
            </div>
        </footer >
    )
}
