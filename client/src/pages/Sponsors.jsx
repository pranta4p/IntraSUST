import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowLeft, MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react';

import cpsLogo from '../assets/sponsors/cps_academy_logo.png';
import oneIeltsLogo from '../assets/sponsors/one_ielts_logo.png';
import authLabLogo from '../assets/sponsors/authlab.png';
import technextLogo from '../assets/sponsors/technext.png';

const Sponsors = () => {
    const sponsors = [
        {
            name: "CPS Academy",
            image: cpsLogo,
            intro: "Choose your path to success. Master competitive programming or land your dream job at top tech companies.",
            address: "A block, Road 3, Chandgaon Residential Area, Chittagong, Bangladesh",
            phone: "01759-261490",
            email: "shahriar@cpsacademy.io",
            website: "https://www.cpsacademy.io/",
            facebook: "https://www.facebook.com/bd.cpsacademy"
        },
        {
            name: "One IELTS",
            image: oneIeltsLogo,
            intro: "Free IELTS Computer Based Mock Tests — Practice Online",
            address: "Jail Road, Sylhet, Bangladesh",
            phone: "01345-236404",
            email: "contact.oneielts@gmail.com",
            website: "https://oneielts.com",
            facebook: "https://www.facebook.com/oneieltspractice"
        },
        {
            name: "AuthLab",
            image: authLabLogo,
            intro: "AuthLab is a global technology firm aiming to decimate the line between your business idea and it’s actualization.",
            address: "24/A, Shah Farid Rd, Jalalabad R/A, Sylhet, Bangladesh",
            phone: "01979-791001",
            email: "hello@authlab.io",
            website: "https://authlab.io",
            facebook: "https://www.facebook.com/authLab"
        },
        {
            name: "Technext Limited",
            image: technextLogo,
            intro: "Technext Limited, the parent company of MailBluster, ThemeWagon and Graduate Network. Technext develops excellent products with top-notch customer service. For achieving that excellence, they’ve committed and engaged people in their team.",
            address: "14th floor, Rupayan Shelford, 23/6 Mirpur Rd, Shyamoli, Dhaka, Bangladesh",
            phone: "+1 302 433 6002",
            email: "info@technext.it",
            website: "https://technext.it",
            facebook: "https://www.facebook.com/TechnextLimited"
        }
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


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/50 transition-colors group text-center"
                        >'
                            {
                                <br></br>
                            }
                            {sponsor.image && (
                                <div className="mb-6 mt-4 flex justify-center">
                                    <img
                                        src={sponsor.image}
                                        alt={`${sponsor.name} logo`}
                                        className="w-auto object-contain hover:scale-105 transition-transform duration-300"
                                        style={{ height: '55px' }}
                                    />
                                </div>
                            )}
                            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{sponsor.name}</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">{sponsor.intro}</p>

                            <div className="space-y-3 text-sm text-gray-400 flex flex-col items-center">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-cyan-500 shrink-0" />
                                    <span>{sponsor.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={18} className="text-cyan-500 shrink-0" />
                                    <span>{sponsor.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={18} className="text-cyan-500 shrink-0" />
                                    <a href={`mailto:${sponsor.email}`} className="text-[#41F085] hover:text-white transition-colors">{sponsor.email}</a>
                                </div>
                            </div>

                            <div className="flex justify-center gap-6 mt-8">
                                <a
                                    href={sponsor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#41F085] hover:text-white transition-colors font-bold"
                                >
                                    <Globe size={20} />
                                    <span>Website</span>
                                </a>
                                <a
                                    href={sponsor.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#41F085] hover:text-white transition-colors font-bold"
                                >
                                    <Facebook size={20} />
                                    <span>Facebook</span>
                                </a>
                            </div>
                            {
                                <br></br>
                                /* <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                                <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a> */
                            }
                            {
                                <br></br>
                                /* <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                                <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a> */
                            }
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    {
                        <br></br>
                        /* <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                        <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a> */
                    }
                    {
                        <br></br>
                        /* <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                        <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a> */
                    }
                    {
                        <br></br>
                        /* <p className="text-gray-400 text-lg">Interested in sponsoring?</p>
                        <a href="mailto:ismailfaiyaz111@gmail.com" className="text-cyan-400 font-bold hover:text-white text-lg transition-colors">Contact Us</a> */
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Sponsors;