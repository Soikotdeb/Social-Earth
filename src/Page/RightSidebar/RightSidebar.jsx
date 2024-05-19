import React from 'react';

const RightSidebar = () => {
    return (
        <>
             {/* Right Sidebar */}
             <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
                        {/* Friend request items */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Confirm Friends</h2>
                        {/* Friend confirmation items */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Suggest Pages</h2>
                        {/* Suggested pages items */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Events</h2>
                        {/* Event items */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Photos</h2>
                        {/* Photo items */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Popular Groups</h2>
                        {/* Popular groups items */}
                    </div>
                </div>
        </>
    );
};

export default RightSidebar;