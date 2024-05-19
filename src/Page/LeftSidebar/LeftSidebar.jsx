import React from 'react';
import {  FaUserFriends, FaCog, FaChartLine } from 'react-icons/fa';
const LeftSidebar = () => {
    return (
      <>
            {/* Left Sidebar */}
            <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">New Feeds</h2>
                        <ul>
                            <li className="mb-2 flex items-center"><FaUserFriends className="mr-2" /> NewsFeed</li>
                            <li className="mb-2 flex items-center"><FaChartLine className="mr-2" /> Badges</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" /> ExploreStories</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" /> Popular Group</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" /> Author Profile</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Explore</h2>
                        <ul>
                            <li className="mb-2 flex items-center"><FaUserFriends className="mr-2" />Email Box</li>
                            <li className="mb-2 flex items-center"><FaChartLine className="mr-2" /> Near Hotel</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" />Latest Event</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" />Live Stream</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Account</h2>
                        <ul>
                            <li className="mb-2 flex items-center"><FaChartLine className="mr-2" /> Analytics</li>
                            <li className="mb-2 flex items-center"><FaCog className="mr-2" /> Settings</li>
                            <li className="mb-2 flex items-center"><FaUserFriends className="mr-2" /> Chat</li>
                        </ul>
                    </div>
                </div>
                </>
    );
};

export default LeftSidebar;