import React from 'react'
import style from "../style/modules/home.module.css"
import Button from '../layouts/button/button';
import { PiUsersThreeBold } from "react-icons/pi";
// import HERO from "../assets/img/hero-bg.jpg"
export default function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.coverImg}>
                <div className={style.coverContent}>
                    <div className={` flex-even ${style.coverContent1}`}>
                        <div className={`flex-center ${style.coverContent1Content}`}>
                            <div className={`flex-center ${style.coverContent1Icon}`}>
                                <PiUsersThreeBold />
                            </div>
                            <div>
                                <h1>Senior Support Solutions </h1>
                                <h4>Connecting Elders with Compassionate Care</h4>
                            </div>
                        </div>
                        <Button text="view Programmes"></Button>
                    </div>
                    <div className={style.coverContent2}></div>
                </div>
            </div >
        </section >
    )
}
