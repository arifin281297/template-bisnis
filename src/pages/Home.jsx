import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TeamPremium from "../components/Team";
import Testimonials from "../components/Testimonials";


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* CTA */}
      <CTASection />

      {/* Portfolio */}
      <Portfolio />

      {/* Team */}
      <TeamPremium />

      {/* testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;