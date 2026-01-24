import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const Schedule = () => {
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
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Schedule & Timing</h1>
                    <p className="text-xl text-cyan-500 font-bold">Intra SUST Programming Contest - 2026</p>
                </motion.div>

                <div className="grid gap-8">
                    {/* 1st Preliminary */}
                    <EventCard
                        title="1st Preliminary Contest"
                        date="24 January 2026"
                        time="10:00 AM - 1:00 PM"
                        delay={0.2}
                    />

                    {/* 2nd Preliminary */}
                    <EventCard
                        title="2nd Preliminary Contest"
                        date="25 January 2026"
                        time="2:00 PM - 5:00 PM"
                        delay={0.3}
                    />

                    {/* Final Contest */}
                    <EventCard
                        title="Final Contest"
                        date="31 January 2026"
                        time="10:00 AM - 2:00 PM"
                        delay={0.4}
                        isFinal={true}
                    />
                </div>
            </div>
        </div>
    );
};

const EventCard = ({ title, date, time, delay, isFinal }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className={`relative p-6 rounded-2xl border ${isFinal ? 'border-purple-500/50 bg-purple-900/10' : 'border-cyan-500/30 bg-cyan-900/10'} backdrop-blur-sm`}
    >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h2 className={`text-2xl font-bold mb-2 ${isFinal ? 'text-purple-300' : 'text-cyan-300'}`}>{title}</h2>
                <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className={isFinal ? 'text-purple-400' : 'text-cyan-400'} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>

            <div className={`px-6 py-2 rounded-full font-bold text-lg flex items-center gap-2 
                ${isFinal ? 'bg-purple-500/20 text-purple-200' : 'bg-cyan-500/20 text-cyan-200'}`}>
                <Clock size={20} />
                {time}
            </div>
        </div>
    </motion.div>
);

export default Schedule;
