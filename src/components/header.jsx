import React, { useCallback, useEffect, useState } from 'react'
import style from "../style/modules/header.module.css"
import { TbMenu } from "react-icons/tb";
import Logo from "../assets/svg/logo.svg"
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const handleScrollEvent = useCallback(() => {
        if (window.scrollY > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    })

    useEffect(() => {

        handleScrollEvent();
        window.addEventListener('scroll', handleScrollEvent)
        return () => { window.removeEventListener('scroll', handleScrollEvent) }

    }, [])
    return (
        <header className={`${style.header} ${scrolled ? style.bgWhite : ""} flex-justify`}>
            <nav className={`${style.headerNav} ${scrolled ? style.turnBlack : ""} flex-justify`}>
                <div className={`flex-center ${style.headerH3}`}>
                    <img src={Logo} alt="" className={style.logo} />
                    <h1>Elderly Connect</h1>
                </div>
                {/* <div className={`flex-column flex-center ${style.menuDiv}`}>
                    <TbMenu className={style.menuIcon} />
                    <li>MENU</li>
                </div> */}

            </nav >
            {/* <nav className={style.dropmenuNav}>

            </nav> */}
        </header >
    )
}
