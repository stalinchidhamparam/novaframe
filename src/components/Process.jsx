import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
// replace these with your actual images
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpeg'
import work3 from '../assets/work3.jpeg'
import work4 from '../assets/work4.jpeg'

const processSteps = [
  {
    title: 'Discovery',
    description: 'We dive deep into understanding your brand, goals, and target audience.',
  },
  {
    title: 'Strategy',
    description: 'We develop a comprehensive strategy tailored to your unique needs.',
  },
  {
    title: 'Creation',
    description: 'Our team brings your vision to life with cutting-edge design and development.',
  },
  {
    title: 'Launch & Optimize',
    description: 'We launch your project and continuously optimize for better results.',
  },
]

const images = [work2, work3, work4, work1]

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.95,
  }),
}

const AUTO_PAGINATE_INTERVAL = 4000 // 4 seconds

const Process = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const imageIndex = ((page % images.length) + images.length) % images.length

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection])
  }

  useEffect(() => {
    if (isPaused) return

    intervalRef.current = window.setInterval(() => {
      paginate(1)
    }, AUTO_PAGINATE_INTERVAL)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="bg-black">
      <motion.section
        className="py-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-white font-extrabold tracking-wide">
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
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Carousel side */}
            <motion.div
              className="relative"
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute -inset-4 rounded-2xl blur-xl bg-gradient-to-r from-black to-black opacity-30"></div>

              <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={page}
                    src={images[imageIndex]}
                    alt={`Carousel image ${imageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    draggable={false}
                    style={{ filter: 'grayscale(100%)', willChange: 'transform, opacity' }}
                  />
                </AnimatePresence>

                {/* Previous / Next controls */}
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <button
                    aria-label="Previous image"
                    onClick={() => paginate(-1)}
                    className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={() => paginate(1)}
                    className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Dots / indicators */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to image ${idx + 1}`}
                      onClick={() => {
                        const diff = idx - imageIndex
                        if (diff !== 0) paginate(diff)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === imageIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Process
