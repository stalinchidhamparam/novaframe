import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Users,
  DollarSign,
  Search,
  Share2,
  Monitor,
  ShoppingCart,
  Smartphone,
  RefreshCw,
  MousePointer,
  UserCheck,
  Mail,
  Eye,
  Sparkles,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { fetchProjects } from '../utils/service';
import SoftwareDevelopment from '../pages/SoftwareDevelopement';
import AnimatedLoading from '../stocks/AnimatedLoading';

const ServiceComponent = ({ service }) => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'website',
      title: "Website Development",
      description: "Custom-crafted websites built for performance, engagement, and scalability.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Webflow (Official 5★ Partner)",
        "WordPress (Custom Themes & Plugins)",
        "Headless CMS (Strapi, Sanity)",
        "Shopify (For integrated commerce)",
        "Next.js & React Development",
        "Vue.js & Nuxt.js Solutions"
      ],
      offerings: [
        "Responsive & performance-optimized web design",
        "CMS development with flexible content management",
        "On-page SEO optimization and performance tuning",
        "UX/UI design, animations, and micro-interactions",
        "Third-party app integrations (CRMs, Analytics, Forms)",
        "Maintenance, backups & security monitoring"
      ],
    },
    {
      id: 'mobile',
      title: "Mobile App Development",
      description: "End-to-end mobile solutions tailored for business growth and user retention.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      features: [
        "React Native (Cross-platform)",
        "Flutter Development",
        "Native iOS (Swift)",
        "Native Android (Kotlin)",
        "Node.js (Backend APIs)",
        "Firebase, MongoDB, PostgreSQL"
      ],
      offerings: [
        "Custom Shopify-integrated mobile apps",
        "Real-time order, product & user sync",
        "Push notifications and in-app messaging",
        "Secure payments & checkout flows",
        "Loyalty programs & rewards integration",
        "Offline mode & caching strategies"
      ],
    },
    {
      id: 'ecommerce',
      title: "E-Commerce Developement",
      description: "Empowering online businesses with frictionless, conversion-focused shopping experiences.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      features: [
        "Shopify & Shopify Plus",
        "WooCommerce & WordPress",
        "Magento Development",
        "Custom E-commerce Solutions",
        "Headless Commerce Architecture",
        "Payment Gateway Integration"
      ],
      offerings: [
        "Custom storefront development with branded UX",
        "Full Shopify ecosystem setup and optimization",
        "Advanced cart & checkout customization",
        "Integrated apps (Klaviyo, Recharge, Gorgias)",
        "Email automation flows for marketing",
        "Product configurators and virtual try-on tools"
      ],
    }
  ];

  // const projects = [
  //     {
  //         id: "techcorp",
  //         serviceId: "website",
  //         title: "TechCorp Enterprise Portal",
  //         category: "Software Development",
  //         description: "A comprehensive enterprise portal built with Next.js and Headless CMS, featuring advanced user management, real-time analytics, and multi-language support.",
  //         year: "3 months",
  //         images: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  //     },
  //     {
  //         id: "artisancrafts",
  //         serviceId: "website",
  //         title: "ArtisanCrafts Marketplace",
  //         category: "Software Development",
  //         description: "Custom marketplace platform connecting artisans with customers, featuring advanced search, vendor management, and integrated payment processing.",
  //         year: "4 months",
  //         images: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  //     },
  //     {
  //         id: "fittracker",
  //         serviceId: "mobile",
  //         title: "FitTracker Pro",
  //         category: "Software Development",
  //         description: "Comprehensive fitness tracking app with AI-powered workout recommendations, social features, and wearable device integration.",
  //         year: "6 months",
  //         images: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
  //     },
  //     {
  //         id: "quickdeliver",
  //         serviceId: "mobile",
  //         title: "QuickDeliver Food App",
  //         category: "Software Development",
  //         description: "On-demand food delivery platform with real-time tracking, multiple payment options, and restaurant management system.",
  //         year: "5 months",
  //         images: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"
  //     },
  //     {
  //         serviceId: "ecommerce",
  //         title: "LuxuryStyle Fashion Store",
  //         category: "Software Development",
  //         description: "High-end fashion e-commerce platform with AR try-on features, personalized recommendations, and seamless checkout experience.",
  //         year: "4 months",
  //         images: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  //     },
  //     {
  //         id: "greengarden",
  //         serviceId: "ecommerce",
  //         title: "GreenGarden Marketplace",
  //         category: "Software Development",
  //         description: "Sustainable gardening marketplace connecting eco-friendly vendors with conscious consumers, featuring carbon footprint tracking.",
  //         year: "6 months",
  //         images: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
  //     }
  // ];


  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const projectsData = await fetchProjects();
        console.log(projectsData);
  
        // ✅ Make sure `service` is defined
        if (service) {
          const proj = projectsData.filter(p => p.category === service.name);
          setProjects(proj);
          console.log(proj, 'proj');
        } else {
          console.warn("Service is undefined while filtering projects.");
          setProjects([]);
        }
  
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
  
    loadProjects();
  }, [service]);
  
  

  return (
    <>
      {loading ? <AnimatedLoading /> : (

        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden'>
          {/* Enhanced Animated Background Elements */}
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

            {/* Floating Elements */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -150, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Pulsing Gradient Circles */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-32 left-16 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-96 right-32 w-32 h-32 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-16 w-36 h-36 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          <div className="relative z-10 text-white px-6 py-20 lg:px-12 max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp size={80} className="mx-auto text-pink-500" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-blue-500 to-pink-600 text-transparent bg-clip-text">
                {service?.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {service?.description}
              </p>
              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>

            {/* Services */}
            {service.benefits[0].name.length > 0 &&

              <motion.section
                className="mb-20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">Our Services</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service?.benefits?.map((service, index) => (
                    <motion.div
                      key={index}
                      className="group p-6 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >

                      <h3 className="text-lg font-bold mb-3 text-white">{service?.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service?.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

            }

            {/* Portfolio Section */}
            {service.name === "Software Development" ?

              <SoftwareDevelopment services={services} projects={projects} /> :

              <motion.div
                className="mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our Branding Portfolio
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    See how we've helped businesses like yours establish memorable brand identities that drive results.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service?.portfolio?.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group overflow-hidden rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden h-72">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="font-bold text-2xl text-white mb-2">{item?.name}</h3>
                        <p className="text-gray-400 mb-4">{item?.description}</p>
                        {item.techniques.map((tech, index) => {
                          <p key={index} className="text-gray-400 mb-4">{tech}</p>
                        })}
                        <button className="flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group cursor-pointer">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
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
            }

            {/* FAQ Section */}
            {service.faqs[0].question.length > 0 &&
              <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">Frequently Asked Questions</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Get answers to common questions about our services</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                  {service?.faqs?.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors duration-300"
                      >
                        <span className="text-lg font-semibold text-white">{item?.question}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-500 ease-in-out ${openFAQ === index
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                          }`}
                      >
                        <div className="overflow-hidden px-6 pb-4 text-gray-300 leading-relaxed">
                          {item?.answer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            }

            {/* CTA Section */}
            <motion.div
              className="text-center py-20 px-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-pink-500/20 relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Background decoration */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="inline-block mb-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Zap className="text-blue-500 mx-auto" size={70} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
                <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Let's create something extraordinary together. Schedule your free consultation today and discover how exceptional branding can elevate your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.button
                    className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300 hover:shadow-pink-500/25 hover:scale-105 transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate('/contact') }}
                  >
                    Get Started Now
                  </motion.button>
                  <motion.button
                    className="bg-transparent border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate('/plans') }}
                  >
                    View Pricing Plans
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      )}
    </>
  );
};

export default ServiceComponent;