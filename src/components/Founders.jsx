import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Developer from '../assets/Developer.jpg';
import COfounder from '../assets/COfounder.png';
import CEO from '../assets/CEO.jpeg';
import { Star, Sparkles, Heart, Award, Code, Film, Users, Zap } from 'lucide-react';

const Founders = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        {/* Team Members Section */}
        <motion.section
          className="relative py-2 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-white">
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
                  className="group relative rounded-xl bg-black/60 border border-white/10 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-blue-500 hover:scale-105 transition-transform duration-500"
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
      </div>
    </div>
  );
};

export default Founders;