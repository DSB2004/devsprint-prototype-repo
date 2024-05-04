import React from 'react'
import style from "./input.module.css"
export default function Input(props) {
    // onChange={e => onChange(e.target.value)} 
    const { onChange, placeholder, value } = props;
    return (
        <input className={style.input} type="text" placeholder={placeholder} value={value} />
    )
}
