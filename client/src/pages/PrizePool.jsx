import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Gift, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const PrizePool = () => {
    const pageBgColor = "#053c8fff"; // Global Deep Blue

    return (
        <div
            className="min-h-screen pt-16 px-4 relative"
            style={{ backgroundColor: pageBgColor }}
        >
            <ParticleBackground />

            <div className="max-w-5xl mx-auto relative z-10">

                <Link
                    to="/"
                    className="text-white hover:text-cyan-300 mb-6 block"
                >
                    <ArrowLeft size={32} />
                </Link>

                {/* Title */}
                <motion.h1
                    className="text-4xl font-bold mb-14 text-center text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Prize Pool
                </motion.h1>

                {/* 🏆 PODIUM */}
                <div className="flex flex-wrap justify-center items-end gap-4 mb-16">
                    {/* gap-4 ≈ 1cm */}

                    {/* 🥈 2nd */}
                    <motion.div
                        className="w-44 p-4 rounded-xl bg-white/10 backdrop-blur-md
                                   border border-white/20 text-center shadow-xl"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        <Award size={32} className="mx-auto text-gray-300 mb-2" />
                        <h3 className="text-base font-semibold text-white">
                            2nd Place
                        </h3>
                        <p className="text-xl font-bold text-gray-200">
                            ৳5,000
                        </p>
                    </motion.div>

                    {/* 🥇 1st */}
                    <motion.div
                        className="w-52 p-5 rounded-2xl bg-white/15 backdrop-blur-lg
                                   border-2 border-yellow-400/60 text-center shadow-2xl
                                   -translate-y-8"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="inline-block mb-2 px-4 py-0.5
                                         rounded-full bg-yellow-400 text-black
                                         text-[11px] font-bold tracking-wide">
                            CHAMPION
                        </span>

                        <Trophy
                            size={44}
                            className="mx-auto text-yellow-400 mb-2 drop-shadow-md"
                        />

                        <h3 className="text-lg font-bold text-white">
                            1st Place
                        </h3>
                        <p className="text-2xl font-extrabold text-yellow-300">
                            ৳10,000
                        </p>
                    </motion.div>

                    {/* 🥉 3rd */}
                    <motion.div
                        className="w-44 p-4 rounded-xl bg-white/10 backdrop-blur-md
                                   border border-white/20 text-center shadow-xl"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Award size={32} className="mx-auto text-amber-400 mb-2" />
                        <h3 className="text-base font-semibold text-white">
                            3rd Place
                        </h3>
                        <p className="text-xl font-bold text-amber-400">
                            ৳2,500
                        </p>
                    </motion.div>
                </div>

                {/* 🏅 4th & 5th (Compact) */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3
                               max-w-sm mx-auto mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {[4, 5].map((place) => (
                        <div
                            key={place}
                            className="px-4 py-3 rounded-md bg-white/10
                                       backdrop-blur-md border border-white/10
                                       flex items-center justify-between shadow-lg"
                        >
                            <div className="flex items-center gap-2">
                                <Medal size={18} className="text-cyan-300" />
                                <h4 className="text-sm font-semibold text-white">
                                    {place}th Place
                                </h4>
                            </div>

                            <p className="text-sm font-bold text-white">
                                ৳1,000
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* 🎁 Info */}
                <motion.div
                    className="text-center p-5 bg-white/10 backdrop-blur-md
                               rounded-xl max-w-lg mx-auto border border-white/10 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                >
                    <Gift size={28} className="mx-auto text-yellow-300 mb-2" />
                    <h3 className="text-base font-bold text-white mb-1">
                        Final Round Perks
                    </h3>
                    <p className="text-sm text-gray-200">
                        Every finalist receives an exclusive event T-shirt.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrizePool;
