import React from 'react';
import { FaUserCircle, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const confirmedFriends = [
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
  // Add more confirmed friends as needed
];

const ConfirmedFriend = () => {
  return (
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        {confirmedFriends.map((friend, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {friend.avatarUrl ? (
                <img
                  src={friend.avatarUrl}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 rounded-full mr-2" />
              )}
              <div>
                <p className="font-semibold">{friend.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="#" className="text-blue-500 hover:text-blue-700">
                <FaEnvelope className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-green-500 hover:text-green-700">
                <FaCommentDots className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfirmedFriend;
