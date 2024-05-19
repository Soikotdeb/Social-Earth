import React from 'react';
import { FaSearch, FaPlus, FaUserFriends, FaCog, FaChartLine } from 'react-icons/fa';

const MainContent = () => {
    const stories = [
        { image: 'story1.jpg', title: 'Story 1' },
        { image: 'story2.jpg', title: 'Story 2' },
        // Add more stories as needed
    ];

    const posts = [
        { userAvatar: 'avatar1.jpg', userName: 'John Doe', time: '2 hrs ago', content: 'This is a post content', image: 'post1.jpg' },
        { userAvatar: 'avatar2.jpg', userName: 'Jane Smith', time: '3 hrs ago', content: 'Another post content' },
        // Add more posts as needed
    ];
    return (
        <>
             {/* Main Content */}
             <div className="w-full md:w-1/2 h-screen overflow-y-auto p-4">
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Stories</h2>
                        <div className="flex space-x-4 overflow-x-scroll">
                            {stories.map((story, index) => (
                                <div key={index} className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg">
                                    {story.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <div className="flex items-center mb-4">
                            <input
                                type="text"
                                className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                                placeholder="Search..."
                            />
                            <button className="p-2 bg-blue-500 text-white rounded-r-lg">
                                <FaSearch />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <textarea
                                className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                                placeholder="What's on your mind?"
                            ></textarea>
                            <button className="p-2 bg-green-500 text-white rounded-r-lg">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Newsfeed</h2>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                                {post.content}
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Live</h2>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                                {post.content}
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-4">Follow Suggestions</h2>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                                {post.content}
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
};

export default MainContent;