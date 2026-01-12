import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';

const Sponsors = () => {
    const sponsors = [
        { name: "Tech Giant Corp", tier: "Platinum", color: "text-cyan-400" },
        { name: "Innovate Labs", tier: "Gold", color: "text-yellow-400" },
        { name: "Cloud Systems", tier: "Silver", color: "text-gray-300" },
        { name: "Future Code", tier: "Silver", color: "text-gray-300" },
        { name: "Dev Solutions", tier: "Bronze", color: "text-orange-400" },
        { name: "Pixel Studio", tier: "Bronze", color: "text-orange-400" },
    ];

    return (
        <div className="min-h-screen relative py-20 px-4 font-mono">

            <div className="max-w-6xl mx-auto relative z-10">
                <Link to="/" className="text-cyan-400 hover:text-white mb-8 block font-medium">
                    <ArrowLeft size={32} />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Our Sponsors</h1>
                    <p className="text-xl text-cyan-500 font-bold">Intra SUST Programming Contest - 2026</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center h-48 group relative"
                        // Unboxed: Removed bg, border. Added minimal hover glow
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="mb-6 transform group-hover:scale-125 transition-transform duration-300 relative z-10">
                                <Star className={sponsor.color} size={60} fill="currentColor" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2 relative z-10 drop-shadow-md">{sponsor.name}</h2>
                            <p className={`${sponsor.color} font-bold uppercase tracking-widest text-sm relative z-10`}>{sponsor.tier} Partner</p>
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
                    <a href="mailto:sponsor@intrasust.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Sponsors;
