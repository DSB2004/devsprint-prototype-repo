import React from 'react'
import style from "../style/modules/header.module.css"
import { TbMenu } from "react-icons/tb";
import Button from '../layouts/button/button';
// import Logo from "../../assets/svg/elderly-connect-logo.svg"
export default function Header() {
    return (
        <header className={`${style.header} flex-justify`}>
            <nav className={`${style.headerNav} flex-justify`}>
                {/* <Logo /> */}
                <div className={`flex-column flex-left ${style.headerH3}`}>
                    <li>
                        Elderly
                    </li>
                    <li>
                        Connect
                    </li>
                </div>
                <div className={`flex-column flex-center ${style.menuDiv}`}>
                    <TbMenu className={style.menuIcon} />
                    <li>MENU</li>
                </div>
                
            </nav >
            <nav className={style.dropmenuNav}>

            </nav>
        </header >
    )
}
