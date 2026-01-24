import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-20 px-4 font-mono relative">
            <div className="w-full max-w-4xl p-8 md:p-12 relative z-10 text-center">

                <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Registration is closed
                </h2>

                <p className="text-xl text-cyan-100 mb-8">
                    Please check room allocation at:
                </p>

                <div className="mb-16">
                    <a
                        href="https://drive.google.com/file/d/1vvLyupgATvu_WoUkumHsTff753VdbaPj/view?fbclid=IwY2xjawPf7gZleHRuA2FlbQIxMABicmlkETF3SHlPa1paMTR2OWVzZnZSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgZGwqW9gxoNTGtOIemBMtC2lobGDw8tY_028uJJjxXJuAHKDkWpLIw32Z6r_aem_4bryEeBdTMB2bq7s2FMRKQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white break-all text-lg font-bold"
                        style={{ color: '#89F5A2' }}
                    >
                        View Room Allocation
                    </a>
                </div>

                <div className="text-3xl font-bold text-white animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    GOOD LUCK for the contest
                </div>
            </div>
        </div>
    );
};

export default Register;
