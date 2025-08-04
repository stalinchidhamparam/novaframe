import React, { useState } from 'react';
import { Check, ChevronDown, Star, User, Video, Share2, Zap, ArrowRight, Play, Calendar, Clock, Award, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const PackageDetail = () => {

    const location = useLocation();
    const { selectedPackage } = location.state || {};
    console.log(selectedPackage,'selectedPackage');
    
    const packageData = selectedPackage || {
        name: "Premium",
        price: "50K",
        billing: "per month",
        features: [
            "18 Professional Videos",
            "2 Cinematic Videos",
            "12 Custom Posters",
            "Holiday/Event Stories",
            "Shoot + Edit Included",
            "Concept-Based Video Content",
            "Standard Meta Ad Campaign",
            "Social Media Handling",
        ],
        highlights: [
            { icon: Video, title: "4K Resolution", description: "Crystal clear professional quality" },
            { icon: User, title: "Dedicated Manager", description: "Single point of contact" },
            { icon: Star, title: "Priority Support", description: "Faster response times" }
        ]
    };

    const naviagte = useNavigate();

    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const iconMaps = {
        Check, ChevronDown, Star, User, Video, Share2, ArrowRight, Play, Calendar, Clock, Award, ThumbsUp
    }
    return (
        <div className="bg-black text-gray-900 font-sans">
            {/* Professional Header */}
            <header className="text-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Left Content */}
                        <div>
                            <motion.div variants={fadeIn} className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
                                <Award className="h-4 w-4 text-blue-400 mr-2" />
                                <span className="text-blue-300 text-sm font-medium">{packageData.name} Solution</span>
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {packageData.name}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Package
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                                Comprehensive content solution designed to transform your digital presence and accelerate growth through professional video production and strategic marketing.
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-12">
                                <button onClick={()=>{naviagte('/contact')}} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Get Started Today <ArrowRight size={18} />
                                </button>
                            </motion.div>

                            {/* Stats Row */}
                            <motion.div variants={fadeIn} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {selectedPackage.stats.map((stat, index) => {
                                    const ICON = iconMaps[stat.icon];

                                    if (!ICON) {
                                        console.error(`Invalid icon: ${stat.icon}`);
                                        return null; // Don't render if icon is invalid
                                    }

                                    return(
                                        <div key={index} className="text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start mb-2">
                                            <ICON className="h-5 w-5 text-blue-400 mr-2" />
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                    )
                                })}
                            </motion.div>
                        </div>

                        {/* Right - Pricing Card */}
                        <motion.div variants={fadeIn} className="relative">
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                                {/* <div className="text-center mb-8">
                                    <div className="text-4xl font-bold text-white mb-2">₹{packageData.price}</div>
                                    <div className="text-blue-300">{packageData.billing}</div>
                                    <div className="mt-4 text-sm text-gray-300">Starting from</div>
                                </div> */}

                                <div className="space-y-4 mb-8">
                                    {packageData.features.slice(0, 6).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button onClick={()=>naviagte('/contact')} className="w-full cursor-pointer bg-white text-slate-900 hover:bg-gray-100 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                                    Choose This Plan <ArrowRight size={16} />
                                </button>

                                <div className="mt-4 text-center text-sm text-gray-400">
                                    Guaranted work
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Service Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            What's Included
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Everything you need to elevate your brand presence and drive meaningful engagement across all platforms
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {selectedPackage.serviceFeatures.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                                <ul className="space-y-4">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-400">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            {/* <section className=" bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            Our Work
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400"
                        >
                            See the quality and creativity that sets us apart
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }, (_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={`https://picsum.photos/600/400?random=${i + 50}`}
                                    alt={`Portfolio item ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block bg-white/30 text-white text-xs px-3 py-1 rounded-full mb-2">
                                            {i % 2 === 0 ? 'Video Production' : 'Brand Content'}
                                        </span>
                                        <h3 className="text-white font-semibold">Project Showcase</h3>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                            <Play className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Testimonials & FAQ */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Testimonials */}
                        {/* <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-white mb-12"
                            >
                                Client Success Stories
                            </motion.h2>

                            <div className="space-y-8">
                                {[
                                    {
                                        quote: "The premium package transformed our social media presence completely. We saw a 300% increase in engagement within the first two months.",
                                        name: "Sarah Johnson",
                                        role: "CEO, Fashion Boutique",
                                        rating: 5,
                                        company: "StyleCo"
                                    },
                                    {
                                        quote: "Working with this team has been game-changing. The quality of content and strategic approach delivered results beyond our expectations.",
                                        name: "Michael Chen",
                                        role: "Marketing Director",
                                        rating: 5,
                                        company: "TechStart Inc."
                                    }
                                ].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-black rounded-xl p-8 shadow-lg"
                                    >
                                        <div className="flex mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <blockquote className="text-gray-400 text-lg leading-relaxed mb-6">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                                                <User className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-500">{testimonial.name}</div>
                                                <div className="text-gray-600">{testimonial.role}</div>
                                                <div className="text-sm text-blue-600">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div> */}

                        {/* FAQ */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-white mb-12"
                            >
                                Frequently Asked Questions
                            </motion.h2>

                            <div className="space-y-4">
                                {selectedPackage.faqs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="rounded-xl shadow-lg overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 text-gray-300 hover:text-black transition-colors"
                                        >
                                            <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                                            <ChevronDown className={`h-5 w-5 text-gray-200 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {expandedFAQ === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 border rounded-xl p-6"
                            >
                                <h3 className="text-xl font-bold text-gray-300 mb-3">Still have questions?</h3>
                                <p className="text-gray-600 mb-4">Our team is here to help you make the right decision for your business.</p>
                                <button onClick={()=>naviagte('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                                    Contact Our Team
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PackageDetail;