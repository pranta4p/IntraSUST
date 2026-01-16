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


                {/* TBA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center p-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                    <Star size={48} className="text-cyan-400 mb-6 opacity-50" />
                    <h2 className="text-3xl font-bold text-white mb-4">Sponsors</h2>
                    <p className="text-xl text-cyan-400/80 font-bold uppercase tracking-widest">
                        To Be Announced
                    </p>
                </motion.div>

                {/* Original Content Hidden */}
                {false && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col items-center justify-center p-6 relative group
                                ${sponsor.intro ? 'lg:col-span-3 md:col-span-2 bg-white/5 rounded-2xl border border-white/10' : 'h-48'}
                            `}
                            >
                                <br></br>
                                {!sponsor.intro && (
                                    <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                )}

                                {/* Icon */}
                                <div className={`${sponsor.intro ? 'mb-4' : 'mb-6'} transform transition-transform duration-300 relative z-10 
                                            ${!sponsor.intro && 'group-hover:scale-125'}`}>
                                    <Star className={sponsor.color} size={sponsor.intro ? 48 : 60} fill="currentColor" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
                                </div>

                                {/* Name & Tier */}
                                <h2 className={`${sponsor.intro ? 'text-4xl' : 'text-3xl'} font-bold text-white mb-2 relative z-10 drop-shadow-md text-center`}>
                                    {sponsor.name}
                                </h2>
                                <p className={`${sponsor.color} font-bold uppercase tracking-widest text-sm relative z-10 mb-4`}>
                                    {sponsor.tier} Partner
                                </p>

                                {/* Expanded Details for Featured Sponsors */}
                                {sponsor.intro && (
                                    <div className="w-full max-w-5xl text-center space-y-8 pt-4">
                                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                            {sponsor.intro}
                                        </p>

                                        {/* INFO SECTION (Address & Phone only) */}
                                        <div className="flex flex-col items-center gap-4 text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={18} className="text-cyan-400 shrink-0" />
                                                <span>{sponsor.address}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone size={18} className="text-cyan-400" />
                                                <span>{sponsor.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail size={18} className="text-cyan-400" />
                                                <span>{sponsor.email}</span>
                                            </div>
                                        </div>
                                        <br></br>
                                        {/* BUTTONS ROW: Website, Facebook */}
                                        {/* changes: gap-8 (more space between), min-w-[180px] (forced width), py-4 (taller) */}
                                        <div className="flex flex-wrap justify-center items-center gap-8 pt-6">

                                            {/* Website Button */}
                                            <a href={sponsor.website} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 px-6 py-4 min-w-[180px] rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all border border-cyan-500/20 font-medium tracking-wide text-lg shadow-lg shadow-cyan-500/10">
                                                <Globe size={20} />
                                                Website
                                            </a>

                                            {/* Facebook Button */}
                                            <a href={sponsor.facebook} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 px-6 py-4 min-w-[180px] rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 transition-all border border-blue-500/20 font-medium tracking-wide text-lg shadow-lg shadow-blue-500/10">
                                                <Facebook size={20} />
                                                Facebook
                                            </a>

                                        </div>
                                        <br></br>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

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