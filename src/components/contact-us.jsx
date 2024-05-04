import React from 'react'
import style from "../style/modules/home.module.css"
import Input from '../layouts/input/input'
import CONTACTUS from "../assets/img/contact-us-bg.jpg"
export default function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <section className={style.outerSection} id="contact-us">
                <div className={`flex-justify ${style.introContent}`}>
                    <h3>
                        Contact Us
                    </h3>
                    <p>
                        Got questions, feedback, or just want to chat? Don't hesitate to get in touch with us at Elderly Connect. Our dedicated team is here to assist you with any inquiries you may have. Whether you prefer to reach out by phone, drop us an email, or use the convenient contact form below, we're committed to providing you with prompt and helpful support. Your satisfaction is our priority, so feel free to contact us anytime!
                    </p>
                </div>

                <div className={`flex-justify ${style.ContactUsFormContainer}`}>
                    <div className={style.contactUsImgBorder}>
                        <img src={CONTACTUS} alt="" className={style.contactUsImg} />
                    </div>
                    <form className={`flex-center flex-column ${style.contactUsForm} `} onSubmit={handleSubmit}>
                        <div className={`flex-left flex-column
                         ${style.contactUsFormDiv}`} >
                            <h5>Reach out</h5>
                            <h1>Schedule a Call</h1>
                            <p>Get In touch with our programme coordinator</p>
                        </div>
                        <Input placeholder="Enter your name..." />
                        <Input placeholder="Enter your email..." />
                        <Input placeholder="Enter your phone number..." />
                        <button type='submit' className={style.formBtn}>
                            submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
