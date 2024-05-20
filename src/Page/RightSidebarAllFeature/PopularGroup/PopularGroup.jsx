import React from 'react';

const groups = [
  { name: 'Travel Enthusiasts', members: 2500, image: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg' },
  { name: 'Photography Lovers', members: 1800, image: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg' },
  { name: 'Fitness Fanatics', members: 3200, image: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg' },
  // Add more group data as needed
];

const PopularGroup = () => {
  return (
    <div className="mx-auto px-1 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2">
        {groups.map((group, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-56">
              <img
                src={group.image}
                alt={group.name}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-gray-600">{group.members} members</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGroup;
