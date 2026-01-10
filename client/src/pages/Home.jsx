import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Trophy, Users } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-text tracking-tighter">
                    INTRA SUST
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                    The Annual Programming Contest by SUST CSE Society.
                    <br />
                    <span className="text-neon-green font-mono">Compete. Code. Conquer.</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6"
            >
                <Link
                    to="/register"
                    className="group relative px-8 py-4 bg-neon-green text-dark-bg font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Code2 size={24} /> Register Now
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </Link>
                <Link
                    to="/prizepool"
                    className="group relative px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold text-lg rounded-full overflow-hidden hover:bg-neon-green/10 transition-colors"
                >
                    <span className="flex items-center gap-2">
                        <Trophy size={24} /> Prize Pool
                    </span>
                </Link>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
                {[
                    { icon: <Code2 size={40} />, title: "3 Hours", desc: "Non-stop coding action" },
                    { icon: <Users size={40} />, title: "Teams", desc: "Collaborate and win" },
                    { icon: <Trophy size={40} />, title: "Prizes", desc: "Exciting rewards for winners" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="glass-card p-6 rounded-xl flex flex-col items-center"
                    >
                        <div className="text-neon-green mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;
