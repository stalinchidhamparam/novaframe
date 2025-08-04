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
  ArrowRight,
  User,
  UserCircle2Icon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { fetchProjects } from '../utils/service';
import Navigation from '../components/Navigation';

const DigitalMarketing = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // 🟡 Loading state
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hero: { title: '', subtitle: '' },
    partnerReasons: [],
    benefits: [],
    services: [],
    metrics: [],
    faq: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'performanceAdmin', 'content');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.log('No such document! Using default values');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    const getFilteredProjects = async () => {
      try {
        const allProjects = await fetchProjects();
        const filtered = allProjects.filter(
          (project) => project.category === 'Digital Marketing'
        );
        setProjects(filtered);
      } catch (error) {
        console.error('Error filtering projects:', error);
      }
    };

    Promise.all([fetchData(), getFilteredProjects()])
      .finally(() => setLoading(false)); // ✅ Set loading to false after all fetches
  }, []);


  const iconMap = {
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
    ArrowRight,
    UserCircle2Icon
    // Add more as required
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
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
          <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
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
          </motion.div>
          <motion.h1
            className="text-4xl uppercase sm:text-6xl md:text-7xl lg:text-7xl text-blue-500 font-black mb-4 sm:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {formData.hero.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {formData.hero.subtitle}
          </p>
        </motion.div>

        {/* Why Partner Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Partner with Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {formData.partnerReasons.map((reason, index) => {
              const Icon = iconMap[reason?.icon]; // Convert string to actual component
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-102"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-500 mt-1">
                    {Icon && <Icon size={24} />} {/* Only render if found */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.section>


        {/* Key Benefits */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Transform your business with our proven performance marketing strategies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formData.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.title}
                  className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700 hover:border-blue-500/50 transform hover:-translate-y-2 hover:scale-102"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white ">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (

                <motion.div
                  key={service.title}
                  className="group p-6 bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>

              )
            }
            )}
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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
                  {/* <button className="flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group cursor-pointer">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button> */}
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

        {/* Success Metrics */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Track and measure what matters most to your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.metrics.map((metric, index) => {
              const Icon = iconMap[metric?.icon];
              return (
                <motion.div
                  key={metric.title}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-500 mb-3">
                    <Icon size={24}/>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{metric.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{metric.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get answers to common questions about our services</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {formData.faq.map((item, index) => (
              <motion.div
                key={index}
                className=" rounded-2xl overflow-hidden bg-black  transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-300 hover:text-black text-white transition-colors duration-300"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6  transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
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
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Navigation/>
      </div>
    </div>
  );
};


const benefits = [
  {
    icon: <TrendingUp size={40} />,
    title: 'ROI Tracking',
    description: 'Monitor real-time performance to measure and maximize your return on investment with advanced analytics.',
  },
  {
    icon: <Target size={40} />,
    title: 'KPI Optimization',
    description: 'Target and refine key performance indicators to ensure sustainable campaign success and growth.',
  },
  {
    icon: <Users size={40} />,
    title: 'Enhanced Reach',
    description: 'Reach the right audience across multiple channels for better engagement and higher conversion rates.',
  },
  {
    icon: <DollarSign size={40} />,
    title: 'Revenue Growth',
    description: 'Focus on high-converting channels and tactics to drive consistent, measurable revenue growth.',
  },
  {
    icon: <Zap size={40} />,
    title: 'Faster Results',
    description: 'Achieve quicker outcomes with performance-driven strategies instead of waiting for organic growth.',
  },
];

const services = [
  {
    icon: <Search size={32} />,
    title: 'Search Engine Marketing (SEM)',
    description: 'Drive targeted traffic and conversions through optimized Google & Bing Ads campaigns.',
  },
  {
    icon: <Share2 size={32} />,
    title: 'Social Media Ads',
    description: 'Boost brand awareness and sales using paid campaigns across Instagram, Facebook, and LinkedIn.',
  },
  {
    icon: <Monitor size={32} />,
    title: 'Display & Video Ads',
    description: 'Engage your audience with compelling banner, native, and video ads across premium platforms.',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'E-commerce Sales Campaigns',
    description: 'Scale product sales using high-converting campaigns on Meta, Google Shopping & marketplace platforms.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'App Installs & Conversions',
    description: 'Drive user acquisition through effective app install strategies and conversion optimization.',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Customer Retention',
    description: 'Keep your users engaged with sophisticated retargeting and retention-focused marketing strategies.',
  },
];

const steps = [
  'Define Goals and Objectives',
  'Strategic Planning and Budgeting',
  'Competitor and Keyword Analysis',
  'Creative Development and Testing',
  'Tracking and Analytics Setup',
  'Campaign Launch and Monitoring',
  'Remarketing to Maximize ROAS',
  'A/B Testing and Optimization',
  'Performance Reporting and Scaling',
];

const metrics = [
  {
    icon: <MousePointer size={24} />,
    title: 'Cost Per Click (CPC)',
    description: 'Track the cost for each ad click to manage ad spend effectively and optimize bid strategies.',
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Cost Per Acquisition (CPA)',
    description: 'Measure the cost to acquire a customer—essential for budgeting and profitability analysis.',
  },
  {
    icon: <Mail size={24} />,
    title: 'Cost Per Lead (CPL)',
    description: 'Assess the expense to generate qualified leads and optimize your sales funnel efficiency.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Return on Investment (ROI)',
    description: 'Quantify the return against your investment to gauge campaign success and profitability.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Customer Lifetime Value (LTV)',
    description: 'Estimate the total value a customer brings throughout their entire relationship with your brand.',
  },
];

const faq = [
  {
    question: 'Do you only work with Shopify platforms?',
    answer: 'We specialize in Shopify but also provide comprehensive support for WordPress, Magento, WooCommerce, and other custom e-commerce platforms.',
  },
  {
    question: 'Can you help with complete rebranding or website redesign?',
    answer: 'Absolutely! We offer full-service rebranding and website overhaul services, working closely with you to align with your brand vision and business goals.',
  },
  {
    question: 'Do you provide product photography or video production?',
    answer: 'Yes, we offer high-quality product photography and video production services to create compelling marketing assets that drive conversions.',
  },
  {
    question: 'Do you offer custom app development for specific business needs?',
    answer: 'Yes, we build custom applications and integrations tailored to enhance customer experience, streamline operations, and boost conversions.',
  },
  {
    question: 'How do you measure and report campaign performance?',
    answer: 'We provide detailed weekly and monthly reports with key metrics, insights, and recommendations. You\'ll have access to real-time dashboards showing campaign performance across all channels.',
  },
];

export default DigitalMarketing;