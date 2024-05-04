import React from 'react'
import style from "../style/modules/home.module.css"
export default function ContactUs() {
    return (
        <>
            <section className={style.featureSection}>
                <div className={`flex-justify ${style.introContent}`}>
                    <h3>
                        Contact Us
                    </h3>
                    <p>
                        Got questions, feedback, or just want to chat? Don't hesitate to get in touch with us at Elderly Connect. Our dedicated team is here to assist you with any inquiries you may have. Whether you prefer to reach out by phone, drop us an email, or use the convenient contact form below, we're committed to providing you with prompt and helpful support. Your satisfaction is our priority, so feel free to contact us anytime!
                    </p>
                </div>

                
            </section>
        </>
    )
}
