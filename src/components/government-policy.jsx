import React from 'react'
import style from "../style/modules/home.module.css"
import data from "../assets/data/policy.json"
import FaqCard from '../layouts/faq-card/faq-card'
export default function GovernmentPolicy() {
    return (
        <section className={style.outerSection}>
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    Government Policy Integration
                </h3>
                <p>
                    Stay informed about relevant government policies with Elderly Connect. Learn about initiatives like the Integrated Programme for Older Persons (IPOP) and legislation such as the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, to protect your rights and advocate for your needs confidently.
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
