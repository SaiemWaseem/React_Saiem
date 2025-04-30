import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl font-sans">
            {/* Hero Section */}
            <aside className="relative text-white rounded-lg sm:mx-16 mx-2 sm:py-24 py-16 overflow-hidden bg-[url('https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center shadow-xl">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                <div className="relative z-10 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-10">
                    {/* Left Side Image */}
                    <div className="sm:w-1/3 w-full flex justify-center sm:justify-start">
                        <img
                            className="w-56 sm:w-64 opacity-90 rounded-2xl shadow-lg transform transition-transform duration-700 hover:scale-105"
                            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Decorative Visual"
                        />
                    </div>

                    {/* Right Side Text */}
                    <div className="max-w-xl text-center sm:text-right space-y-8">
                        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                            Explore Data Science
                            <span className="block mt-2 text-2xl sm:text-3xl text-white/80 font-medium">Unlock the Power of Insights</span>
                        </h2>

                        <Link
                            className="inline-flex items-center px-7 py-4 font-semibold text-white bg-gradient-to-r from-orange-600 to-red-500 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Dataset
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Mid Section */}
            <div className="grid place-items-center sm:mt-24 mt-14">
                <img
                    className="sm:w-96 w-56 rounded-2xl shadow-2xl animate-float"
                    src="https://images.pexels.com/photos/6981024/pexels-photo-6981024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Second Visual"
                />
            </div>

            {/* Footer Section */}
            <h1 className="text-center text-3xl sm:text-5xl py-14 font-bold text-gray-900 dark:text-white tracking-tight">
                Empower Your Decisions with Data
            </h1>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes gradientMove {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradientMove 5s ease infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
