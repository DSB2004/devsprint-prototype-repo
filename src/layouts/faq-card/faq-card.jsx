import React, { useState } from 'react';
import style from "./faq-card.module.css";
import { FaAngleDown } from "react-icons/fa6";
export default function FaqCard({ content }) {
    const [slideDown, setDow] = useState(true)
    return (
        <div className={`${style.faqCard} ${slideDown ? "" : style.openFAQ}`}>
            {Object.entries(content).map(([key, value]) => (
                <>
                    <div className={`flex-even`} >

                        <h2>{key}</h2>
                        <FaAngleDown onClick={() => { setDow(!slideDown) }} />
                    </div >
                    <p className='flex-center'>{value}</p>
                </>
            ))
            }
        </div >
    );
}
