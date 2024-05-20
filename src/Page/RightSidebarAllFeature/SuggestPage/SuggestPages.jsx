import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const suggestedPages = [
  {
    name: 'Tech World',
    description: 'Latest updates in technology.',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Healthy Living',
    description: 'Tips for a healthy lifestyle.',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Travel Diaries',
    description: 'Explore the world with us.',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  // Add more suggested pages as needed
];

const SuggestPages = () => {
  return (
    // <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        {suggestedPages.map((page, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {page.avatarUrl ? (
                <img
                  src={page.avatarUrl}
                  alt="Page Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 rounded-full mr-2" />
              )}
              <div>
                <p className="font-semibold">{page.name}</p>
                <p className="text-gray-500 text-sm">{page.description}</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestPages;
