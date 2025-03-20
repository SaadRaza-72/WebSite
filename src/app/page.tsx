import Image from "next/image";
import Navbar from "./components/navbar";
import SecondSection from "./components/section2";
import ThirdSection from "./components/section3";
import ServicesSection from "./components/ServicesSection";
import OurWorks from "./components/ourwork";
import FunFacts from "./components/funfacts";
import TestimonialSection from "./components/TestimonialSection";
import Latestnews from "./components/Latestnews";
import LogoSection from "./components/LogoSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <SecondSection />
    <ThirdSection />
    <ServicesSection />
    <OurWorks />
    <FunFacts />
    <TestimonialSection />
    <Latestnews />
    {/* <LogoSection /> */}
    <Footer />
    </>
  );
}
