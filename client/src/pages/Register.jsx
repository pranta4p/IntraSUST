import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
    Send,
    CheckCircle,
    AlertCircle,
    User,
    Hash,
    Building2,
    Phone,
    Calendar,
    Shirt,
    ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        department: '',
        session: '',
        contactNumber: '',
        tshirtSize: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const sessions = ['2022-2023', '2023-2024', '2024-2025'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        if (!formData.session || !formData.tshirtSize) {
            setStatus({ type: 'error', message: 'Please select both Session and T-shirt Size.' });
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/register', formData);
            setStatus({ type: 'success', message: res.data.message });
        } catch (err) {
            setStatus({
                type: 'error',
                message: err.response?.data?.message || 'Registration failed. Try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const pageBgColor = "#053c8fff";

    // Reusable Input Group Component
    // 1.5cm height ≈ 57px
    // 12cm width ≈ 454px
    const InputGroup = ({ label, icon: Icon, children }) => (
        <div className="mb-6 last:mb-0 mx-auto" style={{ width: '454px', maxWidth: '100%' }}>
            <label className="block text-gray-300 text-sm font-bold mb-2 ml-1">{label}</label>
            <div
                className="flex items-center border border-white/30 rounded-lg overflow-hidden focus-within:border-neon-green focus-within:ring-1 focus-within:ring-neon-green/50 transition-all duration-300"
                style={{ height: '57px', backgroundColor: '#02021bff' }}
            >
                <div className="h-full w-14 border-r border-white/10 text-cyan-300 flex items-center justify-center">
                    <Icon size={24} />
                </div>
                <div className="flex-1 h-full flex items-center">
                    {children}
                </div>
            </div>
        </div>
    );

    if (status.type === 'success') {
        return (
            <div className="min-h-screen relative flex items-center justify-center py-20 px-4" style={{ backgroundColor: pageBgColor }}>
                <ParticleBackground />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-lg p-10 rounded-2xl text-center relative z-10"
                    style={{ backgroundColor: '#02021bff', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                    <CheckCircle size={80} className="text-neon-green mx-auto mb-6 drop-shadow-lg" />
                    <h2 className="text-3xl font-bold mb-4 neon-text text-white">Registration Complete!</h2>
                    <p className="text-gray-200 mb-8 text-lg">Thank you for registering for INTRA SUST.</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/" className="bg-neon-green text-dark-bg font-bold py-3 rounded-lg hover:bg-green-400 transition-colors shadow-lg">
                            Go Home
                        </Link>
                        <button
                            onClick={() => {
                                setStatus({ type: '', message: '' });
                                setFormData({
                                    name: '',
                                    registrationNumber: '',
                                    department: '',
                                    session: '',
                                    contactNumber: '',
                                    tshirtSize: '',
                                });
                            }}
                            className="bg-transparent border border-gray-400 text-gray-200 font-bold py-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Register Another Person
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative flex items-center justify-center py-20 px-4" style={{ backgroundColor: pageBgColor }}>
            <ParticleBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                // Increased max-width to max-w-6xl to comfortably fit two 454px columns + gap + padding
                className="w-full max-w-6xl p-8 md:p-12 relative z-10"
            >
                <Link to="/" className="text-white hover:text-cyan-300 mb-8 inline-flex items-center transition-transform hover:-translate-x-1">
                    <ArrowLeft size={32} />
                </Link>

                <h2 className="text-4xl font-bold mb-10 text-center text-white drop-shadow-md tracking-tight">
                    Registration Form
                </h2>

                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 mb-8 rounded-lg flex items-center gap-3 shadow-lg border ${status.type === 'success' ? 'bg-green-500/20 border-green-500/50 text-green-200' : 'bg-red-500/20 border-red-500/50 text-red-200'}`}
                    >
                        {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                        <span className="font-medium">{status.message}</span>
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                        {/* Left Column */}
                        <div className="space-y-4">
                            <InputGroup label="Full Name" icon={User}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>

                            <InputGroup label="Department" icon={Building2}>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="CSE"
                                />
                            </InputGroup>

                            <InputGroup label="Session" icon={Calendar}>
                                <select
                                    name="session"
                                    value={formData.session}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white focus:outline-none focus:ring-0 appearance-none cursor-pointer [&>option]:bg-gray-900"
                                    style={{ color: 'white' }}
                                >
                                    <option value="" disabled style={{ color: 'white', backgroundColor: '#02021b' }}>Select Session</option>
                                    {sessions.map((s) => (
                                        <option key={s} value={s} style={{ color: 'white', backgroundColor: '#02021b' }}>{s}</option>
                                    ))}
                                </select>
                            </InputGroup>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <InputGroup label="Registration Number" icon={Hash}>
                                <input
                                    type="text"
                                    name="registrationNumber"
                                    value={formData.registrationNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="2020331000"
                                />
                            </InputGroup>

                            <InputGroup label="Contact Number" icon={Phone}>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="01712345678"
                                />
                            </InputGroup>

                            <InputGroup label="T-shirt Size" icon={Shirt}>
                                <select
                                    name="tshirtSize"
                                    value={formData.tshirtSize}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white focus:outline-none focus:ring-0 appearance-none cursor-pointer [&>option]:bg-[#02021b]"
                                    style={{ color: 'white' }}
                                >
                                    <option value="" style={{ color: 'white', backgroundColor: '#02021b' }}>Select Size</option>
                                    {sizes.map((s) => (
                                        <option key={s} value={s} style={{ color: 'white', backgroundColor: '#02021b' }}>{s}</option>
                                    ))}
                                </select>
                            </InputGroup>
                        </div>
                    </div>
                    <div>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="pt-8 flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '454px',
                                height: '57px',
                                backgroundColor: '#ffffff',
                                border: '1px solid rgba(255,255,255,0.3)'
                            }}
                            className="rounded-lg text-[#02021b] font-bold hover:bg-gray-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl text-lg"
                        >
                            {loading ? 'Registering...' : <><Send size={22} /> SUBMIT</>}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;
