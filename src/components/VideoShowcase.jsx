import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import vastiram from '../assets/videos/vastiram.mp4';
import yasho from '../assets/videos/yasho.mp4';
import trading from '../assets/videos/trading.mp4';
import merryberry from '../assets/videos/merryberry.mp4';

const testimonials = [
    {
        id: 1,
        name: 'Vasthiram',
        title: 'Reels',
        video: vastiram,
    },
    {
        id: 2,
        name: 'Merry Berry',
        title: 'Franchise',
        video: merryberry,
    },
    {
        id: 3,
        name: 'Market Scale Trading',
        title: 'Trading Academy',
        video: trading,
    },
    {
        id: 4,
        name: 'Yasho Jwellers',
        title: 'Reels',
        video: yasho,
    },
];


const VideoShowcase = () => {
    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState({});
    const [isMuted, setIsMuted] = useState({});

    const togglePlay = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
                setIsPlaying(prev => ({ ...prev, [i]: false }));
            }
        });

        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
                setActiveIndex(index);
                setIsPlaying(prev => ({ ...prev, [index]: true }));
            } else {
                video.pause();
                setActiveIndex(null);
                setIsPlaying(prev => ({ ...prev, [index]: false }));
            }
        }
    };

    const toggleMute = (index, e) => {
        e.stopPropagation();
        const video = videoRefs.current[index];
        if (video) {
            const newMutedState = !video.muted;
            video.muted = newMutedState;
            setIsMuted(prev => ({ ...prev, [index]: newMutedState }));
        }
    };

    return (
        <section className="bg-black min-h-screen py-16 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-20 grid-rows-20 gap-px h-full">
                    {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="bg-blue-500/20 rounded-full"></div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                        Sample Work
                    </h1>
                    <p className="text-blue-200/70 text-lg mt-6 max-w-2xl mx-auto">
                        Discover our creative excellence through these stunning video showcases
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {testimonials.map((person, index) => (
                        <div
                            key={person.id}
                            className="group relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 w-full max-w-xs"
                        >
                            <div className="relative w-full aspect-[3/5] overflow-hidden">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    preload="metadata"
                                    onLoadedData={() => {
                                        const video = videoRefs.current[index];
                                        if (video) {
                                            video.currentTime = 0; // freeze at the first frame
                                            video.pause(); // ensure it's not playing
                                            setIsMuted(prev => ({ ...prev, [index]: video.muted }));
                                        }
                                    }}
                                >
                                    <source src={person.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>


                                {/* Play/Pause Overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                    onClick={() => togglePlay(index)}
                                >
                                    <div className="bg-blue-500/90 backdrop-blur-sm rounded-full p-6 transform scale-100 hover:scale-110 transition-transform duration-200">
                                        {isPlaying[index] ? (
                                            <Pause size={32} className="text-white" />
                                        ) : (
                                            <Play size={32} className="text-white ml-1" />
                                        )}
                                    </div>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Person Info */}
                            <div className="absolute bottom-6 left-6 text-white z-10">
                                <h3 className="text-xl font-bold mb-1 text-blue-100">{person.name}</h3>
                                <p className="text-sm text-blue-200/80 font-medium">{person.title}</p>
                            </div>

                            {/* Playing Indicator */}
                            {activeIndex === index && (
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                                    PLAYING
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
