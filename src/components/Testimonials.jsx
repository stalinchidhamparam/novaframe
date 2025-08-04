import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';
import Liza from '../assets/testmonials/Liza.mp4';
import LizaLogo from '../assets/clients/liza.png';
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Vrithi Victoria",
      role: "Founder",
      company: "LizaFashions",
      image: LizaLogo,
      videoUrl: Liza,
      rating: 5,
      text: "They truly understood our brand and brought it to life beautifully through the website. The design is clean, elegant, and easy to navigate — just what we needed for our customers. We loved how supportive and creative the team was throughout the process. It’s been a great experience working with them!",
      highlight: "Exceptional Working Experience"
    },
  ];


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setPlayingVideo(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPlayingVideo(null);
  };

  const playVideo = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            Testimonials
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto px-4">
            Hear what our amazing clients have to say about their experience working with us
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-black rounded-3xl shadow-2xl overflow-hidden mb-12 border border-blue-500/20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-center">
            {/* Video/Image Section */}
            <div className="relative bg-gray-800 p-4 sm:p-8 lg:p-12 flex items-center justify-center w-full">
              <div className="relative">
                {playingVideo === currentTestimonial.videoUrl ? (
                  <div className="w-60 h-[426px] sm:w-72 sm:h-[480px] lg:w-80 lg:h-[568px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400">
                    <video
                      src={currentTestimonial.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      controls
                      controlsList="nodownload nofullscreen noremoteplayback"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                    />

                  </div>
                ) : (
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => playVideo(currentTestimonial.videoUrl)}
                  >
                    <div className="w-60 h-[426px] sm:w-72 sm:h-[480px] lg:w-80 lg:h-[568px] rounded-2xl overflow-hidden border-4 border-blue-400 shadow-2xl bg-gray-900">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-opacity-20 rounded-2xl transition-all duration-300 flex items-center justify-center">
                      <div className="bg-red-600 bg-opacity-90 p-4 sm:p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-black w-full">
              <div className="mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mb-3 sm:mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {currentTestimonial.highlight}
                </h2>
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="border-t border-gray-700 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-white text-base sm:text-lg">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-blue-300 text-sm sm:text-base">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPlayingVideo(null);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;