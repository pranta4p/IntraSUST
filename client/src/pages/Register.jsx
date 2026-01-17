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
    ArrowLeft,
    Code,
    Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Unboxed -> Glass Boxed Input Group
const InputGroup = ({ label, icon: Icon, children, note }) => (
    <div className="mb-6 last:mb-0 mx-auto" style={{ width: '454px', maxWidth: '100%' }}>
        <label className="block text-cyan-300 text-sm font-bold mb-2 ml-1 shadow-[0_0_10px_black]">{label}</label>
        <div
            className="flex items-center bg-cyan-900/10 backdrop-blur-md border border-cyan-500/30 rounded-xl overflow-hidden focus-within:border-cyan-400 focus-within:bg-cyan-900/20 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300"
            style={{ height: '57px' }}
        >
            <div className="h-full w-14 text-cyan-400 flex items-center justify-center border-r border-cyan-500/10">
                <Icon size={24} />
            </div>
            <div className="flex-1 h-full flex items-center">
                {children}
            </div>
        </div>
        {note && (
            <p className="text-xs text-cyan-500/80 mt-1.5 ml-1 font-mono italic">
                {note}
            </p>
        )}
    </div>
);

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        department: '',
        session: '',
        contactNumber: '',
        tshirtSize: '',
        cfHandle: '',
        canBringLaptop: '',
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
            const res = await axios.post('/api/register', formData);
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

    // InputGroup removed from here

    if (status.type === 'success') {
        return (
            <div className="min-h-screen flex items-center justify-center py-20 px-4 font-mono relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-lg p-10 text-center relative z-10"
                >
                    <CheckCircle size={80} className="text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">Registration Complete!</h2>
                    <p className="text-cyan-100 mb-8 text-lg">Thank you for registering for Intra SUST Programming Contest - 2026.</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/" className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold py-3 rounded-lg hover:bg-cyan-500/40 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
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
                                    cfHandle: ''
                                });
                            }}
                            className="bg-transparent text-gray-300 font-bold py-3 hover:text-white transition-colors"
                        >
                            Register Another Person
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-20 px-4 font-mono relative">
            <div
                className="w-full max-w-6xl p-8 md:p-12 relative z-10"
            >
                <Link to="/" className="text-cyan-400 hover:text-white mb-8 inline-flex items-center transition-transform hover:-translate-x-1">
                    <ArrowLeft size={32} />
                </Link>

                <h2 className="text-4xl font-bold mb-2 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] tracking-tight">
                    Registration Form
                </h2>
                <p className="text-center text-cyan-500/80 mb-10 font-bold">Intra SUST Programming Contest - 2026</p>

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
                                    style={{ color: 'white' }}
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
                                    style={{ color: 'white' }}
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

                            <InputGroup
                                label="Can you bring a laptop if needed?"
                                icon={Laptop}
                                note="* We will verify and arrange devices for those who cannot."
                            >
                                <div className="flex flex-col w-full h-full justify-center">
                                    <select
                                        name="canBringLaptop"
                                        value={formData.canBringLaptop}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-none px-4 text-lg text-white focus:outline-none focus:ring-0 appearance-none cursor-pointer [&>option]:bg-gray-900"
                                        style={{ color: 'white' }}
                                    >
                                        <option value="" disabled style={{ color: 'white', backgroundColor: '#02021b' }}>Select Option</option>
                                        <option value="Yes" style={{ color: 'white', backgroundColor: '#02021b' }}>Yes</option>
                                        <option value="No" style={{ color: 'white', backgroundColor: '#02021b' }}>No</option>
                                    </select>
                                </div>
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
                                    style={{ color: 'white' }}
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
                                    style={{ color: 'white' }}
                                />
                            </InputGroup>

                            <InputGroup label="Codeforces Handle" icon={Code}>
                                <input
                                    type="text"
                                    name="cfHandle"
                                    value={formData.cfHandle}
                                    onChange={handleChange}
                                    // Not strictly required maybe? Let's make it optional or required as per "fill up" implies required. User said "another option to fill up". Let's assume required for a programming contest.
                                    className="w-full h-full bg-transparent border-none px-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="tourist"
                                    style={{ color: 'white' }}
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
            </div>
        </div>
    );
};

export default Register;
