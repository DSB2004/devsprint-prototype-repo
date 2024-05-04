import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PiCaretRightLight } from "react-icons/pi";
import style from "./hero-link.module.css"
export default function HeroLink({ text, link }) {
    const navigate = useNavigate();
    const handleClick = () => { }
    return (
        <div className={`flex-center ${style.heroLink}`}>
            {text}
            <PiCaretRightLight />
        </div>
    )
}
