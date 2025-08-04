import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, ChevronRight } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: []
  });

  const [activeTab, setActiveTab] = useState('form');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contact"), {
        ...formData,
        timestamp: serverTimestamp(),
        discussed: false
      });

      await fetch("https://us-central1-novaframes-c3ba5.cloudfunctions.net/api/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      setFormData({ name: '', email: '', phone: '', message: '', services: [] });
      setShowModal(true);
      setTimeout(() => setShowModal(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
  };

  const services = [
    'Digital Marketing',
    'Branding',
    'Web Development',
    'Graphic Design',
    'Content Creation',
    'SEO Services'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 mb-6"
          >
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Get in touch</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Whether you have a project in mind or just want to chat about possibilities, we'd love to hear from you.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900 rounded-full p-1 border border-gray-800">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'form' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Send Message
            </button>
            {/* <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Contact Info
            </button> */}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'form' ? (
            <div>
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10"
              >
                {/* Email Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                  <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                  <p className="text-gray-400 mb-4">For general inquiries and partnerships</p>
                  <a
                    href="mailto:novaframes02@gmail.com"
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                  >
                    novaframes02@gmail.com
                  </a>
                </div>

                {/* Office Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                  <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                  <p className="text-gray-400 mb-4">Come discuss your project in person</p>
                  <div className="text-gray-300 space-y-1">
                    <p>Novaframes Company,</p>
                    <p>Devi Tex opposite,</p>
                    <p>Bhavani, Erode, India</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                  <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                  <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm IST</p>
                  <div className="space-y-2">
                    <a href="tel:+918940279776" className="text-white font-medium block hover:text-blue-400">+91 89402 79776</a>
                    <a href="tel:+919345679266" className="text-white font-medium block hover:text-blue-400">+91 93456 79266</a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Visual */}
                  <div className="hidden lg:block p-12 relative overflow-hidden">
                    {/* Background noise effect */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    {/* Content wrapper */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>

                      <ul className="space-y-4">
                        {[
                          "Creative minds, powerful outcomes",
                          "Tailored strategies, real results",
                          "Clarity in every conversation",
                          "Results you can measure and trust"
                        ]
                          .map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                <ChevronRight className="w-3 h-3 text-white" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="mt-20 relative z-10 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.8168480935718!2d77.68320503474762!3d11.458465190168035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba943001e097cfd%3A0xf51aa2e1c084fba5!2sNovaframes%20company!5e1!3m2!1sen!2sin!4v1753334996531!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>


                  {/* Right Side - Form */}
                  <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Describe Your Need</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your project goals, timeline, and budget..."
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3 text-gray-300">Services Needed</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <div key={service} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`service-${service}`}
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                                className="hidden"
                              />
                              <label
                                htmlFor={`service-${service}`}
                                className={`flex-1 cursor-pointer select-none rounded-lg px-4 py-3 transition-all text-sm ${formData.services.includes(service)
                                  ? 'bg-blue-600/20 border border-blue-500 text-white'
                                  : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700/50'
                                  }`}
                              >
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 mt-6 ${loading ? 'opacity-60 cursor-not-allowed' : ''
                          }`}
                        whileHover={!loading ? { scale: 1.01 } : {}}
                        whileTap={!loading ? { scale: 0.99 } : {}}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </div>

                <div className="lg:hidden block mt-10 relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.8168480935718!2d77.68320503474762!3d11.458465190168035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba943001e097cfd%3A0xf51aa2e1c084fba5!2sNovaframes%20company!5e1!3m2!1sen!2sin!4v1753334996531!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>

            </div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Email Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-gray-400 mb-4">For general inquiries and partnerships</p>
                <a
                  href="mailto:novaframes02@gmail.com"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                >
                  novaframes02@gmail.com
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-gray-400 mb-4">Come discuss your project in person</p>
                <div className="text-gray-300 space-y-1">
                  <p>Novaframes Company,</p>
                  <p>Devi Tex opposite,</p>
                  <p>Bhavani, Erode, India</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
                <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm IST</p>
                <div className="space-y-2">
                  <a href="tel:+919345679266" className="text-white font-medium block hover:text-blue-400">+91 93456 79266</a>
                  <a href="tel:+918940279776" className="text-white font-medium block hover:text-blue-400">+91 89402 79776</a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gray-900 text-white px-8 py-8 rounded-xl shadow-2xl border border-blue-500/30 max-w-md w-full mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-300 mb-6">We've received your message and will get back to you within 24 hours.</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;