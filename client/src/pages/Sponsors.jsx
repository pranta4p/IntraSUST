import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft, MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react';

const Sponsors = () => {
    const sponsors = [
        {
            name: "AppifyLab",
            tier: "Platinum",
            color: "text-cyan-400",
            intro: "Appifylab is a leading web and mobile apps development service provider company in Bangladesh.",
            address: "4th Floor, Akther Tower, Madina Market, Sylhet, Bangladesh",
            phone: "01334-921426",
            email: "sadek.hkm@gmail.com",
            website: "https://www.appifylab.com/",
            facebook: "https://www.appifylab.com/"
        },
        {
            name: "CPS Academy",
            tier: "Silver",
            color: "text-gray-300",
            intro: "Choose your path to success. Master competitive programming or land your dream job at top tech companies.",
            address: "A block, Road 3, Chandgaon Residential Area, Chittagong, Bangladesh",
            phone: "01759-261490",
            email: "shahriar@cpsacademy.io",
            website: "https://www.cpsacademy.io/",
            facebook: "https://www.facebook.com/bd.cpsacademy"
        },
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


                {/* Coming Soon Message */}
                <motion.div
                    className="text-center py-32"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Star size={120} className="mx-auto text-cyan-400 mb-8" fill="currentColor" style={{ filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.5))' }} />
                    <h2 className="text-6xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                        Coming Soon!
                    </h2>
                    <p className="text-xl text-cyan-400 font-semibold">
                        Our amazing sponsors will be revealed shortly
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                    <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Sponsors;