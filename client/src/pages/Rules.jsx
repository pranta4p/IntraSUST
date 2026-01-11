import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Code, AlertTriangle, ArrowLeft } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Rules = () => {
    const pageBgColor = "#053c8fff"; // Global Deep Blue

    return (
        <div className="min-h-screen relative py-20 px-4" style={{ backgroundColor: pageBgColor }}>
            <ParticleBackground />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link to="/" className="text-white hover:text-cyan-300 mb-8 block font-medium">
                    <ArrowLeft size={32} />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Contest Rules</h1>
                    <p className="text-xl text-gray-300">Guidelines for a fair and exciting competition</p>
                </motion.div>

                <div className="grid gap-8">
                    <Section
                        icon={<Clock className="text-cyan-400" size={32} />}
                        title="Timing & Duration"
                        delay={0.2}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                            <li>The contest will run for exactly <strong>4 hours</strong>.</li>
                            <li>Penalty for wrong submission is <strong>20 minutes</strong>.</li>
                            <li>The contest platform will open 30 minutes before the start time.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<Code className="text-green-400" size={32} />}
                        title="Environment"
                        delay={0.3}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                            <li>Allowed languages: C, C++, Java, Python.</li>
                            <li>Internet access is strictly restricted to the contest platform only.</li>
                            <li>No USB drives or external devices allowed.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<AlertTriangle className="text-yellow-400" size={32} />}
                        title="Code of Conduct"
                        delay={0.4}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                            <li>Plagiarism will lead to immediate disqualification.</li>
                            <li>Respect fellow contestants and volunteers.</li>
                            <li>Any attempt to hack the judgment system is prohibited.</li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
};

const Section = ({ icon, title, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
    >
        <div className="flex items-center gap-4 mb-4">
            {icon}
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="text-lg leading-relaxed">
            {children}
        </div>
    </motion.div>
);

export default Rules;
