import React from 'react'
import style from "../style/modules/home.module.css"
import CONTACTUS from "../assets/img/contact-us-bg.jpg"
import aboutStyle from "../style/modules/about.module.css"
export default function AboutHero() {
    return (
        <section className={style.outerSection}>
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    About ElderlyCare
                </h3>
                <p>Discover how old age homes can benefit from our platform. We offer a range of services, including event hosting and volunteer collaboration, aimed at enriching the lives of residents and fostering community involvement. Learn more about our offerings below.</p>
            </div>

            <div className={`flex-even ${aboutStyle.aboutHero}`} >
                <div className={style.contactUsImgBorder}>
                    <img src={CONTACTUS} alt="" className={style.contactUsImg} />
                </div>
                <div className={aboutStyle.aboutHeroContent}>
                    <h1>ElderlyConnect</h1>
                    <p>Welcome to Elderly Connect, where we bridge generational divides and cultivate a sense of belonging for seniors. Our digital platform is designed to provide companionship, resources, and tailored assistance for older adults. Through technology, we're making a meaningful impact, fostering warm connections and inclusivity. Whether it's sharing stories, accessing local services, or engaging in virtual activities, we empower seniors to lead fulfilling lives. Join us in celebrating their wisdom and experiences while building a stronger, more connected community for all.</p>
                </div>

            </div>
        </section>
    )
}
