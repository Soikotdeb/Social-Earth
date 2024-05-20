import React from 'react';

const people = [
    {
      name: 'John Doe',
      role: 'Event Organizer',
      imageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
    },
    {
      name: 'Jane Smith',
      role: 'Speaker',
      imageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
    },
    {
      name: 'Sam Wilson',
      role: 'Host',
      imageUrl: 'https://i.ibb.co/ygGhfN1/your-image-name.jpg', // Replace with the direct image URL
    },
    // Add more people as needed
  ];

const LiveEvent = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-lg mb-6">Live Events</h2>
        <div className="flex space-x-4 overflow-x-scroll pb-4">
          {people.map((person) => (
            <div key={person.name} className="bg-white rounded-lg shadow-md w-64 p-4 flex-shrink-0">
              <img className="h-16 w-16 rounded-full mx-auto mb-4" src={person.imageUrl} alt={person.name} />
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">{person.name}</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600 text-center mb-4">{person.role}</p>
              <div className="flex justify-center">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full text-sm">See Live</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEvent;
