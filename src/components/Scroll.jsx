import React from "react";
import ProjectShowcase from './ProjectShowcase';
import ServicePage from "./ServicePage";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Process from "./Process";
import VideoShowcase from "./VideoShowcase";
import Founders from "./Founders";
import PackageComparison from "./PackageComparison";
import TopBrands from "./TopBrands";
import ProjectInHome from "./ProjectInHome";

const Scroll = () => {

  return (
    <>
        <ServicePage />
        <ProjectShowcase />
        <Process/>
        <VideoShowcase />
        <ProjectInHome />
        <Testimonials />
        <Founders/>
        <TopBrands/>
        <PackageComparison />
        <FAQSection />
    </>

  );
};

export default Scroll;