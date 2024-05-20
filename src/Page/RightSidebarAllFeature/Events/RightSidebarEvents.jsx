import React from 'react';

const events = [
  {
    name: 'Tech Conference 2024',
    date: 'May 25, 2024',
    time: '10:00 AM - 4:00 PM',
  },
  {
    name: 'Art Exhibition',
    date: 'June 10, 2024',
    time: '2:00 PM - 6:00 PM',
  },
  {
    name: 'Music Concert',
    date: 'June 30, 2024',
    time: '7:00 PM - 10:00 PM',
  },
  // Add more events as needed
];

const RightSidebarEvents = () => {
  return (
    // <div className="w-full md:w-1/4 h-screen overflow-y-auto p-4">
    <div className="">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        {events.map((event, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">{event.name}</h3>
            <p className="text-gray-500 text-sm">{event.date}</p>
            <p className="text-gray-500 text-sm">{event.time}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebarEvents;
