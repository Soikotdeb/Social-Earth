import React from 'react';
import FriendRequest from '../RightSidebarAllFeature/FriendRequest/FriendRequest';
import ConfirmedFriend from '../RightSidebarAllFeature/ConfirmedFriend/ConfirmedFriend';
import SuggestPages from '../RightSidebarAllFeature/SuggestPage/SuggestPages';
import RightSidebarEvents from '../RightSidebarAllFeature/Events/RightSidebarEvents';
import PhotoGallery from '../RightSidebarAllFeature/PhotoGallery/PhotoGallery';
import PopularGroup from '../RightSidebarAllFeature/PopularGroup/PopularGroup';

const RightSidebar = () => {
    return (
        <>
             {/* Right Sidebar */}
             <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
                        <FriendRequest></FriendRequest>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Confirm Friends</h2>
                       <ConfirmedFriend></ConfirmedFriend>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Suggest Pages</h2>
                       <SuggestPages></SuggestPages>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                       <RightSidebarEvents></RightSidebarEvents>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Photos Gallery</h2>
                      <PhotoGallery></PhotoGallery>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Popular Groups</h2>
                       <PopularGroup></PopularGroup>
                    </div>
                </div>
        </>
    );
};

export default RightSidebar;