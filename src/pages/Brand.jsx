import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { fetchProjects } from "../utils/service";
import Navigation from "../components/Navigation";

const Brand = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate()

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const [brandingData, setBrandingData] = useState({
    hero: {
      title: "",
      description: ""
    },
    services: [],
    portfolio: [],
    process: [],
    faqs: [],
    cta: {
      title: "",
      description: ""
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "branding", "brandingData");
        const docSnap = await getDoc(docRef);
        setBrandingData(docSnap.data());
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getFilteredProjects = async () => {
      try {
        const allProjects = await fetchProjects();
        const filtered = allProjects.filter(
          (project) => project.category === "Branding"
        );
        setProjects(filtered);
      } catch (error) {
        console.error("Error filtering projects:", error);
      }
    };

    getFilteredProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Rotating Radial Gradient */}
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl text-blue-500 uppercase md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {brandingData.hero.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            {brandingData.hero.description}
          </p>
        </motion.div>

                {/* Process Section */}
                <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">Our Creative Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to creating brands that captivate and convert your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {brandingData.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative group text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg transition-all duration-300 ${index % 2 === 0
                    ? 'bg-gradient-to-r from-blue-500 to-blue-500 group-hover:shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-500 to-blue-500 group-hover:shadow-blue-500/50'
                    }`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Our Branding Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingData.services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`mr-3 text-lg ${index % 2 === 0 ? 'text-blue-400' : 'text-blue-400'
                        }`}>✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Our Branding Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped businesses like yours establish memorable brand identities that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                className="group overflow-hidden cursor-pointer rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/ProjectDetail/${item.id}`)}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p> 
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <motion.button
              className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { navigate('/portfolio') }}
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 ">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our branding services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {brandingData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-2xl  overflow-hidden  transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-300 text-white hover:text-black transition-colors duration-300"
                >
                  <span className="text-lg font-semibold ">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6  
                      transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${activeIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Navigation/>
      </div>
    </div>
  );
};

export default Brand;