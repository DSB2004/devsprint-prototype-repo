import React from 'react'
import Header from '../components/header'
import Hero from "../components/hero"
import FeatureSection from '../components/feature-section'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import ContactUs from '../components/contact-us'
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <FeatureSection />
            <FAQ />
            <ContactUs />
            <Footer />
        </>


    )
}
