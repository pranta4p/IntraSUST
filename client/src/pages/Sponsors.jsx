import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Sponsors = () => {
    const pageBgColor = "#053c8fff"; // Global Deep Blue

    const sponsors = [
        { name: "Tech Giant Corp", tier: "Platinum", color: "text-cyan-400" },
        { name: "Innovate Labs", tier: "Gold", color: "text-yellow-400" },
        { name: "Cloud Systems", tier: "Silver", color: "text-gray-300" },
        { name: "Future Code", tier: "Silver", color: "text-gray-300" },
        { name: "Dev Solutions", tier: "Bronze", color: "text-orange-400" },
        { name: "Pixel Studio", tier: "Bronze", color: "text-orange-400" },
    ];

    return (
        <div className="min-h-screen relative py-20 px-4" style={{ backgroundColor: pageBgColor }}>
            <ParticleBackground />

            <div className="max-w-6xl mx-auto relative z-10">
                <Link to="/" className="text-white hover:text-cyan-300 mb-8 block font-medium">
                    <ArrowLeft size={32} />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Sponsors</h1>
                    <p className="text-xl text-gray-300">Powering the next generation of coders</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center h-64 hover:bg-white/20 transition-colors shadow-xl group"
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                                    <Star className={sponsor.color} size={40} fill="currentColor" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h2>
                            <p className={`${sponsor.color} font-bold uppercase tracking-widest text-sm`}>{sponsor.tier} Partner</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                    <a href="mailto:sponsor@intrasust.com" className="text-neon-green font-bold hover:underline text-lg">Contact Us</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Sponsors;
