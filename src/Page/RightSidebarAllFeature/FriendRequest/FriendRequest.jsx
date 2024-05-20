import React from 'react';
import { FaUserCircle, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const friendRequests = [
  {
    name: 'John Doe',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Jane Smith',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Sam Wilson',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  // Add more friend requests as needed
];

const FriendRequest = () => {
  return (
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        {friendRequests.map((request, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {request.avatarUrl ? (
                <img
                  src={request.avatarUrl}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 rounded-full mr-2" />
              )}
              <div>
                <p className="font-semibold">{request.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="#" className="text-green-500 hover:text-green-700">
                <FaCheck className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-red-500 hover:text-red-700">
                <FaTimes className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequest;
