import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonCursorTrail from '../stocks/NeonCursorTrail';
import Scroll from '../components/Scroll';

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center cursor-pointer"
    >

      <motion.div
        className="absolute top-0 w-full aspect-square rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"
        animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.3, 0.2], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-0 w-[80%] aspect-square rounded-full bg-gradient-to-br from-blue-500/15 to-pink-500/15 blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
      />

      {/* SVG logo */}
      <motion.svg
        viewBox="0 0 200 200"
        className="relative z-10 w-full h-full"
        initial={{ rotate: 0, y: 0 }}
        animate={{ rotate: 360, y: [-10, 0, -10] }}
        transition={{
          rotate: { repeat: Infinity, duration: 30, ease: 'linear' },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
        }}
      >
        {[0.3, 0.8, 1.3].map((delay, i) => (
          <motion.circle
            key={i}
            cx={[100, 75, 125][i]}
            cy={[75, 125, 125][i]}
            r="50"
            stroke={`url(#gradient${i + 1})`}
            strokeWidth="3"
            fill="none"
            strokeDasharray="314"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 314, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 1, scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              delay,
              ease: 'easeInOut',
              scale: {
                repeat: Infinity,
                duration: 4,
                delay: delay + 2,
              },
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

const AnimatedCounter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  useEffect(() => {
    const duration = 5000;
    const startTime = performance.now();
    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 2);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [from, to]);
  return <span>{count}</span>;
};

const Home = () => {
  const ref = useRef(null);
  const [startReveal, setStartReveal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setStartReveal(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scroll

    const timer = setTimeout(() => {
      setStartReveal(true);
      document.body.style.overflow = 'auto'; // Enable scroll
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className='relative'>
      {!isMobile && <NeonCursorTrail containerRef={ref} />}
      <div

        className="relative pt-15 bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between  md:px-25 overflow-x-hidden  "
      >

        <motion.div
          className="relative  space-y-8 z-30 md:z-0 px-6"
          style={{
            backdropFilter: startReveal && isMobile ? 'blur(10px)' : 'blur(0px)',
            WebkitBackdropFilter: startReveal && isMobile ? 'blur(10px)' : 'blur(0px)',
            transition: 'backdrop-filter 1.5s ease-in-out, -webkit-backdrop-filter 1.5s ease-in-out',
          }}
        >
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: startReveal ? 1 : 0, y: 0 }} transition={{ duration: 1 }}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: startReveal ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Transform Your <br />
              <motion.span
                className="text-blue-500 bg-clip-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              >
                Digital Experience
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mt-6 "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: startReveal ? 1 : 0, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Elevate your online presence with our cutting-edge solutions tailored to your unique business goals and vision.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: startReveal ? 1 : 0, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button onClick={() => scrollToSection("ServicePage")} className="relative overflow-hidden border hover:cursor-pointer border-blue-500 text-blue-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all group">
              <span className="relative z-10">Explore Solutions</span>
            </motion.button>

            <motion.button onClick={() => scrollToSection("PackageComparison")} className="relative hover:cursor-pointer overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all group">
              <span className="relative z-10">View Plan </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: startReveal ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[
              { value: 50, label: 'Works with Clients', suffix: '+' },
              { value: 99, label: 'Uptime Guarantee', suffix: '%' },
              { value: 500, label: 'Output Delivered', suffix: '+' },
              { value: 99, label: 'Client Satisfaction', suffix: '%' },
            ]
              .map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-b from-gray-900/50 to-gray-900/0 p-4 rounded-xl border border-gray-800/50"
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-2xl font-bold mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: startReveal ? 1 : 0 }}
                    transition={{ delay: 1.8 + i * 0.2 }}
                  >
                    <AnimatedCounter from={0} to={stat.value} />
                    {stat.suffix}
                  </motion.p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 absolute md:static top-30 md:top-80 z-10 left-0 flex justify-center items-center h-[400px] md:h-auto overflow-hidden"
          animate={{
            x: startReveal
              ? isMobile
                ? 10
                : 10
              : isMobile
                ? 10
                : -400,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <AnimatedLogo />
        </motion.div>
      </div>
      <Scroll />
    </div>
  );
};

export default Home;
