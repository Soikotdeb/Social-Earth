import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.jpg"
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from 'react-icons/ci';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <div><div className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} alt="Logo" className="h-8 w-auto mr-2 rounded-full" />
                    <p className="text-sm font-semibold">Empowering Connections, Securing Data</p>
                </div>
                </div>

                <div className="flex items-center space-x-4">
                    <p className="text-sm font-semibold">Follow Us : </p>
                    <Link to="#" className="text-white hover:text-gray-400">
                        <FaFacebook size={24} />
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-400">
                        <CiLinkedin size={24} />
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-400">
                        <BsYoutube size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
