// components/ProjectShowcase.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchImages } from '../utils/service';

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    getImages();
  }, []);

  return (
    <div className="px-6 py-16 bg-black">
      <motion.h1
        className="text-white text-4xl md:text-5xl pb-10 text-center font-bold leading-tight"
      >
        Behind The Output
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch md:items-end">
        {images.map((project, index) => {
          const isActive = activeIndex === index;
          const showImage = project.url;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative flex-1 group cursor-pointer transition-all duration-300"
              animate={{
                flex: isActive ? 2 : 1,
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              aria-label={`Project: ${project.title} in ${project.location}`}
            >
              {/* Image Reveal - always black & white */}
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: showImage ? `url(${project.url})` : '',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: showImage
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.4s ease-in-out',
                }}
                initial={false}
                animate={{
                  clipPath: showImage
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />

              {/* Number / placeholder area */}
              <div
                className={`relative z-10 w-full h-[300px] md:h-[400px] flex items-center justify-center ${
                  isActive ? 'text-black' : 'text-pink-400'
                } text-[4rem] md:text-[6vw] font-light transition-all`}
              >
                {/* Optional overlay content */}
              </div>

              {/* Title & Location */}
              {showImage && (
                <div
                  className={`absolute bottom-6 left-6 z-20 text-white ${
                    isActive ? 'text-lg' : ''
                  }`}
                >
                  <div className="text-xl">{project.title}</div>
                  <div className="text-sm opacity-80">{project.location}</div>
                </div>
              )}

              {/* Arrow Icon */}
              {showImage && (
                <div className="absolute bottom-6 right-6 z-20">
                  <span className="text-white text-2xl">↗</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
