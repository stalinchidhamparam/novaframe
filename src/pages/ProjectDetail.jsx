import { useState, useEffect } from 'react';
import { ChevronLeft, ExternalLink, Calendar, Tag, ArrowUp, Quote, Link } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { fetchProjects } from '../utils/service';
import AnimatedLoading from '../stocks/AnimatedLoading';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    loadProjects();
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const projectData = await fetchProjects();
      setProjects(projectData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
    setLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <AnimatedLoading />;

  if (!project) return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <p>Project not found</p>
    </div>
  );

  const { title, year, category, descriptionOne, descriptionTwo, images, link, review } = project;

  return (
    <div className="text-white font-sans bg-black min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-20 left-6 z-50 flex items-center gap-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Back</span>
      </button>


      {/* Hero Section */}
      <FadeInSection className='m-10'>
        {images?.[0] && (
          <motion.div
            className="w-full bg-cover bg-center flex flex-col items-end justify-between gap-6 px-4 sm:px-6 md:px-10 pb-8 md:pb-10 relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:min-h-[90vh]"
            style={{ backgroundImage: `url("${images[0]}")` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

            <div className="relative z-10 w-full flex flex-col items-start justify-end h-full">
              <div className="text-white w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight sm:leading-snug">
                  {title}
                </h1>
                <p className="text-gray-200 text-base sm:text-lg md:text-xl">
                  {category} • {year}
                </p>
              </div>

              <div className="w-full mt-6 sm:mt-8">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium sm:font-semibold px-6 py-3 text-sm sm:text-base rounded-full transition-all duration-300 text-center w-full sm:w-auto"
                >
                  Visit Work <ExternalLink className="inline ml-1" size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </FadeInSection>

      {/* About Section */}
      <FadeInSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-white">
            Description
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-loose">
            {descriptionOne}
          </p>
        </div>
      </FadeInSection>

      {/* Single Image Sections */}
      {images.slice(1, 2).map((img, idx) => (
        <FadeInSection key={idx} className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img}
              alt={`Showcase ${idx}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </FadeInSection>
      ))}

      {/* Split Image Section */}
      <FadeInSection className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {images.slice(2, 4).map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      {/* More Description */}
      <FadeInSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-loose">
            {descriptionTwo}
          </p>
        </div>
      </FadeInSection>

      <div className="mt-8 flex justify-center">
        <motion.button
          className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { navigate('/portfolio') }}
        >
          View All Projects
        </motion.button>
      </div>


      {/* Testimonial */}
      <FadeInSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto text-blue-500 mb-4" size={32} />
          <blockquote className="text-lg sm:text-xl md:text-2xl italic text-blue-400">
            "{review}"
          </blockquote>
        </div>
      </FadeInSection>

      {/* Footer CTA */}
      <FadeInSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Ready to start your project?
          </h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300"
          >
            Get Started Now
          </a>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ProjectDetail;