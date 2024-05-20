import React from 'react';

const photos = [
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  'https://i.ibb.co/ygGhfN1/your-image-name.jpg',
  // Add more photo URLs as needed
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="object-cover w-full h-full transition duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300">
              <button className="text-white text-lg">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
