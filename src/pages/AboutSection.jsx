import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Navigation from '../components/Navigation';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="relative py-20 px-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  ABOUT US
                </motion.h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Creative storytellers shaping brands with purpose since 2017
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Nova Frames is a creative digital marketing team
                  specializing in social media.
                  We craft viral content, cinematic videos, and personal
                  branding strategies.
                  Our focus is on helping brands grow through powerful
                  visual storytelling.
                  With hands-on experience across industries, we deliver
                  real results.
                  We are self-built, self-driven, and passionate about
                  what we create.
                </p>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-400">10+</div>
                    <div className="text-sm text-gray-500">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400">50+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-cyan-400">99+</div>
                    <div className="text-sm text-gray-500">Clients satisfaction</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team collaboration"
                    className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services with Images */}
        <motion.section
          className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What We Create
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team/Process Section with Image */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Our Process
                </h2>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? 'bg-gradient-to-r from-purple-600 to-blue-600' :
                        index === 1 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                          index === 2 ? 'bg-gradient-to-r from-cyan-600 to-purple-600' :
                            'bg-gradient-to-r from-purple-600 to-pink-600'
                        }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2`}>{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team working together"
                  className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          className="py-20 px-6 relative bg-gray-900/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
            }}
          ></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We’re not just builders of code or curators of campaigns — we are digital storytellers.
              Every line of code we write, and every ad we launch, is crafted to move, to matter, and to multiply impact.
              Strategy fuels us. Design guides us. Results define us.
            </p>
            <motion.div
              className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic mb-6">
                "We turn traffic into trust, clicks into connections, and ideas into digital powerhouses."
              </blockquote>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {valuesData.map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-between min-h-[320px]">
                    <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${index === 0 ? 'bg-gradient-to-br from-purple-600 to-blue-600' :
                      index === 1 ? 'bg-gradient-to-br from-blue-600 to-cyan-600' :
                        'bg-gradient-to-br from-cyan-600 to-purple-600'
                      }`}>
                      {value.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${index === 0 ? 'text-purple-300' :
                      index === 1 ? 'text-blue-300' :
                        'text-cyan-300'
                      }`}>{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.section>

        <Navigation/>
      </div>
    </div>
  );
};

// Data arrays
const servicesData = [
  {
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Software Development",
    description: "We design and build high-performance web and mobile applications tailored to your business needs—from sleek websites to powerful mobile apps."
  },
  {
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Design & Branding",
    description: "We craft visual identities—from logos to full brand systems—that connect emotionally and make your brand unforgettable."
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Content Creation",
    description: "Engaging content that tells your story—social media posts, videos, blogs, and visuals that capture attention and drive engagement."
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Digital Marketing",
    description: "We drive growth with smart campaigns—SEO, social media, and content strategies—that get your brand noticed and remembered."
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your brand, goals, and target audience."
  },
  {
    title: "Strategy",
    description: "We develop a comprehensive strategy tailored to your unique needs."
  },
  {
    title: "Creation",
    description: "Our team brings your vision to life with cutting-edge design and development."
  },
  {
    title: "Launch & Optimize",
    description: "We launch your project and continuously optimize for better results."
  }
];

const valuesData = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovation",
    description: "We embrace new ideas, tools, and technologies to build creative solutions that set our clients apart in the digital age."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
      </svg>
    ),
    title: "Discipline",
    description: "We operate with focus, responsibility, and a strong work ethic—ensuring timelines are met and quality is never compromised."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Consistency",
    description: "From the smallest tasks to the biggest projects, we maintain the same level of quality, passion, and attention to detail every time."
  }
];



export default AboutSection;