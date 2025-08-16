import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Developer from '../assets/Kavin.jpg';
import COfounder from '../assets/COfounder.png';
import CEO from '../assets/CEO.jpeg';
import { Star, Sparkles, Heart, Award, Code, Film, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Team = () => {

  const navigate = useNavigate()


  const teamMembers = [
    {
      name: "Hari Prasanth",
      role: "CEO & Founder",
      image: CEO,
      bio: "Video Editor with 4 years of experience in crafting compelling visual stories and post-production excellence.",
      color: "from-purple-400 via-pink-400 to-red-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      icon: <Film className="w-6 h-6" />
    },
    {
      name: "Prema",
      role: "Co-Founder",
      image: COfounder,
      bio: "Video Editor with 2 years of experience, skilled in editing, color correction, and motion graphics.",
      color: "from-cyan-400 via-blue-400 to-indigo-400",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "Kavin",
      role: "Co-Founder",
      image: Developer,
      bio: "Software Developer with 4 years of experience in building efficient, scalable web applications.",
      color: "from-emerald-400 via-teal-400 to-cyan-400",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const statsData = [
    {
      count: "100%",
      label: "Creative Commitment",
      gradient: "from-blue-500/20 to-blue-500/20",
      textGradient: "from-blue-400 to-blue-400",
    },
    {
      count: "50+",
      label: "Projects Successfully Delivered",
      gradient: "from-blue-500/20 to-blue-500/20",
      textGradient: "from-blue-400 to-blue-400",
    },
    {
      count: "10+",
      label: "Happy Clients Onboard",
      gradient: "from-blue-500/20 to-blue-500/20",
      textGradient: "from-blue-400 to-blue-400",
    },
    {
      count: "99%",
      label: "Dedicated Client Support",
      gradient: "from-blue-500/20 to-blue-500/20",
      textGradient: "from-blue-400 to-blue-400",
    },
  ];



  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section with group photo */}
        <motion.section
          className="relative px-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto">
            {/* Stunning header */}
            <div className="md:absolute inset-0 flex justify-center pt-20 z-10 text-center">
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                MEET OUR TEAM
              </motion.h1>
            </div>

            {/* Group Photo Section */}
            <motion.div
              className="relative mb-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute  inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative overflow-hidden backdrop-blur-sm bg-black/50 p-2">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <img
                    src="https://media.istockphoto.com/id/854441108/photo/ready-to-make-success-happen.jpg?s=2048x2048&w=is&k=20&c=plYc7Dxg_MP1Sq32HI_olQlALZAKhvrsH3IPEd8cv78="
                    alt="Our Amazing Team"
                    className="w-full md:min-h-screen sm:h-[80vh] object-contain sm:object-cover sm:object-[center_-20%]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 z-20">
                    <div className="text-center">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                        Building Dreams Together
                      </h2>
                      <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto">
                        United by passion, driven by innovation, and committed to excellence in everything we create.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>


        {/* Company Details Section */}
        <motion.section
          className="relative py-2 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
              {/* Company Story */}
              <motion.div
                className="space-y-8"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-white/10">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">Our Story</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Crafting Digital Excellence
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    We're a passionate team of creative professionals specializing in video editing,
                    motion graphics, and software development. With combined years of experience in
                    the industry, we transform ideas into compelling visual stories and robust digital solutions.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our mission is to empower businesses and individuals through innovative technology
                    and captivating visual content. We believe in the power of collaboration,
                    creativity, and cutting-edge technology to create extraordinary experiences.
                  </p>
                </div>
              </motion.div>

              {/* Company Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center`}
                  >
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.count}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>


            </div>
          </div>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          className="relative py-2 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-white/10">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Leadership Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Meet Our Founders
              </h2>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The visionary leaders behind our success, each bringing unique expertise
                and passion to drive our company forward.
              </p>
            </div>

            {/* Team showcase grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl bg-black/60 border border-white/10 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-transform duration-500"
                >
                  {/* Image block - square ratio */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Info block */}
                  <div className="p-5 text-center">
                    <h3 className="text-white text-xl font-bold mb-1 group-hover:text-purple-300 transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">{member.role}</p>
                  </div>

                  {/* Glow ring on hover */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-2 ring-purple-500/10 group-hover:ring-purple-500/30 transition-all duration-500"></div>
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

export default Team;