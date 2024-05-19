
import React from "react";
import {
  FaComment,
  FaSearch,
  FaShare,
  FaThumbsUp,
  FaUserCircle,
} from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { MdAddPhotoAlternate, MdLocalActivity } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MainContent = () => {
  const stories = [
    { image: "story1.jpg", title: "Story 1" },
    { image: "story2.jpg", title: "Story 2" },
    { image: "story2.jpg", title: "Story 3" },
    { image: "story2.jpg", title: "Story 4" },
    { image: "story2.jpg", title: "Story 5" },
    { image: "story2.jpg", title: "Story 6" },
    { image: "story2.jpg", title: "Story 7" },
    // Add more stories as needed
  ];

  const posts = [
    {
      userAvatar:
        "data:image/jpeg;base64,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",
      userName: "John Doe",
      time: "2 hrs ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      {/* Main Content */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto p-4">
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-xl font-semibold mb-4">Stories</h2>
          <div className="flex space-x-4 overflow-x-scroll">
            {stories.map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg"
              >
                {story.title}
              </div>
            ))}
          </div>
        </div>
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


        {/* Newsfeed */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-xl font-semibold mb-4">Newsfeed</h2>
          {posts.map((post, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-4">
                {post.userAvatar ? (
                  <img
                    src={post.userAvatar}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 rounded-full mr-2" />
                )}
                <div>
                  <p className="font-semibold">{post.userName}</p>
                  <p className="text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  className="w-full rounded-lg"
                />
              )}

              {/* Like, Comment, Share */}
              <div className="flex justify-between items-center mt-4 ">
                <div className="flex items-center space-x-4 ">
                  <Link className="flex items-center space-x-2 border rounded-full p-1">
                    <FaThumbsUp className="text-blue-500" />
                    <span>Like</span>
                  </Link>
                  <Link className="flex items-center space-x-2 border rounded-full p-1">
                    <FaComment className="text-blue-500" />
                    <span>Comment</span>
                  </Link>
                  <Link className="flex items-center space-x-2 border rounded-full p-1">
                    <FaShare className="text-blue-500" />
                    <span>Share</span>
                  </Link>
                </div>
                <Link>
                  <IoIosMore size={25} />
                </Link>
              </div>
            </div>
          ))}
        </div>


                {/* Follow Suggestions */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-xl font-semibold mb-4">Follow Suggestions</h2>
          {posts.map((post, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
