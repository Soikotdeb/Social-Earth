

import React from 'react';
import { FaNewspaper, FaMedal, FaCompass, FaUsers, FaUserAlt, FaEnvelope, FaHotel, FaCalendarAlt, FaVideo, FaChartLine, FaCog, FaComments } from 'react-icons/fa';

const LeftSidebar = () => {
    return (
        <>
            {/* Left Sidebar */}
            <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">New Feeds</h2>
                    <ul>
                        <li className="mb-2 flex items-center"><FaNewspaper className="mr-2" /> NewsFeed</li>
                        <li className="mb-2 flex items-center"><FaMedal className="mr-2" /> Badges</li>
                        <li className="mb-2 flex items-center"><FaCompass className="mr-2" /> Explore Stories</li>
                        <li className="mb-2 flex items-center"><FaUsers className="mr-2" /> Popular Group</li>
                        <li className="mb-2 flex items-center"><FaUserAlt className="mr-2" /> Author Profile</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Explore</h2>
                    <ul>
                        <li className="mb-2 flex items-center"><FaEnvelope className="mr-2" /> Email Box</li>
                        <li className="mb-2 flex items-center"><FaHotel className="mr-2" /> Near Hotel</li>
                        <li className="mb-2 flex items-center"><FaCalendarAlt className="mr-2" /> Latest Event</li>
                        <li className="mb-2 flex items-center"><FaVideo className="mr-2" /> Live Stream</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Account</h2>
                    <ul>
                        <li className="mb-2 flex items-center"><FaChartLine className="mr-2" /> Analytics</li>
                        <li className="mb-2 flex items-center"><FaCog className="mr-2" /> Settings</li>
                        <li className="mb-2 flex items-center"><FaComments className="mr-2" /> Chat</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
