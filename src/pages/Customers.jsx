import React, { useEffect, useState } from 'react';
import { ExpandIcon, Scale, View, WrapTextIcon, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchClients } from '../utils/service';
import { FaStudiovinari, FaLightbulb } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ClientModal = ({ client, isOpen, onClose }) => {
  if (!isOpen || !client) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 p-8 rounded-3xl border border-blue-500 shadow-2xl max-w-md w-full text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-400 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        <img
          src={client.image}
          alt={client.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
        />

        <h3 className="text-2xl font-bold text-blue-400 mb-2">{client.name}</h3>
        <p className="text-blue-200 italic text-base">"{client.review}"</p>
      </motion.div>
    </div>
  );
};

const Customers = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchClients();
        setClients(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const approachItems = [
    {
      icon: WrapTextIcon,
      title: 'Purpose-Led Content',
      desc: 'Every asset is crafted with intent to drive real results.',
    },
    {
      icon: FaStudiovinari,
      title: 'Studio-Level Visuals',
      desc: 'From storyboard to screen, we deliver top-quality visuals.',
    },
    {
      icon: ExpandIcon,
      title: 'Strategic Execution',
      desc: 'Planned content with measurable, consistent results.',
    },
    {
      icon: Scale,
      title: 'Scalable Solutions',
      desc: 'Flexible content packages for growth-focused brands.',
    },
    {
      icon: View,
      title: 'Creative That Converts',
      desc: 'Blending emotion and logic for high-performing visuals.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Thinking',
      desc: 'Constantly evolving ideas that keep your brand ahead of trends.',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden ">
        {/* Background elements */}
        {/* <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float-delay" />
        </div> */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We collaborate with visionary companies to create extraordinary digital experiences.
            </p>
          </motion.div>

          {/* Clients Grid - Enhanced Design */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
                onClick={() => {
                  setSelectedClient(client);
                  setIsModalOpen(true);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />

                <div className="flex flex-col cursor-pointer items-center p-6 bg-gray-950 backdrop-blur-sm rounded-xl border border-gray-900 group-hover:border-blue-400/30 transition-all duration-300 h-full">
                  <div className="relative mb-5">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-white text-center">
                    {client.name}
                  </h3>
                  {/* <span className="mt-1 text-xs text-gray-400 group-hover:text-blue-300 transition-colors">
                    View Case Study
                  </span> */}
                </div>
              </motion.div>
            ))}
          </div>


          {/* Stats Section */}
          <section className="bg-black pt-10 py-12">
            <div className="max-w-6xl border-t border-zinc-800 pt-3 mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-400">50+</p>
                <p className="text-gray-400 mt-1">Works with Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">99%</p>
                <p className="text-gray-400 mt-1">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-gray-400 mt-1">Output Delivered</p>
              </div>
            </div>
          </section>

          {/* Optional CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => { navigate('/contact') }}
              className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              Become Our Client
            </button>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative px-6 overflow-hidden ">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-5xl font-bold text-white mt-4">
              How We Bring Ideas to Life
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-950 p-8 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:bg-blue-500/20 transition">
                  <item.icon />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-gray-700/50 flex items-center">
                  <span className="text-blue-400 font-mono">0{index + 1}</span>
                  {/* <div className="ml-auto w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ClientModal client={selectedClient} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Customers;
