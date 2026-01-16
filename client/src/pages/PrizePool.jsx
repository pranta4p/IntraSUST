import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Gift, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrizePool = () => {
    return (
        <div className="min-h-screen pt-16 px-4 relative font-mono">

            <div className="w-full max-w-7xl mx-auto relative z-10">

                {/* Back */}
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
                    <h1 className="text-4xl font-bold text-cyan-400">
                        Prize Pool
                    </h1>
                    <p className="text-cyan-300 font-bold mt-2">
                        Intra SUST Programming Contest - 2026
                    </p>
                </motion.div>

                {/* TBA Section */}
                <motion.div
                    className="flex flex-col items-center justify-center py-20 bg-cyan-900/10 backdrop-blur-md border border-cyan-500/30 rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Trophy size={64} className="text-cyan-400 mb-6 opacity-50" />
                    <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">
                        Prize Pool
                    </h2>
                    <p className="text-xl text-cyan-100/80 font-bold tracking-widest uppercase">
                        Coming Soon
                    </p>
                </motion.div>

                {/* Original Content Hidden */}
                {false && (
                    <>
                        <motion.div>
                            <br>
                            </br>
                            <br>
                            </br>
                            <br>
                            </br>
                        </motion.div>

                        {/* 🏆 PODIUM */}
                        <div className="grid grid-cols-3 gap-x-28 justify-items-center mb-16">

                            {/* 🥈 2nd */}
                            <motion.div
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                <Award size={56} className="text-cyan-400 mb-3" />
                                <p className="text-lg font-semibold text-cyan-300">
                                    2nd Place
                                </p>
                                <p className="text-xl font-bold text-cyan-400">
                                    ৳5,000
                                </p>
                            </motion.div>

                            {/* 🥇 1st */}
                            <motion.div
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Trophy
                                    size={80}
                                    className="text-yellow-400 mb-3"
                                />
                                <p className="text-xl font-bold text-yellow-300">
                                    1st Place
                                </p>
                                <p className="text-3xl font-extrabold text-yellow-400">
                                    ৳10,000
                                </p>
                            </motion.div>

                            {/* 🥉 3rd */}
                            <motion.div
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Award size={56} className="text-cyan-400 mb-3" />
                                <p className="text-lg font-semibold text-cyan-300">
                                    3rd Place
                                </p>
                                <p className="text-xl font-bold text-cyan-400">
                                    ৳2,500
                                </p>
                            </motion.div>
                        </div>

                        <motion.div>
                            <br></br>
                            <br></br>
                            <br></br>
                        </motion.div>


                        {/* 🏅 4th & 5th */}
                        <motion.div
                            className="flex flex-col items-center gap-4 mb-16"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { place: 4, amount: "2,000" },
                                { place: 5, amount: "1,800" },
                                { place: 6, amount: "1,500" },
                                { place: 7, amount: "1,300" },
                                { place: 8, amount: "1,200" },
                                { place: 9, amount: "1,000" },
                                { place: 10, amount: "500" },
                            ].map((prize) => (
                                <div
                                    key={prize.place}
                                    className="w-[750px] max-w-full px-6 py-4 flex items-center justify-between
                        border border-cyan-500/30 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <Medal size={22} className="text-cyan-400" />
                                        <h4 className="text-lg font-semibold text-cyan-300">
                                            {prize.place}th Place
                                        </h4>
                                    </div>

                                    <p className="text-xl font-bold text-cyan-400">
                                        ৳{prize.amount}
                                    </p>
                                </div>
                            ))}
                        </motion.div>



                        <motion.div>
                            <br></br>
                            <br></br>
                            <br></br>
                        </motion.div>

                        {/* 🎁 Info */}
                        <motion.div
                            className="text-center p-5 max-w-lg mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75 }}
                        >
                            <Gift size={32} className="mx-auto text-purple-400 mb-4" />
                            <h3 className="text-lg font-bold text-cyan-300 mb-2">
                                Final Round Perks
                            </h3>
                            <p className="text-base text-gray-300">
                                Every finalist receives an exclusive event T-shirt, snacks and other exciting gifts.
                            </p>
                        </motion.div>
                    </>
                )}


                <motion.div>
                    <br></br>
                    <br></br>
                    <br></br>
                </motion.div>

            </div>
        </div>
    );
};

export default PrizePool;
