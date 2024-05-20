

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomeView from '../HomeView/HomeView';
import Footer from '../footer/Footer';


const Home = () => {
    return (
        <div className="mt-2">
            <NavBar />
            <div className=" mx-auto ">
                <Routes>
                    <Route path="/" element={<HomeView></HomeView>} />
                    <Route path="/home" element={<HomeView></HomeView>} />
                    <Route path="/friend-request" element={<div>This is the friend request view</div>} />
                    <Route path="/video" element={<div>This is the video view</div>} />
                    <Route path="/chat" element={<div>This is the chat view</div>} />
                    <Route path="/menu" element={<div>This is the menu view</div>} />
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

