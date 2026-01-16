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


                {/* Coming Soon Message */}
                <motion.div
                    className="text-center py-32"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Trophy size={120} className="mx-auto text-cyan-400 mb-8" style={{ filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.5))' }} />
                    <h2 className="text-6xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                        Coming Soon!
                    </h2>
                    <p className="text-xl text-cyan-400 font-semibold">
                        Prize pool details will be announced shortly
                    </p>
                </motion.div>


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
