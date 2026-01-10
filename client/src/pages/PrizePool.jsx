import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Gift, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrizePool = () => {
    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="text-neon-green hover:underline mb-8 block">&larr; Back to Home</Link>

                <motion.h1
                    className="text-5xl font-bold mb-12 text-center neon-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Prize Pool
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* 1st Place */}
                    <motion.div
                        className="glass-card p-8 rounded-2xl border-neon-green/50 flex flex-col items-center relative order-1 md:order-2 transform md:-translate-y-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute -top-6 bg-neon-green text-dark-bg px-4 py-1 rounded-full font-bold">CHAMPION</div>
                        <Trophy size={80} className="text-yellow-400 mb-6" />
                        <h2 className="text-3xl font-bold mb-2">1st Place</h2>
                        <p className="text-4xl font-bold text-neon-green mb-4">৳10,000</p>
                        <ul className="text-gray-300 text-center space-y-2">
                            <li>Champion Trophy</li>
                            <li>Certificate of Excellence</li>
                            <li>Exclusive Swag Kit</li>
                        </ul>
                    </motion.div>

                    {/* 2nd Place */}
                    <motion.div
                        className="glass-card p-8 rounded-2xl flex flex-col items-center order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Award size={60} className="text-gray-300 mb-6" />
                        <h2 className="text-2xl font-bold mb-2">2nd Place</h2>
                        <p className="text-3xl font-bold text-neon-green mb-4">৳7,000</p>
                        <ul className="text-gray-400 text-center space-y-2">
                            <li>Runner-up Crest</li>
                            <li>Certificate</li>
                            <li>Swag Kit</li>
                        </ul>
                    </motion.div>

                    {/* 3rd Place */}
                    <motion.div
                        className="glass-card p-8 rounded-2xl flex flex-col items-center order-3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Award size={60} className="text-amber-600 mb-6" />
                        <h2 className="text-2xl font-bold mb-2">3rd Place</h2>
                        <p className="text-3xl font-bold text-neon-green mb-4">৳5,000</p>
                        <ul className="text-gray-400 text-center space-y-2">
                            <li>2nd Runner-up Crest</li>
                            <li>Certificate</li>
                            <li>Swag Kit</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center p-8 glass-card rounded-xl max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Gift className="mx-auto text-neon-green mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2">Top 10 Teams</h3>
                    <p className="text-gray-400">
                        Will receive honorable mention certificates and t-shirts. All participants will get digital participation certificates.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrizePool;
