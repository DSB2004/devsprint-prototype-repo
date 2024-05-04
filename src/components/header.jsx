import React from 'react'
import style from "../style/modules/header.module.css"
import { TbMenu } from "react-icons/tb";
import Logo from "../assets/svg/logo.svg"
export default function Header() {
    return (
        <header className={`${style.header} flex-justify`}>
            <nav className={`${style.headerNav} flex-justify`}>
                <div className={`flex-center ${style.headerH3}`}>
                    <img src={Logo} alt="" className={style.logo} />
                    <h1>Elderly Connect</h1>
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
