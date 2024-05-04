import React from 'react'
import { PiCaretRightLight } from "react-icons/pi";
import style from "./hero-link.module.css"
export default function HeroLink({ text, onClick }) {
    return (
        <div className={`flex-center ${style.heroLink}`} onClick={() => {
            if (onClick) {
                onClick()
            }
        }}>
            {text}
            <PiCaretRightLight />
        </div>
    )
}
