import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import logo from "../../img/logo.jpg"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 w-full fixed top-0 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="Social Earth Logo" className="h-14 w-auto mr-10 rounded-full" />
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-60">
                            <Link to="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Home
                            </Link>
                            <Link to="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Friend Request
                            </Link>
                            <Link to="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Video
                            </Link>
                            <Link to="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Chat
                            </Link>
                            <Link to="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Menu
                            </Link>
                        </div>
                    </div>
                    <div className="sm:hidden flex items-center">
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

            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    <Link to="#" className="border-indigo-500 text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Home
                    </Link>
                    <Link to="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Friend Request
                    </Link>
                    <Link to="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Video
                    </Link>
                    <Link to="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Chat
                    </Link>
                    <Link to="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Menu
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
