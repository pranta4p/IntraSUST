import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Gift, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrizePool = () => {
    return (
        <div
            className="min-h-screen pt-16 px-4 relative font-mono"
        >

            <div className="max-w-5xl mx-auto relative z-10">

                <Link
                    to="/"
                    className="text-cyan-400 hover:text-white mb-6 block"
                >
                    <ArrowLeft size={32} />
                </Link>

                {/* Title */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        Prize Pool
                    </h1>
                    <p className="text-cyan-500 font-bold mt-2">Intra SUST Programming Contest - 2026</p>
                </motion.div>

                {/* 🏆 PODIUM - Unboxed / Glowing Borders */}
                <div className="flex flex-wrap justify-center items-end gap-4 mb-16">

                    {/* 🥈 2nd */}
                    <motion.div
                        className="w-44 p-4 text-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        <Award size={40} className="mx-auto text-gray-300 mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                        <h3 className="text-lg font-semibold text-white drop-shadow-md">
                            2nd Place
                        </h3>
                        <p className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">
                            ৳5,000
                        </p>
                    </motion.div>

                    {/* 🥇 1st */}
                    <motion.div
                        className="w-52 p-5 text-center -translate-y-8"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >

                        <Trophy
                            size={56}
                            className="mx-auto text-yellow-400 mb-4 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]"
                        />

                        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                            1st Place
                        </h3>
                        <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]">
                            ৳10,000
                        </p>
                    </motion.div>

                    {/* 🥉 3rd */}
                    <motion.div
                        className="w-44 p-4 text-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Award size={40} className="mx-auto text-amber-600 mb-2 drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
                        <h3 className="text-lg font-semibold text-white drop-shadow-md">
                            3rd Place
                        </h3>
                        <p className="text-2xl font-bold text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]">
                            ৳2,500
                        </p>
                    </motion.div>
                </div>

                {/* 🏅 4th & 5th - Minimal */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mx-auto mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {[4, 5].map((place) => (
                        <div
                            key={place}
                            className="px-4 py-3 flex items-center justify-between border-b border-white/20"
                        >
                            <div className="flex items-center gap-2">
                                <Medal size={20} className="text-cyan-400" />
                                <h4 className="text-lg font-semibold text-white">
                                    {place}th Place
                                </h4>
                            </div>

                            <p className="text-xl font-bold text-cyan-300">
                                ৳1,000
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* 🎁 Info */}
                <motion.div
                    className="text-center p-5 max-w-lg mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                >
                    <Gift size={32} className="mx-auto text-purple-400 mb-4 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
                    <h3 className="text-lg font-bold text-white mb-2">
                        Final Round Perks
                    </h3>
                    <p className="text-base text-gray-300">
                        Every finalist receives an exclusive event T-shirt, Snacks and other exciting gifts.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrizePool;
