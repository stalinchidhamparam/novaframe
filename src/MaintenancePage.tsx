import { Instagram, Mail, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const CleanCameraIntro = () => {
  const [isZooming, setIsZooming] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const dynamicWords = ['Creating', 'Capturing', 'Innovating', 'Designing'];

  useEffect(() => {
    // Start zoom animation
    const zoomTimer = setTimeout(() => {
      setIsZooming(false);
    }, 2000);

    // Show content after zoom
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const socialIcons = [
    {
      icon: <Instagram className="text-pink-500 w-8 h-8" />,
      label: "Instagram",
      handle: "https://www.instagram.com/nova_.frames?igsh=emxxNDd1ODNsdXBo",
      type: "link",
    },
    {
      icon: <Mail className="text-blue-600 w-8 h-8" />,
      label: "Email",
      handle: "mailto:novaframes02@gmail.com",
      type: "link",
    },
    {
      icon: <Phone className="text-green-600 w-8 h-8" />,
      label: "Phone",
      handle: "tel:+919345679266",
      secondaryHandle: "+91 93456 79266 / +91 89402 79776",
      type: "text",
    },
  ];


  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Camera Lens Animation */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-[2000ms] ease-out ${isZooming ? 'scale-100' : 'scale-[50]'
          }`}
      >
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl flex items-center justify-center">

            {/* Middle Ring */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-inner">

              {/* Inner Lens */}
              <div className="w-32 h-32 rounded-full bg-gradient-radial from-blue-950 via-purple-950 to-black relative overflow-hidden">

                {/* Aperture Blades */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${!isZooming ? 'scale-110 opacity-40' : 'opacity-80'
                      }`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="w-full h-full relative">
                      <div
                        className="absolute top-0 left-1/2 w-0.5 bg-gradient-to-b from-gray-500 to-transparent"
                        style={{
                          height: '40%',
                          transformOrigin: 'bottom center',
                          transform: 'translateX(-50%)'
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Central Opening */}
                <div className={`absolute inset-8 rounded-full bg-black/60 transition-all duration-1000 ${!isZooming ? 'scale-50' : 'scale-75'
                  }`} />

                {/* Lens Reflection */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm" />
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-blue-300/20 rounded-full blur-sm" />
              </div>
            </div>

            {/* Brand Text */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
              NOVA FRAMES
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${isZooming ? 'bg-transparent' : 'bg-blue-950'
          }`}
        style={{
          background: isZooming ? 'transparent' : 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.9) 80%)'
        }}
      />

      {/* Main Content */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
      >
        <div className="h-full flex flex-col items-center justify-center text-white px-8 relative z-10">

          {/* Coming Soon Text */}
          <div className="text-center mb-12">
            <h1
              className="glitch text-6xl md:text-8xl font-light mb-4 tracking-tight relative text-white"
              data-text="Coming Soon"
            >
              Coming Soon
            </h1>

            <style>
              {`
    .glitch {
      position: relative;
      color: white;
      text-shadow: 2px 0 red, -2px 0 blue;
    }

    .glitch::before,
    .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: white;
      pointer-events: none;
      opacity: 0.5;
    }

    .glitch::before {
      color: #f0f;
      z-index: -1;
    }

    .glitch::after {
      color: #0ff;
      z-index: -2;
    }
  `}
            </style>
            <div className="text-xl md:text-2xl text-white/70 font-light">
              <span className="inline-block transition-all duration-500">
                {dynamicWords[currentWord]}
              </span>
              <span className="animate-pulse ml-1">the future</span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-64 h-1 bg-white/10 rounded-full mb-16 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"
              style={{ width: '65%' }} />
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.handle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:underline"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center items-center text-3xl mb-3">
                    {item.icon}
                  </div>
                  <div className="text-sm text-white/60 mb-2">{item.label}</div>
                  {item.type === "link" ? (
                    <div className="text-sm font-medium text-white">
                      {item.label === "Email" ? "novaframes02@gmail.com" : "Visit"}
                    </div>
                  ) : (
                    <div className="text-sm font-medium text-white">
                      {item.secondaryHandle}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>




          {/* Footer */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white/40 text-sm">
              Stay tuned for something amazing
            </div>
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      {isZooming && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <span className="font-light">Focusing...</span>
          </div>
        </div>
      )}

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default CleanCameraIntro;