import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center">
            <div className="flex items-center justify-center">
                <div className="rounded-full bg-gray-100 p-3 hover:shadow-md transition duration-300">
                    <div className="loader-wave flex">
                        <div className="wave h-6 w-6 bg-blue-500 mr-1 rounded-full animate-ping hover:bg-blue-700"></div>
                        <div className="wave h-6 w-6 bg-purple-500 mr-1 rounded-full animate-ping hover:bg-purple-700"></div>
                        <div className="wave h-6 w-6 bg-blue-500 mr-1 rounded-full animate-ping hover:bg-blue-700"></div>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 hover:text-blue-500">404 - Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 hover:text-blue-500">Oops! The page you are looking for might have been removed or temporarily unavailable.</p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;



// loader

{/* <div className="rounded-full bg-gray-200 p-3 ml-4">
<div className="loader-spinner border-t-4 border-b-4 border-blue-500 h-12 w-12 rounded-full animate-spin"></div>
</div>
<div className="rounded-full bg-gray-200 p-3 ml-4">
<div className="loader-pulse h-12 w-12 bg-blue-500 rounded-full animate-pulse"></div>
</div> */}