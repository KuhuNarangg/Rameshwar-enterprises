"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VideoSection = ({ videoId, videoSrc, title, subtitle }) => {
    const ref = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isInView = useInView(ref, { amount: 0.3 });

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section ref={ref} className="py-24 bg-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-200 blur-[150px]" />
                <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-200 blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {title && <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-6 tracking-tight">{title}</h2>}
                    {subtitle && <p className="text-emerald-800 max-w-2xl mx-auto text-lg">{subtitle}</p>}
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800 bg-black max-w-4xl w-full aspect-video group"
                    >
                        {videoSrc ? (
                            <>
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    src={videoSrc}
                                    playsInline
                                    loop
                                // onClick={togglePlay} // Optional: click video to toggle
                                />
                                {/* Custom Play Button Overlay */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                                >
                                    <button
                                        onClick={togglePlay}
                                        className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-all transform hover:scale-110"
                                    >
                                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                                    </button>
                                </div>
                            </>
                        ) : (
                            /* YouTube Embed Fallback */
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&controls=1`}
                                title="Biodiesel Process Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
