import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, ShoppingCart, Globe, Zap, CheckCircle, Star, ArrowRight, ExternalLink, Calendar, Users, TrendingUp, Play, Pause, ChevronLeft, ChevronRight, Eye, Award, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from '../utils/service';
import Navigation from '../components/Navigation';

const SoftwareDev = () => {
    const [selectedService, setSelectedService] = useState(0);
    const [selectedProject, setSelectedProject] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const services = [
        {
            id: 'website',
            icon: Globe,
            title: "Website Development",
            description: "Custom-crafted websites built for performance, engagement, and scalability.",
            gradient: "from-blue-500 to-blue-500",
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
            stats: {
                projects: "250+",
                clients: "150+",
                satisfaction: "99%"
            },
            projectIds: ["techcorp", "artisancrafts"] // Reference to project IDs
        },
        {
            id: 'ecommerce',
            icon: ShoppingCart,
            title: "E-Commerce Developement",
            description: "Empowering online businesses with frictionless, conversion-focused shopping experiences.",
            gradient: "from-blue-500 to-blue-500",
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
            stats: {
                projects: "320+",
                clients: "200+",
                satisfaction: "99%"
            },
        }
    ];

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                const projectsData = await fetchProjects();
                console.log(projectsData);
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    // Get current service and its projects
    const currentService = services[selectedService];
    const currentServiceProjects = projects.filter(project =>
        project.serviceId === currentService.id
    );
    const currentProject = currentServiceProjects[selectedProject];
    console.log(currentProject);
    
    const navigate = useNavigate();

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setSelectedService((prev) => (prev + 1) % services.length);
                setSelectedProject(0);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, services.length]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-10 bg-black text-white">
            {/* Hero Section */}
            <section className="relative z-10 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 px-2"
                    >
                        <motion.h1
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-4 sm:mb-6 text-blue-500"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            SOFTWARE
                            <br />
                            DEVELOPMENT
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Transforming ideas into powerful digital experiences through cutting-edge technology and innovative design
                        </motion.p>
                    </motion.div>
                </div>
            </section>


            {/* Services Navigation */}
            <section className="relative z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs
                        </p>
                    </motion.div>

                    {/* Service Selector */}
                    <div className="flex justify-center mb-12">
                        <div className="flex gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
                            {services.map((service, index) => (
                                <motion.button
                                    key={service.id}
                                    className={`flex items-center gap-3 px-6 cursor-pointer py-4 rounded-xl font-semibold transition-all duration-300 ${selectedService === index
                                        ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                    onClick={() => {
                                        setSelectedService(index);
                                        setSelectedProject(0);
                                        setIsAutoPlaying(false);
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <service.icon className="w-5 h-5" />
                                    <span className="hidden sm:block">{service.title}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Auto-play Controls */}
                    <div className="flex justify-center mb-12">
                        <motion.button
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            whileHover={{ scale: 1.05 }}
                        >
                            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'} Auto-cycle</span>
                        </motion.button>
                    </div>

                    {/* Current Service Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedService}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Service Details */}
                            <div className="space-y-8">
                                <div>
                                    <motion.div
                                        className={`w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-3xl flex items-center justify-center mb-6`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <currentService.icon className="w-10 h-10 text-white" />
                                    </motion.div>

                                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                        {currentService.title}
                                    </h3>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                        {currentService.description}
                                    </p>
                                </div>

                                {/* Core Services */}
                                <div>
                                    <h4 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-blue-400" />
                                        What We Deliver
                                    </h4>
                                    <div className="space-y-3">
                                        {currentService.offerings.map((offering, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start gap-3 text-gray-300"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{offering}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Project Showcase */}
                            {currentServiceProjects.length > 0 ? (

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                                            <Award className="w-6 h-6 text-blue-400" />
                                            Featured Projects
                                        </h4>
                                        <div className="flex gap-2">
                                            <motion.button
                                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-gray-400 hover:text-white transition-colors"
                                                onClick={() => setSelectedProject(selectedProject === 0 ? currentServiceProjects.length - 1 : selectedProject - 1)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </motion.button>
                                            <motion.button
                                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-gray-400 hover:text-white transition-colors"
                                                onClick={() => setSelectedProject((selectedProject + 1) % currentServiceProjects.length)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${selectedService}-${selectedProject}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10"
                                        >
                                            {/* Project Image - now using actual project images */}
                                            <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                                                {currentProject.images && currentProject.images.length > 0 ? (
                                                    <img
                                                        src={currentProject.images[0]}
                                                        alt={currentProject.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="text-center">
                                                        <div className={`w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                                            <currentService.icon className="w-10 h-10 text-white" />
                                                        </div>
                                                        <span className="text-gray-400 font-medium">{currentProject.category}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-8">
                                                <h5 className="text-2xl font-bold text-white mb-3">{currentProject.title}</h5>
                                                <p className="text-gray-300 leading-relaxed mb-6">{currentProject.description}</p>


                                                {/* Timeline */}
                                                <div className="flex items-center gap-2 mb-6">
                                                    <Calendar className="w-5 h-5 text-gray-400" />
                                                    <span className="text-gray-300">Timeline: {currentProject.year}</span>
                                                </div>

                                                <motion.button
                                                    className={`w-full bg-gradient-to-r ${currentService.gradient} hover:shadow-lg text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => navigate(`/ProjectDetail/${currentProject.id}`)}
                                                >
                                                    View Case Study
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <motion.div
                                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <h5 className="text-xl font-medium text-gray-300 mb-2">No projects available</h5>
                                    <p className="text-gray-500">We haven't added any {currentService.title} projects yet.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <Navigation/>
        </div>
    );
};

export default SoftwareDev;