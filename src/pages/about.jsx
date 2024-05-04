import React from "react";
// import "../style/modules/about.css"; // Import CSS file for styling
// import image from "../assets/img/smilingwomen.jpg"
import Header from '../components/header'
import Footer from "../components/footer"
import AboutIntro from "../components/about-intro";
import FAQ from "../components/faq"
import AboutHero from "../components/about-hero";
const About = () => {
  return (
    <>
      <Header overlay={true} />
      <section className="hero-section">
        <AboutIntro />
        <AboutHero />
        <FAQ />
        {/* <div className="container grid grid-two-column">
          <div className="section-hero-image">

            <img src={image} alt="image" className="hero-img" />
          </div>

          <div className="section-hero-data">
            <h1 className="hero-heading">About Elderly Connect</h1>

            <p className="hero-para">
              The Elders Care app is designed to provide comprehensive support and assistance to senior citizens, ensuring their well-being and quality of life. With a user-friendly interface, the app offers a range of features to enhance the lives of elders and their caregivers.
            </p>

            <div className="features-section">
              <h2>Features included:</h2>
              <ul>
                <li>Access to curated resources for senior health, wellness, and lifestyle.</li>
                <li>Communication tools to connect with family, friends, and caregivers.</li>
              </ul>
            </div>

            <div className="features-section">
              <h2>Features about to include:</h2>
              <ul>
                <li>Personalized health tracking and reminders for medications and appointments.</li>
                <li>Emergency contact and SOS functionality for immediate assistance.</li>
                <li>Social engagement through community forums and event listings.</li>
                <li>Access to curated resources for senior health, wellness, and lifestyle.</li>
                <li>Communication tools to connect with family, friends, and caregivers.</li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default About;
