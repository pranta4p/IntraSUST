import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Code, AlertTriangle, ArrowLeft } from 'lucide-react';

const Rules = () => {
    return (
        <div className="min-h-screen relative py-20 px-4 font-mono">

            <div className="max-w-4xl mx-auto relative z-10">
                <Link to="/" className="text-cyan-400 hover:text-white mb-8 block font-medium">
                    <ArrowLeft size={32} />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Contest Rules</h1>
                    <p className="text-xl text-cyan-500 font-bold">Intra SUST Programming Contest - 2026</p>
                </motion.div>

                <div className="grid gap-12">
                    <Section
                        icon={<Clock className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" size={40} />}
                        title="Timing & Duration"
                        delay={0.2}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>The contest will run for exactly <strong className="text-white">4 hours</strong>.</li>
                            <li>Penalty for wrong submission is <strong className="text-white">20 minutes</strong>.</li>
                            <li>The contest platform will open 30 minutes before the start time.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<Code className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" size={40} />}
                        title="Environment"
                        delay={0.3}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>Allowed languages: C, C++, Java, Python.</li>
                            <li>Internet access is <strong className="text-red-400">strictly restricted</strong> to the contest platform only.</li>
                            <li>No USB drives or external devices allowed.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<AlertTriangle className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" size={40} />}
                        title="Code of Conduct"
                        delay={0.4}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>Plagiarism will lead to <strong className="text-red-400">immediate disqualification</strong>.</li>
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
        className="mb-8"
    // Unboxed: removed bg-white/10, border, shadow
    >
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-2">
            {icon}
            <h2 className="text-3xl font-bold text-white drop-shadow-md">{title}</h2>
        </div>
        <div className="leading-relaxed pl-2 border-l-2 border-cyan-500/20">
            {children}
        </div>
    </motion.div>
);

export default Rules;
