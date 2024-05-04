import React from 'react'
import ProgramIntro from '../components/program-intro'
import Header from '../components/header'
import Footer from '../components/footer'
import FeatureSection from '../components/feature-section'
import GovernmentPolicy from '../components/government-policy'
import HealthcareSection from '../components/healthcare-section'
export default function Programmes() {
    return (
        <>
            <Header />
            <ProgramIntro />
            <FeatureSection />
            <GovernmentPolicy />
            <HealthcareSection />
            <Footer />

        </>
    )
}
