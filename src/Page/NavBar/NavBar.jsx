
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaSun, FaUserCircle } from 'react-icons/fa';
import { IoMdHome, IoMdVideocam, IoMdChatbubbles, IoMdPersonAdd } from 'react-icons/io';
import logo from "../../img/logo.jpg";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="bg-white border-b border-gray-200 w-full fixed top-0 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side with logo and search */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img src={logo} alt="Social Earth Logo" className="h-14 w-auto rounded-full" />
                            </Link>
                        </div>
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="py-2 pl-10 pr-4 rounded-full border border-gray-300 w-64 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    {/* Center navigation links */}
                    <div className="flex items-center space-x-8">
                        <button onClick={() => handleNavigation('/home')} className="text-gray-900 inline-flex items-center text-sm font-medium hover:text-blue-500">
                            <IoMdHome className="mr-1" size={24} />
                            Home
                        </button>
                        <button onClick={() => handleNavigation('/video')} className="text-gray-900 inline-flex items-center text-sm font-medium hover:text-blue-500">
                            <IoMdVideocam className="mr-1" size={24} />
                            Video
                        </button>
                        <button onClick={() => handleNavigation('/chat')} className="text-gray-900 inline-flex items-center text-sm font-medium hover:text-blue-500">
                            <IoMdChatbubbles className="mr-1" size={24} />
                            Chat
                        </button>
                        <button onClick={() => handleNavigation('/friend-request')} className="text-gray-900 inline-flex items-center text-sm font-medium hover:text-blue-500">
                            <IoMdPersonAdd className="mr-1" size={24} />
                            Friend Request
                        </button>
                    </div>
                    {/* Right side with icons */}
                    <div className="flex items-center space-x-4">
                        <FaBell size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                        <FaSun size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                        <FaUserCircle size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    <button onClick={() => handleNavigation('/home')} className="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
                        Home
                    </button>
                    <button onClick={() => handleNavigation('/video')} className="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
                        Video
                    </button>
                    <button onClick={() => handleNavigation('/chat')} className="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
                        Chat
                    </button>
                    <button onClick={() => handleNavigation('/friend-request')} className="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
                        Friend Request
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


