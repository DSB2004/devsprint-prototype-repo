import React from 'react'
import style from "../style/modules/home.module.css"
import data from "../assets/data/features.json"
import FaqCard from '../layouts/faq-card/faq-card'

export default function FeatureSection() {
    return (
        <section className={style.outerSection}>
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    Explore Our Programmes
                </h3>
                <p>
                    Discover how our platform enhances old age homes' programs. From event hosting to volunteer collaboration, we streamline services to enrich residents' lives and foster community engagement.
                </p>
            </div>
            <div>
                <div className={style.faqContainer}>
                    {
                        data.map((element, index) => <FaqCard content={element} key={`faq-card-${index}`} />)
                    }
                </div>
            </div>
        </section>
    )
}
