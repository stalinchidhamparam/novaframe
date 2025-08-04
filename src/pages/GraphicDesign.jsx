import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Brush, Zap, Star, ArrowRight, Eye, Users, Award, ChevronDown, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'

const GraphicDesign = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        heroTitle: "",
        heroSubtitle: "",
        services: [],
        faqs: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "graphicAdmin", "content");
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                } else {
                    console.log("No document found, using default data");
                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const iconMaps = {
        Palette, Brush, Zap, Star, ArrowRight, Eye, Users, Award, ChevronDown, ChevronUp
    }

    const faqs = [
        {
            question: "What services do you provide as a graphic design studio?",
            answer: "We offer logo design, branding, posters, brochures, packaging, social media creatives, UI/UX layouts, and custom illustrations."
        },
        {
            question: "How do I get started with a design project?",
            answer: "You can fill out our contact form or message us directly with your project details. We'll get back to you within 24 hours to discuss further."
        },
        {
            question: "How long will it take to complete my project?",
            answer: "Timelines vary: logos usually take 3–5 days, brand identity 1–2 weeks, and full design packages may take longer depending on complexity."
        },
        {
            question: "How much do you charge for design services?",
            answer: "Pricing depends on the project scope. We offer custom quotes based on your needs—just let us know your requirements."
        },
        {
            question: "Can I request changes to the design?",
            answer: "Yes. Most packages include 2–3 rounds of revisions. Extra changes beyond that can be accommodated for a small fee."
        },
        {
            question: "Will I receive the original editable design files?",
            answer: "Yes. Upon completion, we provide editable source files (e.g., AI, PSD) along with web and print-ready formats."
        },
        {
            question: "Who owns the final design?",
            answer: "Once the project is completed and paid in full, you own 100% of the rights to the final design."
        },
        {
            question: "What if I'm not satisfied with the design?",
            answer: "We work closely with you during the process to ensure satisfaction. If needed, we'll keep refining based on your feedback."
        },
        {
            question: "Do you work with clients from outside India?",
            answer: "Yes, we work with clients globally and adjust our communication to suit different time zones."
        },
        {
            question: "How will we communicate during the project?",
            answer: "We primarily use email or WhatsApp for updates. Video calls are available for deeper discussions if needed."
        }
    ]
    const services = [
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Brand Identity",
            description: "Complete brand packages including logos, color schemes, and brand guidelines"
        },
        {
            icon: <Brush className="w-8 h-8" />,
            title: "Print Design",
            description: "Business cards, brochures, posters, and marketing materials"
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Digital Design",
            description: "Web graphics, social media content, and digital advertising materials"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "User interface and experience design for web and mobile applications"
        }
    ]

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "150+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Support" }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    const projects = [
        {
            title: "TechFlow Brand Identity",
            category: "Brand Design",
            description: "Complete rebranding for a tech startup including logo, business cards, and digital assets",
            image: "🚀",
            color: "from-pink-500 to-purple-600"
        },
        {
            title: "Restaurant Menu Design",
            category: "Print Design",
            description: "Elegant menu design with custom illustrations for an upscale dining establishment",
            image: "🍽️",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Mobile App Interface",
            category: "UI/UX Design",
            description: "Modern mobile app design with intuitive user experience and smooth interactions",
            image: "📱",
            color: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
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

            {/* Hero Section */}
            <motion.section
                className="relative z-10 px-6 py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {formData.heroTitle}
                        </span>
                        <br />
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        {formData.heroSubtitle}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { navigate('/portfolio') }}
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="relative z-10 px-6 py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From concept to completion, we deliver design solutions that make your brand stand out
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {formData.services.map((service, index) => {

                            const Icon = iconMaps[service.icon];

                            return(
                                <motion.div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-pink-400 transition-all duration-300 group"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={floatingVariants}
                                animate="animate"
                            >
                                <div className="text-pink-400 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    <Icon/>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                className="relative z-10 px-6 py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Explore some of our recent work and see how we bring creative visions to life
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group cursor-pointer"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-400 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink-500/20">
                                    {/* Project Image/Icon */}
                                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                        <motion.div
                                            className="text-6xl"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {project.image}
                                        </motion.div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-6">
                                        <div className="text-sm text-pink-400 mb-2 font-medium">
                                            {project.category}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Projects Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { navigate('/portfolio') }}
                        >
                            View All Projects
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="relative z-10 px-6 py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Frequently Asked <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Got questions? We've got answers. Find everything you need to know about our design process.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {formData.faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-800 rounded-2xl overflow-hidden bg-black backdrop-blur-sm transition-all duration-500"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors duration-300"
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
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
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

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
                            onClick={() => { navigate('/package') }}
                        >
                            View Pricing Plans
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default GraphicDesign