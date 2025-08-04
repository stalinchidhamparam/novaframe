import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CodeXml, TrendingUp } from "lucide-react";
import { CgDesignmodo } from "react-icons/cg";
import { MdBrandingWatermark } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Dummy service data
const services = [
  {
    title: "DIGITAL MARKETING",
    subtitle: "SEO • PPC Ads • Social Media • Email Campaigns",
    icon: <TrendingUp size={32} className="mb-4" />,
    link: '/performance-marketing'
  },
  {
    title: "BRANDING",
    subtitle: "Logo Design • Brand Identity • Market Research",
    icon: <MdBrandingWatermark size={32} className="mb-4" />,
    link: '/branding'
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    subtitle: "Full Stack • Testing • Deployment",
    icon: <CodeXml size={32} className="mb-4" />,
    link: '/software-development'
  },
  // {
  //   title: "PORTFOLIO",
  //   subtitle: "Projects • Innovative",
  //   icon: <CgDesignmodo size={32} className="mb-4" />,
  //   link:'/portfolio'
  // },
];

// Animation
const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card component
const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#141414] hover:cursor-pointer rounded-2xl p-6 w-full max-w-sm  h-full flex flex-col justify-between border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-2"
      onClick={() => { navigate(service.link) }}
    >
      <div>
        <h2 className="text-lg md:text-xl font-bold flex justify-between items-center mb-2 text-white">
          <span className="flex items-center gap-2">{service.icon}</span>
          <ArrowUpRight size={18} className="mb-5" />
        </h2>
        <h2 className="text-lg text-white md:text-xl font-bold mb-2">
          {service.title}
        </h2>
        <p className="text-gray-400 text-sm">{service.subtitle}</p>
      </div>
      <button className="mt-8 px-4 py-2 border hover:cursor-pointer border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full text-xs font-medium self-start">
        DISCUSS PROJECT
      </button>
    </motion.div>
  );
};

// Main component
const ServicePage = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isHeaderInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isHeaderInView, hasAnimated]);

  return (
    <section id="ServicePage" className="w-full bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        ref={headerRef}
        variants={fadeVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        {/* <div className="inline-block bg-blue-400 text-black text-xs font-semibold px-4 py-1 rounded-full mb-4">
          DIGITAL EXCELLENCE
        </div> */}
        <h1
          className="text-4xl text-white md:text-5xl font-extrabold tracking-wide mb-4">
          Our Services
        </h1>
        <p className="text-gray-400  mx-auto text-sm md:text-base leading-relaxed">
          Every brand has a story—it just needs the right platform to shine. At{" "}
          <span className="font-semibold text-blue-400">Novaframes</span>, we turn
          ideas into digital experiences that captivate, engage, and grow.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="flex justify-center">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 w-full ">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
        </div>
      </div>
      </div>

    </section>
  );
};

export default ServicePage;