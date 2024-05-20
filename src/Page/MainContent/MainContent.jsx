
import React from "react";
import {
  FaSearch,
} from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { MdAddPhotoAlternate, MdLocalActivity } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import LiveEvent from "../LiveEvent/LiveEvent";
import FollowSuggestion from "../FollowSuggestion/FollowSuggestion";
import Story from "../Stories/Story";
import Newsfeed from "./Newsfeed/Newsfeed";

const MainContent = () => {


 

  return (
    <>
      {/* Main Content */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto p-4">
       <Story></Story>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="w-full mb-4">
            {/* search */}
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pr-10 pl-4 rounded-full border border-gray-300 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                >
                  <FaSearch className="text-gray-900" />
                </button>
              </div>
            </form>
          </div>
          <div className="items-center">
            <div className="flex items-center text-lg">
              <p>
                <IoCreateOutline />
              </p>
              <p>Create Post</p>
            </div>
            <textarea
              className="flex-grow p-2 border border-gray-300 rounded-l-lg w-full"
              placeholder="What's on your mind?"
            ></textarea>
            <div className="flex items-center space-x-4">
              <Link>
                {" "}
                <div className="flex items-center">
                  <RiLiveLine className="mr-1" />
                  <p>Live Video</p>
                </div>
              </Link>
              <Link>
                {" "}
                <div className="flex items-center">
                  <MdAddPhotoAlternate className="mr-1" />
                  <p>Photo/Video</p>
                </div>
              </Link>
              <Link>
                <div className="flex items-center">
                  <MdLocalActivity className="mr-1" />
                  <p>Feeling/Activity</p>
                </div>
              </Link>
              <div className="flex items-center">
                <Link>
                  {" "}
                  <IoIosMore size={25} className="ml-60" />
                </Link>
              </div>
            </div>
          </div>
        </div>


        <Newsfeed></Newsfeed>
          {/* live event */}
            <LiveEvent></LiveEvent>

{/* follow Suggestion */}
        <FollowSuggestion></FollowSuggestion>

       
      </div>
    </>
  );
};

export default MainContent;
