import React from 'react'
import style from "../style/modules/home.module.css"
import data from "../assets/data/healthcare.json"
import FaqCard from '../layouts/faq-card/faq-card'

export default function HealthcareSection() {
    return (


        < section className={style.outerSection} >
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    Health and Wellness:
                </h3>
                <p>

                    Prioritize your well - being with Elderly Connect's comprehensive health programs. Access regular checkups, medication support, and participate in fitness discussions and yoga sessions to maintain physical and mental vitality.

                </p>
            </div>
            <div>
                <div className={style.faqContainer}>
                    {
                        data.map((element, index) => <FaqCard content={element} key={`faq-card-${index}`} />)
                    }
                </div>
            </div>
        </section >
    )
}