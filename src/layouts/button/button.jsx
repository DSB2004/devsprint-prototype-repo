import React from 'react'
import style from "./button.module.css"
export default function Button({ text, onClick }) {
    return (
        <button className={style.button} onClick={() => { if (onClick) { onClick() } }}>{text}
        </button>
    )
}
