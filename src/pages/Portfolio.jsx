import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProjects } from '../utils/service';
import Navigation from '../components/Navigation';

const categories = ['All', 'Branding', 'Software Developement', 'Digital Marketing'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();

  useEffect(() => {
  const init = async () => {
    await loadProjects();
    // scroll to top after load (or immediately if you prefer)
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  init();
}, []);

  const loadProjects = async () => {
    try {
      const projectData = await fetchProjects();
      setProjects(projectData);
      console.log(projectData);

    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    finally {
      setLoading(false)
    }
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory.replace(' Design', '')));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
          <div className="w-full h-full bg-black rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-20">
        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-4 sm:mb-6 text-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            PORTFOLIO
          </motion.h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            We craft digital experiences that push boundaries, challenge conventions, and create lasting impact for forward-thinking brands.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-medium transition-all duration-300 transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
                  px-3 py-1 text-sm 
                  sm:px-6 sm:py-3 sm:text-base
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="max-w-7xl mx-auto cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-3xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/ProjectDetail/${project.id}`)}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-sm text-purple-300 font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
            <br /><br />
        <Navigation/>
      </div>
    </div>
  );
};

export default Portfolio;