import React from 'react';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';

const followSuggestions = [
  {
    name: 'Alice Johnson',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
  },
  {
    name: 'Bob Smith',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
  },
  {
    name: 'Charlie Brown',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
  },
  // Add more people as needed
];

const FollowSuggestion = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Follow Suggestions</h2>
      {followSuggestions.map((person, index) => (
        <div key={index} className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center">
            {person.avatarUrl ? (
              <img
                src={person.avatarUrl}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
            ) : (
              <FaUserCircle className="w-10 h-10 rounded-full mr-2" />
            )}
            <p className="font-semibold">{person.name}</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center">
            <FaUserPlus className="mr-2" /> Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowSuggestion;
