import React from 'react'
import style from "../style/modules/home.module.css"
import data from "../assets/data/faq.json"
import FaqCard from '../layouts/faq-card/faq-card'
export default function FAQ() {
    return (
        <section className={style.outerSection} id="faq">
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    FAQ's
                </h3>
                <p>Discover how old age homes can benefit from our platform. We offer a range of services, including event hosting and volunteer collaboration, aimed at enriching the lives of residents and fostering community involvement. Learn more about our offerings below.</p>
            </div>
            <div className={style.faqContainer}>
                {
                    data.map((element, index) => <FaqCard content={element} key={`faq-card-${index}`} />)
                }
            </div>
        </section>
    )
}
