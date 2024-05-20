import React from 'react';
import { FaUserCircle, FaPlusCircle } from 'react-icons/fa';

const stories = [
  {
    name: 'John Doe',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
    storyImageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Jane Smith',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
    storyImageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  {
    name: 'Sam Wilson',
    avatarUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
    storyImageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  },
  // Add more stories as needed
];

const Story = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Stories</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        <div className="flex-shrink-0 w-24 h-36 relative bg-gray-200 rounded-lg flex items-center justify-center">
          <FaPlusCircle className="text-blue-500 text-4xl" />
          <p className="absolute bottom-1 text-sm">Create Story</p>
        </div>
        {stories.map((story, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-36 relative">
            <img
              src={story.storyImageUrl}
              alt={story.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-1 bg-black bg-opacity-50 rounded-b-lg">
              <div className="flex items-center">
                {story.avatarUrl ? (
                  <img
                    src={story.avatarUrl}
                    alt="User Avatar"
                    className="w-6 h-6 rounded-full mr-2 border-2 border-white"
                  />
                ) : (
                  <FaUserCircle className="w-6 h-6 rounded-full mr-2 text-white" />
                )}
                <p className="text-xs text-white">{story.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
