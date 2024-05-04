import React from 'react'
import style from "../style/modules/home.module.css"
export default function FeatureSection() {
    return (
        <section className={style.featureSection}>
            <div className={`flex-justify ${style.introContent}`}>
                <h3>
                    Explore Our Offerings
                </h3>
                <p>
                    Discover how our platform enhances old age homes' programs. From event hosting to volunteer collaboration, we streamline services to enrich residents' lives and foster community engagement.
                </p>
            </div>
        </section>
    )
}
