import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Code2,
    Trophy,
    BookOpen,
    Handshake,
    Zap,
} from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const Home = () => {
    /* ===== Theme ===== */
    const pageBgColor = "#053c8fff";
    const buttonBgColor = "#02021bff";
    const buttonTextColor = "#053c8fff";
    const borderColor = "#ffffff";

    /* ===== Button Animation ===== */
    const floatingVariant = (delay) => ({
        animate: {
            y: [0, -5, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }
        }
    });

    return (
        <div
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4"
            style={{ backgroundColor: pageBgColor }}
        >
            {/* ❄️ Reusable Particle Background */}
            <ParticleBackground />

            <div className="relative z-10 w-full max-w-[1800px] flex flex-col items-center pointer-events-auto">
                {/* ===== HERO ===== */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32"
                >
                    {/* Badge */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-12"
                    >
                        <span className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white/10 border border-white/40 text-blue-100 font-mono backdrop-blur-md shadow-lg">
                            <Zap size={40} className="text-yellow-400" />
                            <span className="text-4xl md:text-xl font-bold tracking-wider">INTRA SUST 2026</span>
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tight">
                        <span className="block md:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 drop-shadow-sm">
                            {" "}VERSE
                        </span>
                    </h1>

                    {/* Welcome Slogan */}
                    <div className="max-w-6xl mx-auto space-y-8">
                        <p className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
                            Do you love coding and problem solving?
                        </p>

                        <p className="text-2xl md:text-3xl text-blue-200 font-medium">
                            Then what are you waiting for?
                        </p>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pt-6"
                        >
                            <span className="text-3xl md:text-4xl font-black text-cyan-300 uppercase tracking-widest drop-shadow-lg filter brightness-125">
                                Register for INTRA SUST 2026
                                <div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ===== BUTTONS ===== */}
                <div
                    className="flex justify-center items-center flex-wrap w-full"
                    style={{ gap: '100px' }}
                >
                    <NavCard
                        to="/register"
                        icon={<Code2 size={18} />}
                        title="Register"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/prizepool"
                        icon={<Trophy size={18} />}
                        title="Prize Pool"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/rules"
                        icon={<BookOpen size={18} />}
                        title="Rulebook"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/sponsors"
                        icon={<Handshake size={18} />}
                        title="Sponsors"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                </div>
            </div>
        </div>
    );
};

const NavCard = ({
    to,
    icon,
    title,
    delay,
    variants,
    bgColor,
    textColor,
    borderColor
}) => (
    <motion.div
        variants={variants(delay)}
        animate="animate"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
        style={{ width: '150px', height: '70px' }}
    >
        <div
            className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition"
            style={{ backgroundColor: bgColor }}
        />

        <Link to={to} className="block h-full w-full no-underline hover:no-underline">
            <div
                className="relative h-full w-full rounded-full flex items-center justify-center gap-3 px-4 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                    backgroundColor: bgColor,
                    border: `1px solid ${borderColor}`
                }}
            >
                <div className="flex items-center gap-2">
                    <div
                        className="p-1.5 rounded-full bg-white/10 group-hover:rotate-12 transition-transform"
                        style={{ color: textColor }}
                    >
                        {React.cloneElement(icon, { color: textColor })}
                    </div>

                    <h3 className="text-sm font-bold tracking-wide" style={{ color: textColor }}>
                        {title}
                    </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
        </Link>
    </motion.div>
);

export default Home;
